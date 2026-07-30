import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps all asset URLs relative, so the built app works whether it
// is hosted at a domain root (e.g. a custom domain) or in a subfolder
// (e.g. GitHub Pages project sites). Combined with HashRouter, deep links and
// page refreshes work on any static host with zero server configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
