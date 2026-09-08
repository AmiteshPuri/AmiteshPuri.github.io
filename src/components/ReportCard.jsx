import { asset, Reveal } from '../util.jsx'

export default function ReportCard({ report, index = 0, onOpen }) {
  return (
    <Reveal
      as="li"
      className="report-card group scroll-mt-24"
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="grid gap-4 sm:grid-cols-[110px_1fr] sm:gap-6">
        {/* page-1 preview — click to read in the modal */}
        <button
          type="button"
          onClick={() => onOpen(report)}
          className="hidden justify-self-start overflow-hidden rounded border border-line bg-surface shadow-sm transition-shadow duration-300 hover:border-accent group-hover:shadow-md sm:block"
          aria-label={`Read ${report.title}`}
        >
          <img
            src={asset(report.preview)}
            alt={`First page of ${report.title}`}
            loading="lazy"
            width="110"
            className="block w-[110px] transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            onError={(e) => {
              if (e.currentTarget.dataset.fallback) return
              e.currentTarget.dataset.fallback = '1'
              e.currentTarget.src =
                'data:image/svg+xml;charset=utf-8,' +
                encodeURIComponent(
                  `<svg xmlns='http://www.w3.org/2000/svg' width='110' height='142' viewBox='0 0 110 142'><rect width='110' height='142' fill='rgb(240,241,242)'/><rect x='0.5' y='0.5' width='109' height='141' fill='none' stroke='rgb(210,214,218)'/><text x='55' y='74' fill='rgb(150,157,165)' font-family='sans-serif' font-size='9' text-anchor='middle'>report</text></svg>`,
                )
            }}
          />
        </button>

        <div className="min-w-0">
          <h3 className="text-[1.02rem] font-bold leading-snug text-ink transition-colors group-hover:text-accent">
            {report.title}
          </h3>

          {/* short description at a glance */}
          <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{report.blurb}</p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button type="button" className="btn-oline" onClick={() => onOpen(report)}>
              Report
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {report.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
