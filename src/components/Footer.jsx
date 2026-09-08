import { profile } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-line">
      <div className="u-container flex flex-col items-center justify-between gap-2 py-6 text-[0.82rem] text-ink-muted sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React, Vite &amp; Tailwind · hosted on GitHub Pages</span>
      </div>
    </footer>
  )
}
