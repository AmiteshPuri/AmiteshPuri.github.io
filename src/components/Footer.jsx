import { profile } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="u-container flex flex-col items-center justify-between gap-3 py-8 text-sm text-ink-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="text-xs">
          Built with React, Vite &amp; Tailwind · deployed on GitHub Pages
        </span>
      </div>
    </footer>
  )
}
