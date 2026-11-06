import { beyond } from '../data/content'
import ActivityPanel from './ActivityPanel'
import Img from './Img'
import Section, { SubHead } from './Section'

export default function Beyond() {
  const { activities, piano, sports } = beyond

  return (
    <Section id="beyond" num="06" label={beyond.label}>
      <div className="stack">
        {activities.map((activity) => (
          <ActivityPanel key={activity.id} activity={activity} />
        ))}

        <article className="beyond-card beyond-card--wide" aria-labelledby="piano-title" data-reveal="up">
          <div className="beyond-card__inner" data-tilt="">
            <div className="beyond-card__media beyond-card__media--piano">
              <Img name={piano.image.name} alt={piano.image.alt} ratio="3 / 4" />
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

      <SubHead label={sports.label} />
      <p className="lead sports__intro" data-reveal="up">
        {sports.intro}
      </p>
      <div className="stack">
        {sports.items.map((activity) => (
          <ActivityPanel key={activity.id} activity={activity} />
        ))}
      </div>
    </Section>
  )
}
