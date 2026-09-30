import { useState } from 'react'
import { coursework, experience, featured, moreProjects, profile, skills, writing } from '../data'
import { Arrow, ButtonLink, Reveal, Section, Tag, ext } from './ui'

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 leading-relaxed text-muted">
          <p>
            I&rsquo;m a full-stack developer with a background that spans
            <span className="text-ink"> cognitive science</span>,
            <span className="text-ink"> computer science</span> and
            <span className="text-ink"> mathematics</span>. That combination shapes how I work: I try to understand
            how people will actually use a system, build it so it holds up, and use data to check that it works.
          </p>
          <p>
            Most recently I built and maintained a data-import workflow across Angular, .NET Core and Azure, and
            worked end to end on a startup&rsquo;s web platform. I care about clear workflows, useful error messages,
            data that is validated before it causes problems, and interfaces that are easy to use.
          </p>
        </Reveal>

        <Reveal delay={100} className="rounded-xl border border-line bg-card p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Education</p>
          <h3 className="mt-2 font-semibold">University of Toronto, St. George</h3>
          <p className="mt-1 text-sm text-muted">BSc · Cognitive Science, Computer Science &amp; Math · 2026</p>
          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-muted">Selected coursework</p>
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
    <Reveal as="li" delay={index * 60} className="rounded-xl border border-line bg-card p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-semibold">
          {item.role} <span className="font-normal text-muted">· {item.org}</span>
        </h3>
        <p className="text-sm text-muted">{item.dates}</p>
      </div>
      <p className="mt-2 leading-relaxed text-muted">{item.summary}</p>

      {open && (
        <ul id={id} className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed marker:text-muted">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {item.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        <span className="flex-1" />
        {item.project && (
          <a href={`#${item.project}`} className="text-sm text-accent hover:underline">
            View project
          </a>
        )}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="rounded-md px-2.5 py-1 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-accent"
        >
          {open ? 'Hide details' : 'Show details'}
        </button>
      </div>
    </Reveal>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-4">
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
      <div className="overflow-hidden rounded-xl border border-line bg-card">
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
              className={`h-1.5 rounded-full transition-all ${i === n ? 'w-8 bg-ink' : 'w-4 bg-line hover:bg-muted'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" intro="A selection of professional and personal work.">
      <div className="space-y-16">
        {featured.map((p) => (
          <Reveal key={p.id} id={p.id} className="grid scroll-mt-24 items-start gap-8 md:grid-cols-2 md:gap-12">
            <Screenshot images={p.images} title={p.title} />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">{p.kicker}</p>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.blurb}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] marker:text-muted">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
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

      <Reveal className="mt-20">
        <h3 className="mb-5 text-lg font-semibold">Other projects</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {moreProjects.map((p) => (
            <li key={p.title} className="rounded-xl border border-line bg-card p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-medium">{p.title}</h4>
                <span className="shrink-0 text-xs text-muted">{p.meta}</span>
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

export function Writing() {
  return (
    <Section id="writing" title="Research & writing">
      <div className="space-y-4">
        {writing.map((w) => (
          <Reveal key={w.title} as="article" className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              {w.kicker} · {w.pages} pages
            </p>
            <h3 className="mt-2 max-w-3xl text-xl font-semibold leading-snug">{w.title}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{w.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {w.topics.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {w.links.map((l, n) => (
                <ButtonLink key={l.href} href={l.href} variant={n === 0 ? 'primary' : 'secondary'} {...ext}>
                  {l.label} <Arrow />
                </ButtonLink>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line rounded-xl border border-line bg-card">
        {skills.map((s) => (
          <Reveal key={s.group} className="grid gap-2 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-sm font-medium">{s.group}</dt>
            <dd className="text-sm leading-relaxed text-muted">{s.items.join(' · ')}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}

export function Leadership() {
  return (
    <Section id="leadership" title="Leadership & volunteering">
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal className="rounded-xl border border-line bg-card p-6">
          <h3 className="font-semibold">Captain, University of Toronto Men&rsquo;s Golf</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted marker:text-muted">
            <li>Led the team through three regional championships.</li>
            <li>Received the Arnold Palmer Award (2023) for top performance.</li>
          </ul>
        </Reveal>
        <Reveal delay={80} className="rounded-xl border border-line bg-card p-6">
          <h3 className="font-semibold">Volunteer, Little Aces Tennis Program</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted marker:text-muted">
            <li>10+ years supporting wheelchair tennis athletes.</li>
            <li>Promoting accessibility and inclusion in sport.</li>
          </ul>
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
    <Section id="contact" title="Contact">
      <Reveal className="rounded-xl border border-line bg-card p-6 sm:p-8">
        <p className="max-w-xl leading-relaxed text-muted">
          I&rsquo;m looking for software development roles. Email is the best way to reach me, and I&rsquo;m also
          on LinkedIn.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`}>{profile.email}</ButtonLink>
          <button
            onClick={copy}
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-muted"
          >
            <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
          </button>
        </div>
        <div className="mt-6 flex gap-5 text-sm text-muted">
          <a className="hover:text-ink" href={profile.linkedin} {...ext}>LinkedIn</a>
          <a className="hover:text-ink" href={profile.github} {...ext}>GitHub</a>
          <a className="hover:text-ink" href={profile.resume} {...ext}>Résumé</a>
        </div>
      </Reveal>
    </Section>
  )
}
