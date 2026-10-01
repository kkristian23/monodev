import { spawnSync } from "node:child_process";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(root, "dist", "server", "wrangler.json");
const wranglerPath = path.join(root, "node_modules", "wrangler", "bin", "wrangler.js");
const action = process.argv[2] ?? "check";

if (action !== "check" && action !== "deploy") {
  throw new Error("Usage: node scripts/cloudflare-worker.mjs [check|deploy]");
}

let config;
try {
  config = JSON.parse(await readFile(configPath, "utf8"));
} catch (error) {
  throw new Error(`Cloudflare build output is missing. Run npm run build first. (${error.message})`);
}

// Wrangler 4.146 removed this obsolete field. Its default is the same as
// legacy_env=true, so removing it preserves the generated Worker behavior.
if (config.legacy_env === true) {
  delete config.legacy_env;
  await writeFile(configPath, `${JSON.stringify(config)}\n`);
}

const assetsDirectory = path.resolve(path.dirname(configPath), config.assets?.directory ?? "../client");
const headerPath = path.join(assetsDirectory, "_headers");
const headers = await readFile(headerPath, "utf8");
const headerRules = headers.split(/\r?\n/).filter((line) => line.length > 0 && !line.startsWith("#") && !/^\s/.test(line));
console.log(`Static asset _headers: ${headerRules.length} / 100 rules; ${ (await stat(headerPath)).size } bytes.`);
if (headerRules.length > 100) {
  throw new Error("Cloudflare allows at most 100 rules in a static asset _headers file.");
}

const redirectsPath = path.join(assetsDirectory, "_redirects");
const redirects = await readFile(redirectsPath, "utf8");
const redirectRules = redirects.split(/\r?\n/).filter((line) => line.trim().length > 0 && !line.trimStart().startsWith("#"));
console.log(`Static asset _redirects: ${redirectRules.length} / 2100 rules.`);
if (redirectRules.length > 2100) {
  throw new Error("Cloudflare allows at most 2100 rules in a static asset _redirects file.");
}

const args = [wranglerPath, "deploy", "--config", configPath];
const runtimeDirectory = path.join(root, ".runtime");
await mkdir(runtimeDirectory, { recursive: true });
const uploadPath = path.join(runtimeDirectory, "cloudflare-upload.multipart");
if (action === "check") args.push("--dry-run", "--outfile", uploadPath);
const result = spawnSync(process.execPath, args, {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 16 * 1024 * 1024,
  env: { ...process.env, WRANGLER_SEND_METRICS: "false" },
});

if (result.error) throw result.error;
if (result.status !== 0) {
  process.stderr.write(result.stdout ?? "");
  process.stderr.write(result.stderr ?? "");
  process.exit(result.status ?? 1);
}

if (action === "deploy") {
  process.stdout.write(result.stdout ?? "");
  process.stderr.write(result.stderr ?? "");
} else {
  const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  const count = output.match(/Read ([\d,]+) files from the assets directory/);
  const upload = output.match(/Total Upload: ([^\r\n]+)/);
  const body = await readFile(uploadPath);
  const boundary = body.subarray(2, body.indexOf("\r\n")).toString();
  const form = await new Response(body, {
    headers: { "Content-Type": `multipart/form-data; boundary=${boundary}` },
  }).formData();
  const part = form.get("metadata");
  if (part === null) throw new Error("Wrangler upload has no metadata part.");
  const metadata = typeof part === "string" ? part : await part.text();
  const bytes = Buffer.byteLength(metadata);
  console.log(`Worker metadata: ${bytes} / 1048576 bytes (local dry-run).`);
  console.log(`Static assets: ${count ? Number(count[1].replaceAll(",", "")) : "count unavailable"}.`);
  if (upload) console.log(`Worker bundle: ${upload[1]}.`);
  if (bytes >= 1048576) throw new Error("Worker metadata exceeds Cloudflare's 1 MiB limit.");
  // Do not print binding values; they can contain credentials.
  for (const [key, value] of Object.entries(JSON.parse(metadata))) {
    console.log(`  ${key}: ${Buffer.byteLength(JSON.stringify(value))} bytes`);
  }
}
