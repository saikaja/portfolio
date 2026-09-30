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

/** Section wrapper with a heading and optional intro line. */
export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {intro && <p className="mt-3 leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children }) {
  return (
    <span className="inline-block rounded-md border border-line bg-bg px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  )
}

export function ButtonLink({ href, children, variant = 'primary', ...rest }) {
  const base = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-bg hover:opacity-90'
      : 'border border-line bg-card text-ink hover:border-muted'
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
