import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  /** Label from the brief, e.g. "LEADERSHIP & COMMUNITY | Engineering Beyond the Workshop". */
  label: string
  heading?: string
  tone?: 'white' | 'gray'
  className?: string
  children: ReactNode
  /** Full-bleed content rendered after the container (e.g. the philosophy band). */
  after?: ReactNode
}

function splitLabel(label: string): [string, string | undefined] {
  const [first, ...rest] = label.split(' | ')
  return [first, rest.length ? rest.join(' | ') : undefined]
}

/**
 * Section header. A label "A | B" shows A as the small red eyebrow; B becomes the title
 * (or a kicker line when the section also has its own heading).
 */
export function SectionHead({ id, label, heading }: { id: string; label: string; heading?: string }) {
  const [eyebrow, second] = splitLabel(label)
  const titleId = `${id}-title`

  if (heading) {
    return (
      <header className="section-head reveal">
        <p className="eyebrow">{eyebrow}</p>
        {second && <p className="section-head__kicker">{second}</p>}
        <h2 id={titleId} className="section-head__title">
          {heading}
        </h2>
      </header>
    )
  }
  if (second) {
    return (
      <header className="section-head reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="section-head__title">
          {second}
        </h2>
      </header>
    )
  }
  return (
    <header className="section-head reveal">
      <h2 id={titleId} className="section-head__title section-head__title--accent">
        {eyebrow}
      </h2>
    </header>
  )
}

/** Smaller header for a block inside a section ("TECHNICAL EXPLORATION | Learning Beyond the Classroom"). */
export function SubHead({ label }: { label: string }) {
  const [eyebrow, second] = splitLabel(label)
  return (
    <div className="sub-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      {second && <p className="sub-head__title">{second}</p>}
    </div>
  )
}

export default function Section({ id, label, heading, tone = 'white', className = '', children, after }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone} ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHead id={id} label={label} heading={heading} />
        {children}
      </div>
      {after}
    </section>
  )
}
