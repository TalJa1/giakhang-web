import { useEffect } from 'react'

/**
 * Subtle fade-in for `.reveal` elements as they scroll into view. Elements stay fully visible
 * when the user prefers reduced motion or IntersectionObserver is unavailable.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    root.classList.add('reveal-ready')
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
