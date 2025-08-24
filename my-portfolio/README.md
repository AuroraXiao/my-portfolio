# My Portfolio (React + Vite + TypeScript + Tailwind + shadcn-style UI)

Monochrome portfolio and online CV for Ruitong Xiao.

- Tech: React, Vite, TypeScript, Tailwind CSS, shadcn-style UI (Radix), lucide-react, framer-motion, Swiper, react-router-dom, clsx, tailwind-merge, gh-pages
- Deployment: GitHub Pages (`AuroraXiao/my-portfolio`)
- Base URL: `/my-portfolio/`

## Install

```bash
pnpm i
```

## Development

```bash
pnpm dev
```

Then open http://localhost:5173/my-portfolio/

## Build

```bash
pnpm build
pnpm preview
```

## Deploy to GitHub Pages

1. Initialize repo and push:

```bash
git init
git add -A
git commit -m "init"
git branch -M main
git remote add origin https://github.com/AuroraXiao/my-portfolio.git
git push -u origin main
```

2. Enable GitHub Pages: Settings → Pages → Build and deployment → Deploy from branch → Branch: `gh-pages`.

3. Deploy from local:

```bash
pnpm deploy
```

4. Optional custom domain: add your domain to `public/CNAME`.

## Content

- Edit `src/data/site.ts`, `src/data/links.ts`, `src/data/skills.ts`, `src/data/projects.json`.
- Images: replace SVG placeholders in `src/assets/images/...` with your exports (recommended `.webp`). Keep same filenames or update JSON.
- Empty social links in `LINKS` are auto-hidden.

## Notes

- WCAG-friendly monochrome theme.
- Year is optional and hidden when missing.
- Work page supports tag filters + search; URL query reflects filters for sharing.
- Project page has tabs and related projects by tag.
- `sitemap.xml` is a static placeholder; update when adding new projects or automate if desired.


