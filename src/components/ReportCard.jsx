import { BookOpen, ExternalLink, Github } from 'lucide-react'
import { asset, Reveal } from '../util.jsx'

export default function ReportCard({ report, reverse = false, onOpen }) {
  return (
    <Reveal as="article" className="scroll-mt-24">
      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,300px)_1fr] md:gap-12">
        {/* PDF page-1 preview — click to read */}
        <figure className={reverse ? 'md:order-2' : ''}>
          <button
            type="button"
            onClick={() => onOpen(report)}
            className="group relative block w-full overflow-hidden rounded-lg border border-line bg-surface shadow-soft transition-shadow hover:shadow-lift"
            aria-label={`Read ${report.title}`}
          >
            <img
              src={asset(report.preview)}
              alt={`First page of ${report.title}`}
              loading="lazy"
              className="block w-full"
              onError={(e) => {
                // Graceful placeholder until the real page-1 preview PNG is added.
                if (e.currentTarget.dataset.fallback) return
                e.currentTarget.dataset.fallback = '1'
                e.currentTarget.src =
                  'data:image/svg+xml;charset=utf-8,' +
                  encodeURIComponent(
                    `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='389' viewBox='0 0 300 389'><rect width='300' height='389' fill='rgb(244,242,238)'/><rect x='0.5' y='0.5' width='299' height='388' fill='none' stroke='rgb(210,205,197)'/><g fill='rgb(150,156,164)' font-family='sans-serif' text-anchor='middle'><text x='150' y='188' font-size='15'>Report preview</text><text x='150' y='210' font-size='11'>(add PDF to activate)</text></g></svg>`,
                  )
              }}
            />
            <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/45 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-ink">
                <BookOpen size={14} className="text-accent" /> Read report
              </span>
            </span>
          </button>
        </figure>

        <div>
          <div className="mb-1 text-sm text-ink-muted">{report.year}</div>
          <h3 className="text-2xl font-semibold leading-tight text-ink">{report.title}</h3>
          <p className="mt-1.5 text-ink-soft">{report.subtitle}</p>

          <p className="mt-5 leading-relaxed text-ink-soft">{report.summary}</p>

          <ul className="mt-5 space-y-2.5">
            {report.findings.map((f, i) => (
              <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {report.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpen(report)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >
              <BookOpen size={16} /> Read report
            </button>
            <a
              href={asset(report.pdf)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink size={16} /> Open PDF
            </a>
            <a
              href={report.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={16} /> View code
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
