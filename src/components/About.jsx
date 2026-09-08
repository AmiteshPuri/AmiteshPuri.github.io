import { profile } from '../data/site.js'
import { asset } from '../util.jsx'

export default function About() {
  return (
    <section id="top" className="scroll-mt-16 pt-12 md:pt-16">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
        <div className="max-w-2xl">
          <h1 className="font-slab text-[2.4rem] font-light leading-tight text-ink sm:text-5xl">
            <span className="font-bold">{profile.firstName}</span>{' '}
            <span className="font-light">{profile.lastName}</span>
          </h1>

          <p className="mt-2 text-[0.98rem] text-ink-soft">
            <span className="text-accent">{profile.role}</span>
            <span className="text-ink-muted"> · {profile.location}</span>
          </p>
          {profile.status && (
            <p className="mt-1 text-sm text-ink-muted">{profile.status}</p>
          )}

          <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft">
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <div className="order-first mx-auto md:order-none md:mx-0">
          <img
            src={asset(profile.photo)}
            alt={profile.name}
            width="176"
            height="176"
            loading="eager"
            className="h-36 w-36 rounded-full object-cover ring-1 ring-line md:h-44 md:w-44"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>
    </section>
  )
}
