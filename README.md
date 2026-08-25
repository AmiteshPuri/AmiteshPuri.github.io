# Amitesh Puri — research portfolio

A static academic portfolio for **AmiteshPuri.github.io**. Plain HTML, CSS, and a
single small JavaScript file — no build step, no framework, no backend. It deploys
to GitHub Pages as-is.

Design: a "typeset applied-mathematics paper" — cool paper/ink palette, a restrained
prussian-indigo accent, Spectral (serif) + IBM Plex Sans/Mono, and hand-built SVG
method diagrams. Equations render with KaTeX (loaded from a CDN). Light/dark themes.

---

## Deploy on GitHub Pages

1. Put every file in this folder at the **root** of your repository
   `AmiteshPuri/AmiteshPuri.github.io` (so `index.html` is at the repo root).
2. Push to the `main` branch.
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, branch `main`, folder `/ (root)`. Save.
4. The site goes live at `https://AmiteshPuri.github.io/` within a minute or two.

The included empty `.nojekyll` file tells Pages to serve all folders and files
literally (so `reports/`, PDFs, etc. are never skipped by Jekyll). Leave it in place.

To preview locally, run a static server from this folder (opening the files directly
with `file://` works, but the embedded PDF previews only load over `http`):

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

---

## What is already real vs. what to add

Everything on the site is drawn from your own documents and repositories — no
fabricated results, grades, or claims. A few things are intentionally left as
drop-in slots.

**Already included and live**
- CV — `assets/cv/Amitesh_Puri_CV.pdf`
- NPTEL certificate (Mathematical Foundations of ML) — `certificates/nptel/certificate.pdf`
- Official transcripts — `assets/records/Transcript_MSc.pdf`, `assets/records/Transcript_BSc.pdf`
- Two live repositories linked from the Projects page (`NO-stresstesting`, `PI-Latent`)

**To add when you have them** (each shows a tidy placeholder until then — never a broken link/image)
- **Research reports** → drop PDFs into `reports/` (see `reports/README.md`):
  - `msc-thesis.pdf` — your main report (MSc thesis)
  - `neural-operator-failure.pdf`, `pi-latent.pdf`, `spectral-tokenization.pdf`
- **IISc "Generative Modelling from First Principles" certificate** → `certificates/genai/certificate.pdf`
- **Result figures** → export plots into `assets/figures/` (see `assets/figures/README.md`)
- **Profile photo** (optional) → `assets/images/profile.jpg`
- **LinkedIn URL** → edit the LinkedIn link in `contact.html` (currently a placeholder)
- **Repository links** for the MSc thesis and tokenization projects → edit in `projects.html`
  when those repos are public

No code changes are needed to add a report, certificate, or figure — just place the
file with the filename above and it appears automatically.

---

## Structure

```
index.html            Home
about.html            About — background and research journey
education.html        Degrees, guided projects, NPTEL + IISc credentials
research.html         Research motivation, interests, trajectory, goals
projects.html         The four research projects (the centrepiece)
contact.html          Contact links

css/style.css         Design system (light + dark)
js/main.js            Nav, theme, reveal, lazy PDF loader, KaTeX
assets/
  cv/                 CV PDF
  records/            Official transcripts (linked, not embedded)
  figures/            Result-plot slots
  images/             Optional profile photo
reports/              Research report PDFs (embedded on the Projects page)
certificates/
  nptel/              NPTEL certificate (live)
  genai/              IISc certificate slot
.nojekyll             Serve all files/folders literally on GitHub Pages
```

---

## Editing notes

- **Content lives in the HTML.** Text is written directly in each page; there is no
  CMS or data file to wire up.
- **Equations** use KaTeX with `\( … \)` (inline) and `\[ … \]` (display). Only pages
  that need math (`research.html`, `projects.html`) load KaTeX, via `class="has-math"`
  on `<body>`.
- **Theme** follows the system preference by default and remembers a manual choice.
- **Accessibility**: semantic landmarks, skip link, keyboard-visible focus, alt text on
  figures, and `prefers-reduced-motion` respected.
- The large B.Sc. transcript is only ever a download link, so it does not affect page
  load. If you want a smaller file, re-export it at a lower resolution and replace
  `assets/records/Transcript_BSc.pdf`.
