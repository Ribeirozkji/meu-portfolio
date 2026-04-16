type ProjectCardProps = {
  index: number
  title: string
  description: string
  tech: string[]
  link: string
}

function ProjectCard({
  index,
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3>{title}</h3>
      </div>

      <p className="project-description">{description}</p>

      <div className="tech-list">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <a href={link} className="project-link" target="_blank" rel="noreferrer">
        Ver projeto
      </a>
    </article>
  )
}

export default ProjectCard