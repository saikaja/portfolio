import { profile, glance } from '../data'
import { ButtonLink, ext } from './ui'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-12 pt-32 sm:px-8 md:pb-20 md:pt-40">
      <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-line bg-card px-2.5 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to software development roles · {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-muted sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            I&rsquo;m a research assistant at MindShield, where I study how people recognise and respond to cyber
            threats, and a University of Toronto graduate in Cognitive Science, Computer Science &amp; Math. I&rsquo;m
            passionate about spotting real-world problems and solving them with code, whether that&rsquo;s a
            full-stack web app, a data workflow that replaces manual work, or a tool that makes a hard decision easier.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">View projects</ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary" {...ext}>
              Résumé (PDF)
            </ButtonLink>
          </div>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted">
            <a className="transition-colors hover:text-ink" href={profile.github} {...ext}>GitHub</a>
            <a className="transition-colors hover:text-ink" href={profile.linkedin} {...ext}>LinkedIn</a>
            <a className="transition-colors hover:text-ink" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <dl className="divide-y divide-line rounded-xl border border-line bg-card text-sm">
          {glance.map((g) => (
            <div key={g.label} className="px-5 py-4">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">{g.label}</dt>
              <dd className="mt-1 text-ink">{g.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
