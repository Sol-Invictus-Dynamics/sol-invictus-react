# SOL-Invictus — React Web App

The SOL-Invictus | Sasol Solar Car Challenge site, rebuilt as a React
single-page app with [Vite](https://vitejs.dev/). It looks and behaves the same
as the original static site — every page, section, style, and interaction is
preserved.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (this project was built with Node 24).

## Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build locally
```

The `dist/` folder is a fully static site — deploy it to GitHub Pages, Netlify,
or any static host. The app uses a hash router (URLs like `/#/team`) and
relative asset paths, so it works from a domain root **or** a subfolder with no
server configuration.

## Project structure

```
index.html              Vite entry (mounts the React app)
public/pictures/        All images, served at runtime
src/
  main.jsx              React entry point
  App.jsx               Routes (HashRouter)
  components/           Nav, Footer (shared)
  pages/                Home, Team, Mentors, Sponsors, Blog, Newsletter
  data/                 Contact methods, team roster, blog posts
  styles/               The original stylesheets, unchanged
  hooks/usePageStyles   Injects each page's stylesheet(s) while it is mounted,
                        so every page loads exactly the CSS its original HTML
                        did — no cross-page style bleed.
  lib/asset.js          Resolves /public asset paths against the app base URL
```

## Editing content

- **Contact methods** — `src/data/contactMethods.js`
- **Team & mentors** — `src/data/teamData.js`
- **Blog posts** — `src/data/blogPosts.js`

## Notes

- The original static files (root `styles.css`, `scripts/`, `teampage/`,
  `sponsor/`, `blog/`, `news-letter/`) are left in place for reference; the
  React app does not use them. They can be removed once you're happy with the
  React version.
