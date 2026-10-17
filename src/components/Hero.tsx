import { Fragment, useRef } from 'react'
import { home, projects } from '../data/content'
import { useHeroParallax } from '../hooks/useHeroParallax'
import Gear from './Gear'
import HighlightsStrip from './HighlightsStrip'
import { ArrowRightIcon, MedalIcon } from './Icons'
import Img from './Img'
import Marquee from './Marquee'
import SplitWords from './SplitWords'

const award = projects.cards[0].award
// "Designing Ideas. Building Solutions. Inspiring Change." → three phrases for the scrolling band.
const taglineParts = home.tagline.split('. ').map((s) => s.replace(/\.$/, ''))

/** Circular text that slowly spins around the brand mark (decorative). */
function SpinBadge({ text }: { text: string }) {
  return (
    <span className="spin-badge" aria-hidden="true">
      <svg viewBox="0 0 160 160" className="spin-badge__ring">
        <defs>
          <path id="spin-badge-circle" d="M80 80m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0" />
        </defs>
        <text>
          <textPath href="#spin-badge-circle" textLength="388">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="spin-badge__core" />
    </span>
  )
}

export default function Hero() {
  const [lead, ...rest] = home.paragraphs
  const eyebrowParts = home.eyebrow.split(' | ')
  const visualRef = useRef<HTMLDivElement>(null)
  useHeroParallax(visualRef)

  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blueprint" />
        <span className="hero__glow" />
        <Gear teeth={16} className="hero__gear hero__gear--a" />
        <Gear teeth={10} className="hero__gear hero__gear--b" />
      </div>

      <div className="container hero__layout">
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">
            {/* Each part keeps its trailing "|" so a wrapped line never starts with a separator. */}
            {eyebrowParts.map((part, i) => (
              <Fragment key={part}>
                {i > 0 && ' '}
                <span className="hero__eyebrow-part">
                  {part}
                  {i < eyebrowParts.length - 1 && <span className="hero__sep"> |</span>}
                </span>
              </Fragment>
            ))}
          </p>
          <h1 id="home-title" className="hero__title">
            <SplitWords text={home.heading} />
          </h1>
          <p className="hero__tagline">{home.tagline}</p>
          <p className="lead hero__lead">{lead}</p>
          <div className="hero__more">
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="btn-row">
            {home.buttons.map((b, i) => (
              <a key={b.href} href={b.href} className={`btn ${i === 0 ? 'btn--primary' : 'btn--outline'}`} data-magnetic="">
                {b.label}
                {i === 0 && <ArrowRightIcon size={18} />}
              </a>
            ))}
          </div>
        </div>

        <div ref={visualRef} className="hero__visual">
          <span className="hero__slab" aria-hidden="true" />
          <div className="hero__frame">
            <Img name={home.image.name} alt={home.image.alt} ratio="3 / 4" position="center top" eager />
            <span className="hero__scan" aria-hidden="true" />
          </div>
          <SpinBadge text={`${eyebrowParts.join(' • ').toUpperCase()} • `} />
          {award && (
            <a className="hero__chip" href="#projects">
              <span className="hero__chip-icon">
                <MedalIcon size={20} />
              </span>
              {award.text}
            </a>
          )}
        </div>
      </div>

      <HighlightsStrip />
      <Marquee items={taglineParts} repeat={2} speed={36} className="marquee--band" separator="✦" />
    </section>
  )
}
