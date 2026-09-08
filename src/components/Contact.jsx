import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import { profile, socials } from '../data/site.js'
import { asset, Reveal } from '../util.jsx'

const icons = { mail: Mail, github: Github, linkedin: Linkedin, cv: FileText }

export default function Contact() {
  const items = socials(profile)

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="u-container py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal as="header" className="max-w-prose">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Get in touch</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Open to PhD positions and research collaborations in scientific machine learning.
              The quickest way to reach me is email.
            </p>
          </Reveal>

          <Reveal as="ul" className="grid gap-3 sm:grid-cols-2">
            {items.map((s) => {
              const Icon = icons[s.icon] || Mail
              const href = s.icon === 'cv' ? asset(s.href) : s.href
              const external = s.icon === 'github' || s.icon === 'linkedin' || s.icon === 'cv'
              return (
                <li key={s.label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft transition-colors hover:border-accent"
                  >
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-accent-tint text-accent">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-ink-muted">
                        {s.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-ink transition-colors group-hover:text-accent">
                        {s.value}
                      </span>
                    </span>
                  </a>
                </li>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
