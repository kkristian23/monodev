import production from "./firebase-config.json" with { type: "json" };

// Web configuration is public. Never include Admin credentials here.
export function resolveFirebaseConfig(env) {
  const projectId = env.VITE_FIREBASE_PROJECT_ID?.trim();
  // Alternate projects (including emulators) must supply their own configuration.
  const defaults = !projectId || projectId === production.projectId ? production : {};
  return Object.fromEntries(Object.keys(production).map((key) => {
    const variable = `VITE_FIREBASE_${key.replace(/[A-Z]/g, (letter) => `_${letter}`).toUpperCase()}`;
    return [key, env[variable]?.trim() || defaults[key]];
  }));
}
