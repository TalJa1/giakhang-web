import { useEffect, useState } from 'react'
import { LINKS } from '../config/media'
import { nav, site } from '../data/content'
import { CloseIcon, MenuIcon } from './Icons'

const DESKTOP_NAV = '(min-width: 1180px)'

export default function Header() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className={`site-header ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true" />
          {site.brand}
        </a>

        <nav id="primary-nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.id}>
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
          <a className="btn btn--primary btn--sm" href={LINKS.resume} target="_blank" rel="noopener noreferrer">
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
    </header>
  )
}
