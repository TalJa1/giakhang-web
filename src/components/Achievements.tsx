import { useRef } from 'react'
import { achievements } from '../data/content'
import { useScrollProgress } from '../hooks/useScrollProgress'
import Gallery from './Gallery'
import { AchievementIcon, ArrowUpRightIcon, PlayIcon } from './Icons'
import Section from './Section'

export default function Achievements() {
  const timelineRef = useRef<HTMLDivElement>(null)
  // The red line fills down to wherever the middle of the screen is.
  useScrollProgress(timelineRef, { start: 0.6, end: 0.6, span: 1 })

  return (
    <Section id="achievements" num="04" label={achievements.label} heading={achievements.heading}>
      <div className="two-col-prose" data-stagger="">
        {achievements.paragraphs.map((p) => (
          <p key={p} data-reveal="up">
            {p}
          </p>
        ))}
      </div>

      <h3 className="list-heading" data-reveal="up">
        {achievements.subheading}
      </h3>

      <div ref={timelineRef} className="timeline">
        <span className="timeline__track" aria-hidden="true">
          <span className="timeline__fill" />
        </span>
        <ol className="timeline__list">
          {achievements.items.map((item) => (
            <li key={item.id} className="tl-item">
              <span className="tl-item__dot" data-reveal="scale">
                <AchievementIcon name={item.icon} size={22} />
              </span>
              <article className="tl-card" data-reveal="up" aria-labelledby={`${item.id}-title`}>
                <div className="tl-card__inner" data-tilt="">
                  <div className="tl-card__text">
                    <p className="tl-card__year">{item.year}</p>
                    <h4 id={`${item.id}-title`} className="tl-card__title">
                      {item.title}
                    </h4>
                    <p className="tl-card__detail">{item.detail}</p>
                    {item.org && <p className="tl-card__org">{item.org}</p>}
                  </div>
                  <div className="tl-card__media">
                    {item.gallery && (
                      <Gallery gallery={item.gallery} label={`${item.title}: photos and video`} maxRowHeight={340} />
                    )}
                    {item.links && (
                      <ul className="reels">
                        {item.links.map((link) => (
                          <li key={link.href}>
                            <a className="reel" href={link.href} target="_blank" rel="noopener noreferrer">
                              <span className="reel__play" aria-hidden="true">
                                <PlayIcon size={18} />
                              </span>
                              <span className="reel__label">{link.label}</span>
                              <ArrowUpRightIcon size={16} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <span className="glare" aria-hidden="true" />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
