# Rebooted Creative Lab

Static marketing site for Rebooted Education. It highlights OttoNinja-powered creative education labs, curated electronics kits, and downloadable curriculum resources. The site is built with [Astro](https://astro.build) so it can be deployed directly to GitHub Pages without a backend.

## Stack

- Astro 6 with island-friendly components
- Vanilla CSS with expressive gradients + typography (Sora + Space Grotesk)
- GitHub Actions workflow for automated builds and Pages deployment

## Getting started

Prerequisites: Node.js 20.11+ and npm 10+.

```bash
npm install       # install dependencies
npm run dev       # start local dev server (press q to stop)
```

Key files:

- `src/pages/index.astro` – homepage sections (hero, projects, kits, timeline, CTA)
- `src/layouts/Layout.astro` – global HTML shell, fonts, and background system
- `astro.config.mjs` – base path logic for GitHub Pages vs. local dev

## Deploying to GitHub Pages

1. Push to `main` and ensure Actions are enabled in the repository.
2. The workflow in `.github/workflows/deploy.yml` builds the site with Node 20, uploads the `dist/` artifact, and publishes it with the GitHub Pages deploy action.
3. In the repo settings, set **Pages → Build and deployment** to “GitHub Actions”.

`astro.config.mjs` automatically sets the correct base path during Actions builds using the `GITHUB_REPOSITORY` environment variable. If you later add a custom domain, update the `site` value and, if desired, simplify the `base` logic.

## Customizing content

- Edit the data arrays at the top of `src/pages/index.astro` to add new kits, labs, or resource links.
- Update `public/favicon.svg` with your brand glyph (default is a simple Otto-inspired mark).
- Extend the layout or add new pages by creating `.astro` files in `src/pages/`.

## License

MIT © Rebooted Education
