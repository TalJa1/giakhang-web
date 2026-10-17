import type { ReactNode } from 'react'
import SplitWords from './SplitWords'

type SectionProps = {
  id: string
  /** Section number shown as the large outlined figure, e.g. "02". */
  num: string
  /** Label from the brief, e.g. "LEADERSHIP & COMMUNITY | Engineering Beyond the Workshop". */
  label: string
  heading?: string
  tone?: 'white' | 'gray' | 'dark'
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
 * (or a kicker line when the section also has its own heading). Title words slide up on reveal.
 */
export function SectionHead({ id, num, label, heading }: { id: string; num: string; label: string; heading?: string }) {
  const [eyebrow, second] = splitLabel(label)
  const title = heading ?? second ?? eyebrow
  const showEyebrow = Boolean(heading || second)

  return (
    <header className="section-head" data-reveal="fade">
      <span className="section-head__num" aria-hidden="true">
        {num}
      </span>
      {showEyebrow && (
        <p className="eyebrow">
          <span className="eyebrow__num" aria-hidden="true">
            {num}
          </span>
          {eyebrow}
        </p>
      )}
      {heading && second && <p className="section-head__kicker">{second}</p>}
      <h2 id={`${id}-title`} className={`section-head__title ${showEyebrow ? '' : 'section-head__title--solo'}`}>
        {!showEyebrow && (
          <span className="section-head__solo-num" aria-hidden="true">
            {num}
          </span>
        )}
        <SplitWords text={title} />
      </h2>
    </header>
  )
}

/** Smaller header for a block inside a section ("TECHNICAL EXPLORATION | Learning Beyond the Classroom"). */
export function SubHead({ label }: { label: string }) {
  const [eyebrow, second] = splitLabel(label)
  return (
    <div className="sub-head" data-reveal="fade">
      <p className="eyebrow">{eyebrow}</p>
      {second && (
        <p className="sub-head__title">
          <SplitWords text={second} />
        </p>
      )}
    </div>
  )
}

export default function Section({ id, num, label, heading, tone = 'white', className = '', children, after }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone} ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHead id={id} num={num} label={label} heading={heading} />
        {children}
      </div>
      {after}
    </section>
  )
}
