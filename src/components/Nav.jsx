import { useEffect, useState } from 'react'
import { nav, profile } from '../data/site.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#top')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }
      setActive('#' + current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? 'border-b border-line bg-paper/90 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="u-container flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          className={`font-slab text-[0.95rem] font-medium tracking-tightish text-ink transition-opacity hover:opacity-80 ${
            active === '#top' ? 'opacity-0 sm:opacity-100' : 'opacity-100'
          }`}
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className={`rounded px-3 py-2 text-[0.9rem] transition-colors ${
                    active === n.href ? 'font-medium text-accent' : 'text-ink-soft hover:text-accent'
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded text-ink-soft hover:text-accent sm:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <ThemeToggle />
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line bg-paper px-6 py-2 sm:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm ${active === n.href ? 'text-accent' : 'text-ink-soft'}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
