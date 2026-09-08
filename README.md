# Amitesh Puri — research homepage

A personal academic site built with **Vite + React + Tailwind CSS**. The centrepiece
is two research reports on flow matching for 2D Navier–Stokes, each shown with a real
page preview and an in-page PDF viewer.

Deploys to **AmiteshPuri.github.io** via GitHub Actions — you push the source, Actions
builds it and publishes.

## Stack

- Vite 5, React 18, Tailwind CSS 3 (dark mode via a class, palette driven by CSS
  variables so light/dark share one source of truth)
- `lucide-react` for icons
- Type: Space Grotesk (display) + Inter (body); accent is a single teal token

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built dist/ locally
```

Node 18+ is required. The embedded PDF viewer needs to be served over http (dev,
preview, or the deployed site) — opening the built files straight off disk won't load
the PDFs.

## Deploy to GitHub Pages

1. Push this project to the **root** of `AmiteshPuri/AmiteshPuri.github.io` on the
   `main` branch (source only — `node_modules` and `dist` are gitignored).
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds on every push to
   `main` and deploys. The site goes live at `https://AmiteshPuri.github.io/`.

Because this is a user site served from the domain root, `vite.config.js` sets
`base: '/'`. Assets are referenced through `import.meta.env.BASE_URL`, so nothing
breaks if you ever move it under a sub-path.

## Editing content

Almost everything lives in **`src/data/site.js`** — profile text, the two reports
(titles, summaries, findings, tags, links), education, credentials, skills, and the
other-work links. Edit that file; no component changes needed for normal updates.

- **Reports.** The PDFs are in `public/reports/` (`fm-ood-residual.pdf`,
  `fm-paths.pdf`) with page-1 previews (`*-preview.png`). To replace a report, drop in
  a new PDF under the same name and regenerate its preview, e.g.:
  ```bash
  pdftoppm -png -f 1 -l 1 -scale-to-x 820 public/reports/fm-paths.pdf public/reports/fm-paths-preview
  mv public/reports/fm-paths-preview-01.png public/reports/fm-paths-preview.png
  ```
- **Profile photo** — `public/images/profile.jpg` (currently the headshot from your
  NPTEL certificate; replace with any square image).
- **CV** — `public/cv/Amitesh_Puri_CV.pdf`.
- **LinkedIn** — set your real profile URL in `src/data/site.js` (`profile.linkedin`);
  it's a placeholder right now.
- **Accent colour** — one token. Edit `--accent`, `--accent-deep`, `--accent-tint` in
  `src/index.css` (both `:root` and `.dark`). To go back to the previous green, set
  `--accent: 21 155 82`.

## Structure

```
index.html                 fonts, no-flash theme init
vite.config.js
tailwind.config.js
postcss.config.js
.github/workflows/deploy.yml
public/
  reports/                 the two report PDFs + page previews
  cv/  certificates/  records/  images/
src/
  main.jsx  App.jsx  index.css  util.jsx
  data/site.js             ← all content
  components/              Nav, Hero, FlowMotif, Research, ReportCard,
                           PdfModal, Background, OtherWork, Contact, Footer, ThemeToggle
```

The content is drawn from your CV, certificate, and the two reports — no fabricated
results.
