import type { Project } from '../data/content'
import Gallery from './Gallery'
import { ArrowUpRightIcon, CalendarIcon, MedalIcon } from './Icons'

export default function ProjectCard({ project }: { project: Project }) {
  const titleId = `${project.id}-title`

  return (
    <article className="project-card reveal" aria-labelledby={titleId}>
      <div className="project-card__media">
        <Gallery items={project.media} variant="feature" label={`${project.title}: images`} />
      </div>

      <div className="project-card__body">
        <p className="eyebrow">{project.label}</p>
        <h3 id={titleId} className="project-card__title">
          {project.title}
        </h3>
        <p className="meta">
          <CalendarIcon size={16} />
          {project.dates}
        </p>

        {project.award && (
          <div className="award">
            <p className="award__badge">
              <MedalIcon size={18} />
              {project.award.text}
            </p>
            <Gallery
              items={project.award.media}
              columns={3}
              ratio="1 / 1"
              label={`${project.award.text}: photos and video`}
              className="gallery--small"
            />
          </div>
        )}

        <h4 className="block-subheading">{project.subheading}</h4>
        <div className="prose">
          {project.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="spec-panel">
          <h4 className="spec-panel__title">{project.highlightsHeading}</h4>
          <ul className="spec-list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="lesson">
          <h4 className="block-subheading">{project.lessonsHeading}</h4>
          <div className="prose">
            {project.lessons.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="btn-row project-card__links">
          {project.links.map((link, i) => (
            <a
              key={link.href}
              className={`btn ${i === 0 ? 'btn--primary' : 'btn--outline'}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <ArrowUpRightIcon size={16} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
