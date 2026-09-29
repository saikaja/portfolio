import { profile, disciplines } from '../data'
import { ButtonLink, ext } from './ui'

// Points on the ball-flight curve (quadratic bezier 40,300 → 250,-60 → 460,290) at t = .25 / .5 / .75
const nodes = [
  { x: 145, y: 164, label: 'Perceive', sub: 'Cog Sci', delay: 0.7 },
  { x: 250, y: 118, label: 'Model', sub: 'Math', delay: 1.2 },
  { x: 355, y: 159, label: 'Build', sub: 'CS', delay: 1.7 },
]

function FlightPath() {
  return (
    <svg viewBox="0 0 520 360" className="h-auto w-full" role="img" aria-label="A golf ball's flight path from tee to flag, passing through three connected nodes: perceive, model, build">
      <defs>
        <mask id="reveal-path">
          <path d="M40 300 Q250 -60 460 290" fill="none" stroke="#fff" strokeWidth="8" className="flight-mask" />
        </mask>
      </defs>

      {/* green */}
      <ellipse cx="460" cy="296" rx="54" ry="14" className="fill-fairway-soft" />
      <ellipse cx="460" cy="294" rx="6" ry="2.5" className="fill-ink" opacity=".7" />

      {/* synapse branches off each node */}
      {nodes.map((n, i) => (
        <g key={i} className="pop" style={{ animationDelay: `${n.delay + 0.2}s`, transformOrigin: `${n.x}px ${n.y}px` }}>
          <path d={`M${n.x} ${n.y} l-22 34 M${n.x} ${n.y} l26 30 M${n.x} ${n.y} l4 38`} className="stroke-synapse" strokeWidth="1" opacity=".35" />
          <circle cx={n.x - 22} cy={n.y + 34} r="2.5" className="fill-synapse" opacity=".5" />
          <circle cx={n.x + 26} cy={n.y + 30} r="2" className="fill-synapse" opacity=".5" />
          <circle cx={n.x + 4} cy={n.y + 38} r="2" className="fill-synapse" opacity=".5" />
        </g>
      ))}

      {/* flight path */}
      <path d="M40 300 Q250 -60 460 290" fill="none" className="stroke-muted" strokeWidth="1.5" strokeDasharray="3 7" strokeLinecap="round" mask="url(#reveal-path)" />

      {/* tee + ball */}
      <path d="M36 312 h8 l-3 16 h-2 z" className="fill-sand" />
      <circle cx="40" cy="304" r="8" className="fill-card stroke-ink" strokeWidth="1.2" />

      {/* flag */}
      <line x1="460" y1="294" x2="460" y2="212" className="stroke-ink" strokeWidth="2" strokeLinecap="round" />
      <path d="M461 213 L500 228 L461 243 Z" className="flag fill-sand" />

      {/* nodes */}
      {nodes.map((n, i) => (
        <g key={i} className="pop" style={{ animationDelay: `${n.delay}s`, transformOrigin: `${n.x}px ${n.y}px` }}>
          <circle cx={n.x} cy={n.y} r="14" className="fill-fairway" opacity=".12" />
          <circle cx={n.x} cy={n.y} r="6" className="fill-fairway" />
          <text x={n.x} y={n.y - 36} textAnchor="middle" className="fill-ink font-display" fontSize="15" fontWeight="500">
            {n.label}
          </text>
          <text x={n.x} y={n.y - 22} textAnchor="middle" className="fill-muted font-mono" fontSize="10" letterSpacing="1">
            {n.sub.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dimples pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 md:grid-cols-[1.1fr_1fr] md:pb-24 md:pt-40">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fairway opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fairway" />
            </span>
            Open to software roles · {profile.location}
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&rsquo;m Sai.
            <span className="mt-3 block text-3xl italic text-muted sm:text-4xl lg:text-[2.75rem]">
              I build software around how people <span className="text-fairway">actually think.</span>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            Full-stack developer and UofT graduate in Cognitive Science, Computer Science &amp; Math. Currently
            researching the human side of cybersecurity at MindShield.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">See my work</ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary" {...ext}>
              Résumé (PDF)
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm text-muted">
            <a className="transition-colors hover:text-fairway" href={profile.github} {...ext}>GitHub</a>
            <span className="h-1 w-1 rounded-full bg-line" />
            <a className="transition-colors hover:text-fairway" href={profile.linkedin} {...ext}>LinkedIn</a>
            <span className="h-1 w-1 rounded-full bg-line" />
            <a className="transition-colors hover:text-fairway" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <FlightPath />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {disciplines.map((d) => (
            <li key={d.label} className="bg-card px-5 py-4">
              <p className="font-display text-lg">{d.label}</p>
              <p className="text-sm text-muted">{d.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
