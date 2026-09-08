import { credentials, education, skills } from '../data/site.js'
import { asset, Reveal } from '../util.jsx'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-t border-line pt-10 mt-14">
      <Reveal as="h2" className="section-title">
        Education
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: education + thesis */}
        <div className="space-y-9">
          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Degrees</h3>
            <ol className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <div className="text-[0.95rem] font-medium text-ink">{e.degree}</div>
                  <div className="text-[0.9rem] text-ink-soft">{e.place}</div>
                  <div className="mt-0.5 text-[0.82rem] text-ink-muted">
                    {e.when}
                    {e.detail ? ` · ${e.detail}` : ''}
                    {e.cert && (
                      <>
                        {' · '}
                        <a
                          href={asset(e.cert)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-deep"
                        >
                          certificate
                        </a>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Right: credentials + skills */}
        <div className="space-y-9">
          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Credentials</h3>
            <ol className="mt-4 space-y-4">
              {credentials.map((c) => (
                <li key={c.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[0.95rem] font-medium text-ink">{c.name}</span>
                    <span className="flex-none text-[0.8rem] text-ink-muted">{c.when}</span>
                  </div>
                  <div className="text-[0.9rem] text-ink-soft">{c.org}</div>
                  <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-muted">{c.detail}</p>
                  {c.pdf ? (
                    <a
                      href={asset(c.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-[0.82rem] text-accent hover:text-accent-deep"
                    >
                      certificate (PDF)
                    </a>
                  ) : (
                    <span className="mt-1 inline-block text-[0.82rem] text-ink-faint">
                      certificate forthcoming
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Skills &amp; tools
            </h3>
            <dl className="mt-4 space-y-3">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt className="text-[0.78rem] uppercase tracking-wide text-ink-muted">{s.group}</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
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
    </section>
  )
}
