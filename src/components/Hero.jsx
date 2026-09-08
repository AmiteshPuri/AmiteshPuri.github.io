import { ArrowUpRight, FileText, MapPin } from 'lucide-react'
import { profile } from '../data/site.js'
import { asset } from '../util.jsx'
import FlowMotif from './FlowMotif.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* motif sits behind on large screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-90 lg:block"
      >
        <FlowMotif className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/60 to-transparent" />
      </div>

      <div className="u-container relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="hero-in max-w-prose">
          <div className="mb-6 flex items-center gap-4">
            <img
              src={asset(profile.photo)}
              alt={profile.name}
              width="72"
              height="72"
              loading="eager"
              className="h-16 w-16 rounded-full object-cover ring-1 ring-line"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="flex items-center gap-1.5 text-sm text-ink-muted">
              <MapPin size={15} className="text-accent" />
              {profile.location}
            </div>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-ink-soft">{profile.role}</p>

          <p className="mt-6 text-[1.02rem] leading-relaxed text-ink-soft">{profile.lede}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >
              Read the research
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
            <a
              href={asset(profile.cv)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <FileText size={16} />
              CV
            </a>
          </div>
        </div>

        {/* on small screens, show the motif inline, smaller */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-sm lg:hidden">
          <FlowMotif className="h-auto w-full opacity-80" />
        </div>
      </div>

      <style>{`
        .hero-in { opacity: 0; transform: translateY(18px); animation: heroIn .8s ease forwards; }
        @keyframes heroIn { to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .hero-in { animation: none; opacity: 1; transform: none; } }
      `}</style>
    </section>
  )
}
