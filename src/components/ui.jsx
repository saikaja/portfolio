import { useEffect, useRef, useState } from 'react'

/** Fades children in once they scroll into view. */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Section wrapper with a golf-scorecard style eyebrow ("Hole 02"). */
export function Section({ id, hole, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-fairway">
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-fairway/40 px-2">
            {String(hole).padStart(2, '0')}
          </span>
          Hole {hole}
        </p>
        <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{title}</h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  )
}

export function ButtonLink({ href, children, variant = 'primary', ...rest }) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5'
  const styles =
    variant === 'primary'
      ? 'bg-fairway text-paper shadow-sm hover:shadow-md'
      : 'border border-line bg-card text-ink hover:border-fairway hover:text-fairway'
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  )
}

export const ext = { target: '_blank', rel: 'noreferrer' }

export function Arrow({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 12L12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
