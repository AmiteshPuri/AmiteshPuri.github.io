import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'
import { nav, profile } from '../data/site.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled ? 'border-line bg-paper/85 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="u-container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tightish text-ink transition-colors hover:text-accent"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-md px-3 py-2 text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="grid h-9 w-9 place-items-center rounded-md text-ink-soft transition-colors hover:bg-accent-tint hover:text-accent"
          >
            <Github size={18} />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
