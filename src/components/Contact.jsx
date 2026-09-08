import { profile, socials } from '../data/site.js'
import { asset, Reveal } from '../util.jsx'

export default function Contact() {
  const items = socials(profile)

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line pt-10 mt-14 pb-4">
      <Reveal as="h2" className="section-title">
        Contact
      </Reveal>
      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
        Open to PhD positions and research collaborations in scientific machine learning. Email is
        the quickest way to reach me.
      </p>

      <ul className="mt-6 space-y-2.5">
        {items.map((s) => {
          const href = s.icon === 'cv' ? asset(s.href) : s.href
          const external = s.icon === 'github' || s.icon === 'linkedin' || s.icon === 'cv'
          return (
            <li key={s.label} className="flex flex-wrap items-baseline gap-x-3 text-[0.92rem]">
              <span className="w-28 shrink-0 text-ink-muted">{s.label}</span>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-accent hover:text-accent-deep"
              >
                {s.value}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
