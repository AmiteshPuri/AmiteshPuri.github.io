# Amitesh Puri — research homepage

A personal academic homepage built with **Vite + React + Tailwind CSS**, styled after the
[al-folio](https://github.com/alshedivat/al-folio) look (as on
[bonevbs.github.io](https://bonevbs.github.io)): a single dark page with a light toggle, Roboto /
Roboto Slab type, a green accent, and a "selected reports" list that shows each report with a
page-1 preview, title, authors, and `abs / Read / PDF / Code` buttons.

Deploys to **AmiteshPuri.github.io** via GitHub Actions — push the source, Actions builds it and
publishes.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built dist/ locally
```

Node 18+ required. The embedded PDF viewer needs to be served over http (dev, preview, or the
deployed site) — opening the built files straight off disk won't load the PDFs.

## Deploy

The workflow at `.github/workflows/deploy.yml` builds on every push to `main` and deploys to Pages.
One-time setup on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
The site goes live at `https://AmiteshPuri.github.io/`. `vite.config.js` sets `base: '/'`.

## Editing content

Almost everything lives in **`src/data/site.js`** — profile text and bio, the two reports (title,
abstract, findings, tags, links), the code repositories, education, thesis, credentials, and
skills. Edit that file; no component changes needed for normal updates.

### Files (all under `public/`, referenced from `site.js`)

| What | Path | Set in `site.js` |
|---|---|---|
| Profile photo (square) | `public/images/profile.jpg` | `profile.photo` |
| CV | `public/cv/Amitesh_Puri_CV.pdf` | `profile.cv` |
| Report PDFs | `public/reports/fm-ood-residual.pdf`, `public/reports/fm-paths.pdf` | `reports[].pdf` |
| Report page-1 previews | `public/reports/fm-ood-preview.png`, `public/reports/fm-paths-preview.png` | `reports[].preview` |
| Thesis / MSc project report | `public/thesis/MSc_Project_Report.pdf` | `thesis.pdf` |
| Certificates | `public/certificates/*.pdf` | `education[].cert`, `credentials[].pdf` |

**CV is not added yet** — drop `Amitesh_Puri_CV.pdf` into `public/cv/` and the CV links light up.

To regenerate a report preview after replacing a PDF (needs `pdftoppm` from poppler / MiKTeX):

```bash
pdftoppm -png -f 1 -l 1 -scale-to-x 500 public/reports/fm-paths.pdf public/reports/fm-paths-preview
# then rename the produced *-01.png to fm-paths-preview.png
```

## Structure

```
index.html                 fonts (Roboto / Roboto Slab), no-flash theme init (dark default)
vite.config.js  tailwind.config.js  postcss.config.js
.github/workflows/deploy.yml
public/  reports/ cv/ certificates/ thesis/ images/
src/
  main.jsx  App.jsx  index.css  util.jsx      (asset() + <Reveal>)
  data/site.js                                ← all content
  components/  Nav, ThemeToggle, About, Reports, ReportCard, PdfModal,
               Code, Background, Contact, Footer
```

Design: dark by default with a light toggle (persisted in `localStorage`); palette and type live as
CSS variables in `src/index.css` (`--accent` is al-folio's green `#1db866` — change it there).

Content is drawn from the CV, certificates, and the two reports — no fabricated results.
