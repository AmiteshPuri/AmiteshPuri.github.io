import { useState } from 'react'
import { publications, reports } from '../data/site.js'
import { Reveal } from '../util.jsx'
import ReportCard from './ReportCard.jsx'
import PdfModal from './PdfModal.jsx'

// "Simran, A. Puri and S. Akansha", with the site owner's name in bold.
function Authors({ names, self }) {
  return (
    <>
      {names.map((n, i) => (
        <span key={n}>
          {i > 0 && (i === names.length - 1 ? ' and ' : ', ')}
          {n === self ? <strong className="font-semibold text-ink">{n}</strong> : n}
        </span>
      ))}
    </>
  )
}

// Reports grouped under their `group` heading, in the order they appear in site.js.
function groupReports(list) {
  const groups = []
  for (const r of list) {
    const title = r.group || 'Reports'
    let g = groups.find((x) => x.title === title)
    if (!g) {
      g = { title, items: [] }
      groups.push(g)
    }
    g.items.push(r)
  }
  return groups
}

export default function Research() {
  const [active, setActive] = useState(null)
  const groups = groupReports(reports)

  return (
    <section id="research" className="scroll-mt-16 border-t border-line pt-10 mt-14">
      <Reveal as="h2" className="section-title">
        Research
      </Reveal>

      {publications.length > 0 && (
        <Reveal className="mt-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Publications</h3>
          <ol className="mt-4 space-y-5">
            {publications.map((p) => (
              <li key={p.title}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[1.02rem] font-bold leading-snug text-ink">{p.title}</span>
                  <span className="flex-none text-[0.8rem] text-ink-muted">{p.year}</span>
                </div>
                <div className="mt-1 text-[0.9rem] text-ink-soft">
                  <Authors names={p.authors} self={p.self} />
                </div>
                <div className="mt-0.5 text-[0.85rem] italic text-ink-muted">
                  {p.venue}
                  {p.details ? `, ${p.details}` : ''}
                </div>
                {p.url && (
                  <div className="mt-2.5">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-oline">
                      Paper
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      )}

      {groups.map((g, gi) => (
        <div key={g.title}>
          <Reveal
            as="h3"
            className={`${gi === 0 && publications.length === 0 ? 'mt-8' : 'mt-10'} text-xs font-semibold uppercase tracking-wider text-ink-muted`}
          >
            {g.title}
          </Reveal>
          <ol className="mt-4 space-y-8">
            {g.items.map((r, i) => (
              <ReportCard key={r.id} report={r} index={i} onOpen={setActive} />
            ))}
          </ol>
        </div>
      ))}

      <PdfModal report={active} onClose={() => setActive(null)} />
    </section>
  )
}
