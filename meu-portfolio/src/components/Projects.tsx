import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        label="Projetos"
        title="Projetos que mostram prática, evolução técnica e construção progressiva"
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            status={project.status}
            featured={project.featured}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects