import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, [role="button"], summary, label'
// Elements that need the real system cursor (text caret, media controls).
const NATIVE = 'input, textarea, select, video[controls]'

/**
 * A small dot that replaces the system cursor and expands into a soft circle over links and
 * buttons. It follows the pointer exactly (no trailing lag). Skipped on touch devices and for
 * reduced motion, where the normal cursor stays.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    let x = 0
    let y = 0
    let frame = 0

    const paint = () => {
      frame = 0
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(paint)
      const target = e.target instanceof Element ? e.target : null
      const native = target?.closest(NATIVE) != null
      root.classList.toggle('has-cursor', !native)
      el.classList.toggle('is-visible', !native)
      el.classList.toggle('is-active', !native && target?.closest(INTERACTIVE) != null)
    }
    const onDown = () => el.classList.add('is-pressed')
    const onUp = () => el.classList.remove('is-pressed')
    const onLeave = () => {
      root.classList.remove('has-cursor')
      el.classList.remove('is-visible', 'is-active', 'is-pressed')
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('pointerup', onUp)
    root.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      root.classList.remove('has-cursor')
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerup', onUp)
      root.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span className="cursor__dot" />
    </div>
  )
}
