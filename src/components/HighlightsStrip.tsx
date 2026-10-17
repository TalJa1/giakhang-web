import { highlights } from '../data/content'
import { AchievementIcon } from './Icons'

export default function HighlightsStrip() {
  return (
    <div className="highlights">
      <ul className="container highlights__list">
        {highlights.map((item, i) => (
          <li key={item.text} className="highlights__cell" style={{ animationDelay: `${0.9 + i * 0.1}s` }}>
            <a className="highlights__item" href="#achievements">
              <span className="highlights__icon">
                <AchievementIcon name={item.icon} size={22} />
              </span>
              <span className="highlights__year">{item.year}</span>
              <span className="highlights__text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
