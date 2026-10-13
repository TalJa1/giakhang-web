import { PROJECTS_LAYOUT } from '../config/layout'
import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" label={projects.label} tone="gray">
      <div className={`projects-grid projects-grid--${PROJECTS_LAYOUT}`}>
        {projects.cards.map((card) => (
          <ProjectCard key={card.id} project={card} />
        ))}
      </div>
    </Section>
  )
}
