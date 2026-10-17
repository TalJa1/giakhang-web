import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { LINKS } from '../config/media'
import { nav, site } from '../data/content'
import { CloseIcon, MenuIcon } from './Icons'

const DESKTOP_NAV = '(min-width: 1180px)'

export default function Header() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)

  // Reading-progress line, a solid background once scrolled, and hide-on-scroll-down / show-on-scroll-up.
  useEffect(() => {
    const header = headerRef.current
    const bar = progressRef.current
    if (!header || !bar) return
    let frame = 0
    let lastY = window.scrollY
    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`
      header.classList.toggle('is-scrolled', y > 8)
      if (Math.abs(y - lastY) > 6) {
        header.classList.toggle('is-hidden', y > lastY && y > 320 && !header.classList.contains('is-menu-open'))
        lastY = y
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const sections = [...nav.map((item) => item.id), 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu on Escape or when the desktop nav takes over.
  useEffect(() => {
    if (!menuOpen) return
    const query = window.matchMedia(DESKTOP_NAV)
    const close = () => setMenuOpen(false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    query.addEventListener('change', close)
    return () => {
      document.removeEventListener('keydown', onKey)
      query.removeEventListener('change', close)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className={`site-header ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true" />
          {site.brand}
        </a>

        <nav id="primary-nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {nav.map((item, i) => (
              <li key={item.id} style={{ '--i': i } as CSSProperties}>
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav__num">{item.num}</span>
                  <span className="nav__dash"> — </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="btn btn--primary btn--sm" href={LINKS.resume} target="_blank" rel="noopener noreferrer" data-magnetic="">
            {site.resume}
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      <span ref={progressRef} className="scroll-progress" aria-hidden="true" />
    </header>
  )
}
