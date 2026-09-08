import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [light, setLight] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('light'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark')
    } catch (e) {}
  }, [light])

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      title={light ? 'Dark theme' : 'Light theme'}
      className="grid h-9 w-9 place-items-center rounded text-ink-soft transition-colors hover:text-accent"
    >
      {light ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  )
}
