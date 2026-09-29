# Maysano public website

Static React, TypeScript and Vite landing page for Maysano.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. The output is written to `dist/`.

Public links such as the demo booking destination are configured in `src/config/site.ts`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site when changes reach `main`. Vite uses relative asset paths so the build works on both a repository subpath and a custom domain.
