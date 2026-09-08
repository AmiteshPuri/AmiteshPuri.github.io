import { useEffect } from 'react'
import { X, Download, ExternalLink } from 'lucide-react'
import { asset } from '../util.jsx'

export default function PdfModal({ report, onClose }) {
  useEffect(() => {
    if (!report) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [report, onClose])

  if (!report) return null
  const url = asset(report.pdf)

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={report.title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col p-3 sm:p-5">
        <div className="flex items-center justify-between gap-3 rounded-t-xl border border-line bg-surface px-4 py-3">
          <div className="min-w-0">
            <div className="truncate font-display text-sm font-medium text-ink">{report.title}</div>
            <div className="truncate text-xs text-ink-muted">{report.subtitle}</div>
          </div>
          <div className="flex flex-none items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink size={14} /> Open
            </a>
            <a
              href={url}
              download
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={14} /> Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-md text-ink-soft transition-colors hover:bg-accent-tint hover:text-accent"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        <iframe
          title={report.title}
          src={`${url}#view=FitH`}
          className="min-h-0 w-full flex-1 rounded-b-xl border border-t-0 border-line bg-white"
        />
      </div>
    </div>
  )
}
