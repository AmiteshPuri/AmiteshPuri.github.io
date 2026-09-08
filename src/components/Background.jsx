import { Award, FileText, Github, GraduationCap } from 'lucide-react'
import { credentials, education, skills, thesis } from '../data/site.js'
import { asset, Reveal } from '../util.jsx'

export default function Background() {
  return (
    <section id="background" className="scroll-mt-16 border-t border-line">
      <div className="u-container py-20 md:py-24">
        <Reveal as="header" className="max-w-prose">
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Background</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Education, the Master&rsquo;s research report, credentials, and the tooling behind the
            work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left column — education + thesis */}
          <div className="space-y-12">
            <Reveal>
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-muted">
                <GraduationCap size={16} className="text-accent" /> Education
              </h3>
              <ol className="mt-5 space-y-6">
                {education.map((e) => (
                  <li key={e.degree} className="relative border-l border-line pl-5">
                    <span
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <div className="text-[0.95rem] font-medium text-ink">{e.degree}</div>
                    <div className="text-sm text-ink-soft">{e.place}</div>
                    <div className="mt-0.5 text-xs text-ink-muted">
                      {e.when}
                      {e.detail ? ` · ${e.detail}` : ''}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal as="article" className="rounded-xl border border-line bg-surface p-6 shadow-soft">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-muted">
                <FileText size={16} className="text-accent" /> {thesis.role}
              </h3>
              <p className="mt-3 text-lg font-medium leading-snug text-ink">{thesis.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{thesis.supervisor}</p>
              <ul className="mt-4 space-y-2.5">
                {thesis.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-soft"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {thesis.code && (
                <a
                  href={thesis.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={16} /> View code
                </a>
              )}
            </Reveal>
          </div>

          {/* Right column — credentials + skills */}
          <div className="space-y-12">
            <Reveal>
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-muted">
                <Award size={16} className="text-accent" /> Credentials
              </h3>
              <div className="mt-5 space-y-4">
                {credentials.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-lg border border-line bg-surface p-4 shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[0.95rem] font-medium text-ink">{c.name}</div>
                        <div className="text-sm text-ink-soft">{c.org}</div>
                      </div>
                      <div className="flex-none text-xs text-ink-muted">{c.when}</div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.detail}</p>
                    {c.pdf ? (
                      <a
                        href={asset(c.pdf)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-deep"
                      >
                        <FileText size={13} /> Certificate (PDF)
                      </a>
                    ) : (
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-faint">
                        <FileText size={13} /> Certificate forthcoming
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Skills &amp; tools
              </h3>
              <dl className="mt-5 space-y-4">
                {skills.map((s) => (
                  <div key={s.group}>
                    <dt className="text-xs uppercase tracking-wide text-ink-muted">{s.group}</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span key={it} className="chip">
                          {it}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
