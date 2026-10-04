import { publicProjects, projectSlugs } from "../app/lib/project-catalog";
import { isLocale, siteConfig } from "../app/lib/site-config";

const knownSlugs = new Set(publicProjects.map((project) => projectSlugs[project.id]));
const canonicalOrigin = new URL(siteConfig.url);

/** Keep the former Netlify exact-query redirects ahead of static assets. */
export function legacyRedirect(request: Request): Response | undefined {
  const url = new URL(request.url);
  const target = new URL(url);
  const productionHost = url.hostname === canonicalOrigin.hostname
    || url.hostname === `www.${canonicalOrigin.hostname}`;
  if (productionHost) {
    target.protocol = canonicalOrigin.protocol;
    target.host = canonicalOrigin.host;
  }

  const query = url.searchParams;
  const exact = (...keys: string[]) => query.size === keys.length
    && keys.every((key) => query.has(key));
  const lang = query.get("lang");
  const slug = query.get("proiect");
  const homeLocale = url.pathname.slice(1);
  const legacyHome = url.pathname === "/" || url.pathname === "/index.html";
  const localizedHome = isLocale(homeLocale);

  if (legacyHome || localizedHome) {
    const fallback = localizedHome ? homeLocale : "ro";
    if (slug && knownSlugs.has(slug) && isLocale(lang) && exact("lang", "proiect")) {
      target.pathname = `/${lang}/projects/${slug}`;
      target.search = "";
    } else if (slug && knownSlugs.has(slug) && exact("proiect")) {
      target.pathname = `/${fallback}/projects/${slug}`;
      target.search = "";
    } else if (isLocale(lang) && exact("lang")) {
      target.pathname = `/${lang}`;
      target.search = "";
    } else if (legacyHome) {
      target.pathname = "/ro";
    }
  } else {
    const legacyPage = /^\/(contact|intrebari)(?:\/index\.html)?$/.exec(url.pathname)?.[1];
    if (legacyPage) {
      target.pathname = `/ro/${legacyPage}`;
      if (isLocale(lang)) {
        const fields = legacyPage === "contact"
          ? [["project", "option"], ["project"], ["option"], []]
          : [[]];
        const matchedFields = fields.find((names) => exact("lang", ...names));
        if (matchedFields) {
          target.pathname = `/${lang}/${legacyPage}`;
          target.search = "";
          for (const name of matchedFields) target.searchParams.set(name, query.get(name)!);
        }
      }
    }
  }

  return target.href !== url.href ? Response.redirect(target, 301) : undefined;
}
