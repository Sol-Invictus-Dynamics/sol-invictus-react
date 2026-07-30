// Resolve a path to a file in /public relative to the app's base URL.
// With Vite `base: "./"`, BASE_URL is "./", so assets resolve relative to the
// index.html document — which keeps images working under HashRouter no matter
// what subpath the app is deployed to.
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\/+/, "");
  return base.endsWith("/") ? base + clean : base + "/" + clean;
}
