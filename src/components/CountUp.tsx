import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks/useReveal'
import type { Stat } from '../types'

const DURATION = 1600

/** A figure that counts up from 0 the first time it scrolls into view. */
export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || prefersReducedMotion()) return

    let frame = 0
    el.textContent = `0${suffix}`
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1)
          const eased = 1 - Math.pow(1 - t, 4)
          el.textContent = `${Math.round(value * eased)}${suffix}`
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      el.textContent = `${value}${suffix}`
    }
  }, [value, suffix])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

/** Row of animated figures, e.g. "100+ educational resources". */
export default function StatRow({ stats, className = '' }: { stats: Stat[]; className?: string }) {
  return (
    <ul className={`stats ${className}`} data-stagger="">
      {stats.map((s) => (
        <li key={s.label} className="stat" data-reveal="up">
          <span className="stat__value">
            <CountUp value={s.value} suffix={s.suffix} />
          </span>
          <span className="stat__label">{s.label}</span>
        </li>
      ))}
    </ul>
  )
}
