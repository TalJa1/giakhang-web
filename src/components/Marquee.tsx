import type { CSSProperties, ReactNode } from 'react'

type Props = {
  items: string[]
  /** Seconds for one full loop. */
  speed?: number
  /** Repeats the items inside each copy so short lists still fill wide screens. */
  repeat?: number
  /** Accessible name for the list. Omit for a purely decorative band (hidden from assistive technology). */
  label?: string
  className?: string
  separator?: ReactNode
}

/**
 * Endless horizontal scroller. The list is rendered twice so the loop is seamless; only the first pass
 * of the first copy is exposed to assistive technology. Pauses on hover; with reduced motion it becomes
 * a static wrapped list.
 */
export default function Marquee({ items, speed = 40, repeat = 1, label, className = '', separator }: Props) {
  const passes = Array.from({ length: repeat }, () => items).flat()
  const list = (copy: number) => (
    <ul
      className="marquee__list"
      aria-hidden={copy > 0 || !label ? true : undefined}
      aria-label={copy === 0 ? label : undefined}
    >
      {passes.map((item, i) => (
        <li key={i} className="marquee__item" aria-hidden={i >= items.length ? true : undefined}>
          {item}
          {separator && (
            <span className="marquee__sep" aria-hidden="true">
              {separator}
            </span>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`marquee ${className}`} style={{ '--speed': `${speed}s` } as CSSProperties}>
      <div className="marquee__track">
        {list(0)}
        {list(1)}
      </div>
    </div>
  )
}
