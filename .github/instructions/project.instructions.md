---
name: Project Conventions
description: "Use for any work in this React/Vite portfolio. Covers generated files, build order, secrets, and local validation."
applyTo: "**"
---

# Project Conventions

- This is a React 18, Vite, Tailwind CSS, and i18next project. Follow the existing patterns and keep changes scoped.
- Never open, print, copy, or embed values from `.env*`, GitHub secrets, Vercel secrets, or other credential files.
- Preserve existing user changes. Do not commit, tag, or push unless explicitly asked.
- Never edit generated output by hand: `public/posts.json`, `public/reviews.json`, `public/sitemap.xml`, or `dist/`. Change the source or generator instead.
- Preserve the order in `npm run build`: generate posts, fetch reviews, generate sitemap, run Vite build, then generate static per-route metadata HTML.
- Posts are MDX files in `src/posts/` with `title` and `date` frontmatter. Canonical public route metadata is defined in `src/data/seo-routes.js`.
- Use i18next for interface text and keep `public/locales/en/translation.json` and `public/locales/es/translation.json` structurally aligned.
- Validate code changes with `npm run lint`; run `npm run build` when changes affect build output or project configuration. Report external/production checks separately.
- There is no configured automated test runner; do not claim tests that were not run.

For task-specific responsibilities, use the custom agents in `.github/agents/`. Project skills are in `.github/skills/`.
