import type { CSSProperties } from 'react'
import { beyond } from '../data/content'
import { isImageUnavailable } from '../lib/media'
import Img from './Img'
import Section from './Section'

// One octave plus a fifth: white keys, and which gaps between them carry a black key.
const WHITE_KEYS = 12
const BLACK_AFTER = [0, 1, 3, 4, 5, 7, 8, 10]

/** Decorative keyboard whose keys press in a slow wave (used until a piano photo is uploaded). */
function Keyboard() {
  return (
    <div className="keys" aria-hidden="true">
      {Array.from({ length: WHITE_KEYS }, (_, i) => (
        <span key={i} className="keys__white" style={{ '--k': i } as CSSProperties}>
          {BLACK_AFTER.includes(i) && <span className="keys__black" style={{ '--k': i + 0.5 } as CSSProperties} />}
        </span>
      ))}
    </div>
  )
}

export default function Beyond() {
  const { weRead, piano } = beyond
  const hasPianoPhoto = !isImageUnavailable(piano.image.name)

  return (
    <Section id="beyond" num="06" label={beyond.label}>
      <div className="beyond-grid" data-stagger="">
        <article className="beyond-card" aria-labelledby="weread-title" data-reveal="up">
          <div className="beyond-card__inner" data-tilt="">
            <div className="beyond-card__media beyond-card__media--logo">
              <Img name={weRead.image.name} alt={weRead.image.alt} ratio="1 / 1" fit="contain" className="beyond-card__logo" />
            </div>
            <div className="beyond-card__body">
              <h3 id="weread-title" className="panel__title">
                {weRead.title}
              </h3>
              <p className="role-pill">{weRead.role}</p>
              <div className="prose">
                {weRead.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <span className="glare" aria-hidden="true" />
          </div>
        </article>

        <article className="beyond-card" aria-labelledby="piano-title" data-reveal="up">
          <div className="beyond-card__inner" data-tilt="">
            <div className="beyond-card__media beyond-card__media--piano">
              {hasPianoPhoto ? <Img name={piano.image.name} alt={piano.image.alt} ratio="16 / 10" /> : <Keyboard />}
            </div>
            <div className="beyond-card__body">
              <h3 id="piano-title" className="panel__title">
                {piano.title}
              </h3>
              <div className="prose">
                {piano.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <span className="glare" aria-hidden="true" />
          </div>
        </article>
      </div>
    </Section>
  )
}
