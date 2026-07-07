# Ultra Wave Technologies LLC — Company Website

Static single-page company profile site built with [Astro](https://astro.build), TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Content

Edit typed content files — no markup changes needed:

- `src/content/site.ts` — company info, about, navigation
- `src/content/services.ts` — service descriptions
- `src/content/portfolio.ts` — recent work captions
- `src/content/projects.ts` — project case studies
- `src/content/clients.ts` — partner names

Images live in `src/assets/web/`.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repo to GitHub/GitLab.
2. In Cloudflare Dashboard → Workers & Pages → Create → Connect to Git.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 22
4. Add custom domain (e.g. `ultrawaves.ae`).

### Option B — Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name=ultrawaves-sadaf
```

## Project structure

```
src/
├── assets/web/       # Optimized images (logo, heroes, portfolio)
├── components/       # Astro UI components
├── content/          # Typed content data
├── layouts/          # Base layout with SEO + JSON-LD
├── pages/            # index.astro (single-page site)
└── styles/           # Global CSS + Tailwind theme
```
