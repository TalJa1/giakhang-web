import { beyond } from '../data/content'
import Img from './Img'
import Section from './Section'

export default function Beyond() {
  const { weRead, piano } = beyond

  return (
    <Section id="beyond" label={beyond.label}>
      <div className="beyond-grid">
        <article className="beyond-card reveal" aria-labelledby="weread-title">
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
        </article>

        <article className="beyond-card reveal" aria-labelledby="piano-title">
          <div className="beyond-card__media">
            <Img name={piano.image.name} alt={piano.image.alt} ratio="16 / 10" />
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
        </article>
      </div>
    </Section>
  )
}
