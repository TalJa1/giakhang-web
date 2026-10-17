import { useEffect } from 'react'
import { prefersReducedMotion } from './useReveal'

/**
 * Mouse-only hover effects, wired once for the whole page:
 * - `data-magnetic`: the element leans a few pixels toward the pointer (`--mx` / `--my`).
 * - `data-tilt`: the element tilts in 3D toward the pointer (`--rx` / `--ry`) and a glare follows it (`--gx` / `--gy`).
 * The CSS turns the custom properties into motion.
 */
export function usePointerFx() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return

    let magnet: HTMLElement | null = null
    let tilt: HTMLElement | null = null

    const release = (el: HTMLElement | null, props: string[]) => {
      if (!el) return
      el.classList.remove('is-hot')
      props.forEach((p) => el.style.removeProperty(p))
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const target = e.target instanceof Element ? e.target : null

      const m = target?.closest<HTMLElement>('[data-magnetic]') ?? null
      if (m !== magnet) {
        release(magnet, ['--mx', '--my'])
        magnet = m
      }
      if (m) {
        const r = m.getBoundingClientRect()
        m.style.setProperty('--mx', `${((e.clientX - r.left) / r.width - 0.5) * 12}px`)
        m.style.setProperty('--my', `${((e.clientY - r.top) / r.height - 0.5) * 10}px`)
      }

      const t = target?.closest<HTMLElement>('[data-tilt]') ?? null
      if (t !== tilt) {
        release(tilt, ['--rx', '--ry', '--gx', '--gy'])
        tilt = t
      }
      if (t) {
        const r = t.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        t.classList.add('is-hot')
        t.style.setProperty('--ry', `${(x - 0.5) * 6}deg`)
        t.style.setProperty('--rx', `${(0.5 - y) * 6}deg`)
        t.style.setProperty('--gx', `${x * 100}%`)
        t.style.setProperty('--gy', `${y * 100}%`)
      }
    }
    const onLeave = () => {
      release(magnet, ['--mx', '--my'])
      release(tilt, ['--rx', '--ry', '--gx', '--gy'])
      magnet = tilt = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      onLeave()
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])
}
