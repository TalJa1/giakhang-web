import { useEffect, type RefObject } from 'react'
import { prefersReducedMotion } from './useReveal'

type Options = {
  /** Viewport line (0 = top, 1 = bottom) where progress starts, measured against the element's top. */
  start?: number
  /** Viewport line where progress ends. */
  end?: number
  /** 1 = progress runs over the element's full height (its bottom must reach `end`); 0 = only its top. */
  span?: number
}

/**
 * Writes scroll progress (0..1) through an element to its `--p` custom property, for scroll-linked
 * effects (the timeline line, the philosophy quote). Reduced motion pins it at 1.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, { start = 0.85, end = 0.35, span = 0 }: Options = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.style.setProperty('--p', '1')
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const rect = el.getBoundingClientRect()
      const distance = rect.height * span + vh * (start - end)
      const p = distance > 0 ? (vh * start - rect.top) / distance : 1
      el.style.setProperty('--p', Math.min(Math.max(p, 0), 1).toFixed(4))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ref, start, end, span])
}
