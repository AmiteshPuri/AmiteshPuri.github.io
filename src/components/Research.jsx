import { useState } from 'react'
import { reports } from '../data/site.js'
import { Reveal } from '../util.jsx'
import ReportCard from './ReportCard.jsx'
import PdfModal from './PdfModal.jsx'

export default function Research() {
  const [active, setActive] = useState(null)

  return (
    <section id="research" className="scroll-mt-16 border-t border-line pt-10 mt-14">
      <Reveal as="h2" className="section-title">
        Research
      </Reveal>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
        Self-contained studies in generative modelling and representation learning. Each holds
        everything fixed but one design choice and reports what the measurement returns — including
        the parts that cut against the expected story.
      </p>

      <ol className="mt-8 space-y-8">
        {reports.map((r, i) => (
          <ReportCard key={r.id} report={r} index={i} onOpen={setActive} />
        ))}
      </ol>

      <PdfModal report={active} onClose={() => setActive(null)} />
    </section>
  )
}
