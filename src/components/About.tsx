import { useRef, type CSSProperties } from 'react'
import { about } from '../data/content'
import { useScrollProgress } from '../hooks/useScrollProgress'
import Gear from './Gear'
import Img from './Img'
import Section from './Section'

/** Dark band; the quote's words light up one by one as it scrolls through the viewport. */
function Philosophy() {
  const { philosophy } = about
  const quoteRef = useRef<HTMLParagraphElement>(null)
  useScrollProgress(quoteRef, { start: 0.9, end: 0.4 })
  const words = philosophy.quote.split(' ')

  return (
    <div className="philosophy">
      <Gear teeth={20} className="philosophy__gear" />
      <div className="container">
        <div className="philosophy__inner" data-reveal="up">
          <h3 className="philosophy__heading">{philosophy.heading}</h3>
          <p ref={quoteRef} className="philosophy__quote" style={{ '--n': words.length } as CSSProperties}>
            {words.map((w, i) => (
              <span key={i} className="philosophy__word" style={{ '--k': i } as CSSProperties}>
                {w}{' '}
              </span>
            ))}
          </p>
          <p className="philosophy__text">{about.philosophy.text}</p>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const { school } = about

  return (
    <Section id="about" num="02" label={about.label} heading={about.heading} className="about" after={<Philosophy />}>
      <div className="about__grid">
        <div className="about__text">
          <p className="lead about__intro" data-reveal="up">
            {about.intro}
          </p>
          <div className="prose" data-stagger="">
            {about.body.map((p) => (
              <p key={p} data-reveal="up">
                {p}
              </p>
            ))}
          </div>
          <p className="about__closing" data-reveal="up">
            {about.closing}
          </p>
        </div>

        <div className="school-card" data-reveal="right">
          <div className="school-card__photo" data-tilt="">
            <Img name={school.photo.name} alt={school.photo.alt} ratio="596 / 335" />
            <span className="glare" aria-hidden="true" />
          </div>
          <div className="school-card__logo">
            <Img name={school.logo.name} alt={school.logo.alt} ratio="1 / 1" fit="contain" />
          </div>
        </div>
      </div>
    </Section>
  )
}
