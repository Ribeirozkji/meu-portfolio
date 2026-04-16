import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle
        label="Contato"
        title="Vamos conversar"
      />

      <div className="card contact-card">
        <p>
          Estou em processo de evolução como desenvolvedor e aberto a novas
          oportunidades, conexões e projetos para aprendizado prático.
        </p>

        <div className="contact-info">
          <a href="mailto:seuemail@exemplo.com">seuemail@exemplo.com</a>
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noreferrer"
          >
            github.com/seuusuario
          </a>
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/seuusuario
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact