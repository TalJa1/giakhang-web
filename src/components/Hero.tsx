import { Fragment, useRef } from 'react'
import { home } from '../data/content'
import { useHeroParallax } from '../hooks/useHeroParallax'
import { ArrowRightIcon } from './Icons'
import HighlightsStrip from './HighlightsStrip'
import Img from './Img'

export default function Hero() {
  const [lead, ...rest] = home.paragraphs
  const eyebrowParts = home.eyebrow.split(' | ')
  const visualRef = useRef<HTMLDivElement>(null)
  useHeroParallax(visualRef)

  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <div className="container hero__grid">
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
            {home.heading}
          </h1>
          <p className="hero__tagline">{home.tagline}</p>
          <p className="lead">{lead}</p>
          {rest.map((p) => (
            <p key={p} className="hero__para">
              {p}
            </p>
          ))}
          <div className="btn-row">
            {home.buttons.map((b, i) => (
              <a key={b.href} href={b.href} className={`btn ${i === 0 ? 'btn--primary' : 'btn--outline'}`}>
                {b.label}
                {i === 0 && <ArrowRightIcon size={18} />}
              </a>
            ))}
          </div>
        </div>

        <div ref={visualRef} className="hero__visual">
          <div className="hero__frame">
            <Img name={home.image.name} alt={home.image.alt} ratio="4 / 5" position="center top" eager />
          </div>
        </div>
      </div>
      <HighlightsStrip />
    </section>
  )
}
