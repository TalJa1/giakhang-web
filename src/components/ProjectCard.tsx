import type { Project } from '../data/content'
import Gallery from './Gallery'
import { ArrowUpRightIcon, CalendarIcon, CheckIcon, MedalIcon } from './Icons'
import SplitWords from './SplitWords'

export default function ProjectCard({ project }: { project: Project }) {
  const titleId = `${project.id}-title`

  return (
    <article className="project" aria-labelledby={titleId}>
      <header className="project__head" data-reveal="fade">
        <span className="project__num" aria-hidden="true">
          {project.num}
        </span>
        <div className="project__heading">
          <p className="eyebrow">{project.label}</p>
          <h3 id={titleId} className="project__title">
            <SplitWords text={project.title} />
          </h3>
          <p className="meta">
            <CalendarIcon size={16} />
            {project.dates}
          </p>
        </div>
      </header>

      <Gallery gallery={project.gallery} label={`${project.title}: images`} className="project__gallery" />

      {project.award && (
        <div className="award" data-reveal="up">
          <p className="award__badge">
            <span className="award__medal">
              <MedalIcon size={28} />
            </span>
            {project.award.text}
          </p>
          <Gallery gallery={project.award.gallery} label={`${project.award.text}: photos and video`} />
        </div>
      )}

      <div className="project__body">
        <div className="project__story">
          <h4 className="block-subheading" data-reveal="up">
            {project.subheading}
          </h4>
          <div className="prose" data-stagger="">
            {project.paragraphs.map((p) => (
              <p key={p} data-reveal="up">
                {p}
              </p>
            ))}
          </div>

          <div className="lesson" data-reveal="up">
            <h4 className="block-subheading">{project.lessonsHeading}</h4>
            <div className="prose">
              {project.lessons.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <aside className="project__aside">
          <div className="spec-panel" data-reveal="scale">
            <h4 className="spec-panel__title">{project.highlightsHeading}</h4>
            <ul className="spec-list" data-stagger="">
              {project.highlights.map((h) => (
                <li key={h} data-reveal="left">
                  <span className="spec-list__check" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="project__links" data-reveal="up">
            {project.links.map((link, i) => (
              <a
                key={link.href}
                className={`btn ${i === 0 ? 'btn--primary' : 'btn--outline'}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic=""
              >
                {link.label}
                <ArrowUpRightIcon size={16} />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </article>
  )
}
