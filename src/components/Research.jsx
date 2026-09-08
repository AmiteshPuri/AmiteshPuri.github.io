import { useState } from 'react'
import { reports } from '../data/site.js'
import { Reveal } from '../util.jsx'
import ReportCard from './ReportCard.jsx'
import PdfModal from './PdfModal.jsx'

export default function Research() {
  const [active, setActive] = useState(null)

  return (
    <section id="research" className="border-t border-line">
      <div className="u-container py-20 md:py-24">
        <Reveal as="header" className="max-w-prose">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Research</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Two studies of flow matching as a generative surrogate for the 2D Navier–Stokes
            equations. Both hold everything fixed but one design choice and report what the
            measurement returns — including the parts that cut against the expected story. The full
            papers are here to read.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-16 md:space-y-24">
          {reports.map((r, i) => (
            <ReportCard key={r.id} report={r} reverse={i % 2 === 1} onOpen={setActive} />
          ))}
        </div>
      </div>

      <PdfModal report={active} onClose={() => setActive(null)} />
    </section>
  )
}
