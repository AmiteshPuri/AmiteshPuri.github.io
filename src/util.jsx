import { useEffect, useRef, useState } from 'react'

/**
 * Resolve a path under public/ to a URL that respects the Vite base.
 * Pass paths relative to public/, e.g. asset('reports/fm-paths.pdf').
 * Returns the input unchanged for falsy values or absolute/external URLs.
 */
export function asset(path) {
  if (!path) return path
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:') || path.startsWith('mailto:')) {
    return path
  }
  const base = import.meta.env.BASE_URL || '/'
  return base.replace(/\/+$/, '/') + String(path).replace(/^\/+/, '')
}

/**
 * Reveal-on-scroll wrapper. Renders `as` (default div), fades/slides its
 * children in the first time they enter the viewport. Honours reduced motion.
 */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
