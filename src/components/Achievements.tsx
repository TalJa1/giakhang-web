import { achievements } from '../data/content'
import Gallery from './Gallery'
import { AchievementIcon } from './Icons'
import Section from './Section'
import Video from './Video'

export default function Achievements() {
  return (
    <Section id="achievements" label={achievements.label} heading={achievements.heading}>
      <div className="two-col-prose reveal">
        {achievements.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <h3 className="list-heading reveal">{achievements.subheading}</h3>
      <ul className="achievement-grid">
        {achievements.items.map((item) => (
          <li key={item.title} className="achievement-card reveal">
            <div className="achievement-card__media">
              <Gallery items={[item.image]} columns={1} ratio="4 / 3" label={`${item.title}: image`} />
            </div>
            <div className="achievement-card__body">
              <div className="achievement-card__top">
                <span className="achievement-card__icon">
                  <AchievementIcon name={item.icon} size={26} />
                </span>
                <span className="achievement-card__year">{item.year}</span>
              </div>
              <h4 className="achievement-card__title">{item.title}</h4>
              <p className="achievement-card__detail">{item.detail}</p>
              {item.org && <p className="achievement-card__org">{item.org}</p>}
              {item.video && <Video name={item.video.name} label={item.video.alt} className="achievement-card__video" />}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
