import { useEffect } from 'react'

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scroll-in animations. Any element with `data-reveal` ("up" | "left" | "right" | "scale" | "wipe" | "fade")
 * gets `is-in` when it enters the viewport; the CSS decides the motion. Children of a `data-stagger`
 * element get an index (`--i`) so they can enter one after another. Everything stays visible when the
 * user prefers reduced motion or IntersectionObserver is unavailable.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) return

    const root = document.documentElement
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
      ;[...group.children].forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)))
    })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )
    root.classList.add('reveal-ready')
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
