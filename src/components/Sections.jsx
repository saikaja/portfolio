import { useState } from 'react'
import { coursework, experience, featured, moreProjects, profile, skills } from '../data'
import { Arrow, ButtonLink, Reveal, Section, Tag, ext } from './ui'

export function About() {
  return (
    <Section id="about" hole={1} title="The approach">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Most software problems are people problems in disguise. My degree sits at that intersection &mdash;
            <span className="text-ink"> cognitive science</span> to understand how people perceive and decide,
            <span className="text-ink"> computer science</span> to build systems that hold up, and
            <span className="text-ink"> math</span> to model what&rsquo;s actually happening.
          </p>
          <p>
            In practice that means I care about the unglamorous parts: clear workflows, honest error messages, data
            that validates before it breaks something, and interfaces that don&rsquo;t make people think harder than
            they need to.
          </p>
          <p>
            Golf taught me the rest &mdash; patience, reading the conditions, and committing to the shot you&rsquo;ve
            planned.
          </p>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-line bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-fairway">Education</p>
          <h3 className="mt-3 font-display text-xl">University of Toronto, St. George</h3>
          <p className="mt-1 text-sm text-muted">BSc · Cognitive Science, Computer Science &amp; Math · 2026</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">Selected coursework</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <li key={c}>
                <Tag>{c}</Tag>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

function ExperienceItem({ item, index }) {
  const [open, setOpen] = useState(index === 0)
  const id = `exp-${index}`
  return (
    <Reveal as="li" delay={index * 80} className="relative pl-10 sm:pl-14">
      {/* timeline marker */}
      <span
        className={`absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full border-2 sm:left-2 ${
          item.current ? 'border-fairway bg-fairway' : 'border-line bg-paper'
        }`}
        aria-hidden="true"
      >
        <span className={`h-1.5 w-1.5 rounded-full ${item.current ? 'bg-paper' : 'bg-muted'}`} />
      </span>

      <div className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-fairway/40 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl">
            {item.role} <span className="text-muted">· {item.org}</span>
          </h3>
          <p className="font-mono text-xs text-muted">{item.dates}</p>
        </div>
        <p className="mt-2 leading-relaxed text-muted">{item.summary}</p>

        {open && (
          <ul id={id} className="mt-4 space-y-2">
            {item.points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-sand" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {item.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          <span className="flex-1" />
          {item.project && (
            <a href={`#${item.project}`} className="text-sm text-fairway hover:underline">
              See the project
            </a>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={id}
            className="rounded-full px-3 py-1 text-sm text-muted transition-colors hover:bg-fairway-soft hover:text-fairway"
          >
            {open ? 'Less' : 'Details'}
          </button>
        </div>
      </div>
    </Reveal>
  )
}

export function Experience() {
  return (
    <Section id="experience" hole={2} title="Experience" intro="Research, contract work and a startup — each one closer to where people meet the software.">
      <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-line sm:before:left-[19px]">
        {experience.map((item, i) => (
          <ExperienceItem key={item.role + item.org} item={item} index={i} />
        ))}
      </ol>
    </Section>
  )
}

function Screenshot({ images, title }) {
  const [i, setI] = useState(0)
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <img
          src={images[i].src}
          alt={images[i].alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2" role="group" aria-label={`${title} screenshots`}>
          {images.map((img, n) => (
            <button
              key={img.src}
              onClick={() => setI(n)}
              aria-label={`Show screenshot ${n + 1}: ${img.alt}`}
              aria-pressed={i === n}
              className={`h-1.5 rounded-full transition-all ${i === n ? 'w-8 bg-fairway' : 'w-4 bg-line hover:bg-muted'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" hole={3} title="Selected work" intro="Things I’ve built — from production workflows to a trip inside a coffee cup.">
      <div className="space-y-20">
        {featured.map((p, i) => (
          <Reveal key={p.id} id={p.id} className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={i % 2 ? 'md:order-2' : ''}>
              <Screenshot images={p.images} title={p.title} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-fairway">{p.kicker}</p>
              <h3 className="mt-2 font-display text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{p.blurb}</p>
              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-synapse" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l, n) => (
                  <ButtonLink key={l.href} href={l.href} variant={n === 0 ? 'primary' : 'secondary'} {...ext}>
                    {l.label} <Arrow />
                  </ButtonLink>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <h3 className="mb-6 font-display text-2xl">More from the bag</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {moreProjects.map((p) => (
            <li key={p.title} className="rounded-2xl border border-line bg-card p-5 transition-colors hover:border-fairway/40">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-medium">{p.title}</h4>
                <span className="shrink-0 font-mono text-xs text-muted">{p.meta}</span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" hole={4} title="The toolkit">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 60} className="rounded-2xl border border-line bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-fairway">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((it) => (
                <li key={it} className="rounded-lg bg-fairway-soft px-2.5 py-1 text-sm">
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-3xl text-fairway">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  )
}

export function Beyond() {
  return (
    <Section id="beyond" hole={5} title="Beyond code">
      <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-card p-7">
          <div className="dimples pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-sand">On the course</p>
            <h3 className="mt-3 font-display text-2xl">Captain, University of Toronto Men&rsquo;s Golf</h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Led the team through three regional championships, and received the Arnold Palmer Award for top
              performance.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <Stat value="3" label="Regional titles" />
              <Stat value="2023" label="Arnold Palmer Award" />
              <Stat value="$2K" label="Performance award" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="rounded-2xl border border-line bg-card p-7">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-synapse">Giving back</p>
          <h3 className="mt-3 font-display text-2xl">Little Aces Tennis Program</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Volunteering with wheelchair tennis athletes, supporting accessibility and inclusion in sport.
          </p>
          <div className="mt-7 border-t border-line pt-6">
            <Stat value="10+ yrs" label="Volunteering" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl bg-fairway px-6 py-14 text-center text-paper sm:px-12 sm:py-20">
        <div className="dimples pointer-events-none absolute inset-0 opacity-40 invert" aria-hidden="true" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">19th hole</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
            Let&rsquo;s build something people enjoy using.
          </h2>
          <p className="mx-auto mt-4 max-w-lg opacity-85">
            I&rsquo;m looking for software development roles. The fastest way to reach me is email.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-fairway transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            <button
              onClick={copy}
              className="rounded-full border border-paper/40 px-6 py-3 text-sm font-medium transition-colors hover:bg-paper/10"
            >
              <span aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</span>
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm opacity-90">
            <a className="hover:underline" href={profile.linkedin} {...ext}>LinkedIn</a>
            <a className="hover:underline" href={profile.github} {...ext}>GitHub</a>
            <a className="hover:underline" href={profile.resume} {...ext}>Résumé</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
