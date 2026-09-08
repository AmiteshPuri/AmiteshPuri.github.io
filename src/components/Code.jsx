import { otherWork } from '../data/site.js'
import { Reveal } from '../util.jsx'

export default function Code() {
  return (
    <section id="code" className="scroll-mt-16 border-t border-line pt-10 mt-14">
      <Reveal as="h2" className="section-title">
        Code
      </Reveal>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
        Public repositories — the pipelines behind the reports above, and related projects.
      </p>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {otherWork.map((w) => (
          <Reveal
            as="li"
            key={w.name}
            className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <a
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[0.9rem] font-medium text-accent hover:text-accent-deep sm:w-52"
            >
              {w.name}
            </a>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft">{w.blurb}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
