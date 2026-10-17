import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="projects" num="03" label={projects.label} tone="gray">
      <div className="projects">
        {projects.cards.map((card) => (
          <ProjectCard key={card.id} project={card} />
        ))}
      </div>
    </Section>
  )
}
