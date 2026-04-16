import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        label="Projetos"
        title="Trabalhos em destaque"
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects