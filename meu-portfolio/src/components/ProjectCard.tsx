type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  link: string
  status?: 'Em desenvolvimento' | 'Concluído'
  featured?: boolean
}

function ProjectCard({
  title,
  description,
  tech,
  link,
  status,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-top">
        <div className="project-heading">
          <h3>{title}</h3>

          {status && (
            <span
              className={`project-status ${
                status === 'Em desenvolvimento' ? 'in-progress' : 'done'
              }`}
            >
              {status}
            </span>
          )}
        </div>
      </div>

      <p className="project-description">{description}</p>

      <div className="project-stack">
        <p className="project-stack-label">Tecnologias usadas</p>

        <div className="tech-list">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <a href={link} className="project-link" target="_blank" rel="noreferrer">
        Ver no GitHub
      </a>
    </article>
  )
}

export default ProjectCard