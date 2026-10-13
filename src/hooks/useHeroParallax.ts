import { useEffect, type RefObject } from 'react'

/**
 * Nudges the hero portrait a few pixels against the mouse. Writes `--px` / `--py` (-1..1) on the
 * element; the CSS decides how far things move. Mouse-only and off for reduced motion.
 */
export function useHeroParallax(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const area = el.closest<HTMLElement>('.hero') ?? el
    let px = 0
    let py = 0
    let frame = 0

    const apply = () => {
      frame = 0
      el.style.setProperty('--px', px.toFixed(3))
      el.style.setProperty('--py', py.toFixed(3))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const r = area.getBoundingClientRect()
      px = ((e.clientX - r.left) / r.width) * 2 - 1
      py = ((e.clientY - r.top) / r.height) * 2 - 1
      schedule()
    }
    const onLeave = () => {
      px = 0
      py = 0
      schedule()
    }

    area.addEventListener('pointermove', onMove, { passive: true })
    area.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      area.removeEventListener('pointermove', onMove)
      area.removeEventListener('pointerleave', onLeave)
    }
  }, [ref])
}
