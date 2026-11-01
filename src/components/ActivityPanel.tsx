import type { Activity } from '../data/content'
import Gallery from './Gallery'
import { CheckIcon } from './Icons'

/** Panel for one activity: heading, role, story on the left, key points on the right, photos below. */
export default function ActivityPanel({ activity }: { activity: Activity }) {
  const { id, title, subtitle, role, meta, subheading, paragraphs, list, lessons, gallery } = activity
  const titleId = `${id}-title`

  return (
    <article className="panel activity" aria-labelledby={titleId}>
      <div className="activity__head" data-reveal="up">
        <h3 id={titleId} className="panel__title">
          {title}
        </h3>
        {subtitle && <p className="panel__subtitle">{subtitle}</p>}
        {(role || meta) && (
          <div className="activity__meta">
            {role && <p className="role-pill">{role}</p>}
            {meta && <p className="meta">{meta}</p>}
          </div>
        )}
        {subheading && <h4 className="block-subheading">{subheading}</h4>}
      </div>

      <div className="activity__body">
        <div>
          <div className="prose" data-stagger="">
            {paragraphs.map((p) => (
              <p key={p} data-reveal="up">
                {p}
              </p>
            ))}
          </div>
          {lessons && (
            <div className="lesson" data-reveal="up">
              <h4 className="block-subheading">{lessons.heading}</h4>
              <div className="prose">
                {lessons.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {list && (
          <div className="spec-panel" data-reveal="scale">
            {list.heading && <h4 className="spec-panel__title">{list.heading}</h4>}
            <ul className="spec-list" data-stagger="">
              {list.items.map((item) => (
                <li key={item} data-reveal="left">
                  <span className="spec-list__check" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {gallery && <Gallery gallery={gallery} label={`${title}: photos`} maxRowHeight={440} className="activity__gallery" />}
    </article>
  )
}
