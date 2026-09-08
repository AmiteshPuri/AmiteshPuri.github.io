import { ArrowUpRight } from 'lucide-react'
import { otherWork } from '../data/site.js'
import { Reveal } from '../util.jsx'

export default function OtherWork() {
  return (
    <section id="other-work" className="scroll-mt-16 border-t border-line">
      <div className="u-container py-20 md:py-24">
        <Reveal as="header" className="max-w-prose">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Other work</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Further public repositories — supporting code and earlier projects.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherWork.map((w) => (
            <Reveal
              as="a"
              key={w.name}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-base font-semibold text-ink">{w.name}</span>
                <ArrowUpRight
                  size={18}
                  className="flex-none text-ink-muted transition-colors group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
