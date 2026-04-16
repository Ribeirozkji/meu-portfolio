import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle
        label="Contato"
        title="Canais para acompanhar minha evolução e entrar em contato"
      />

      <div className="card contact-card">
        <p>
          Você pode acompanhar meu perfil, meus estudos e meus projetos pelas
          redes abaixo.
        </p>

        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/pedro-henrique-14bba7303/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          
          <a
            href="https://www.instagram.com/ribeirozjki/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://github.com/Ribeirozkji"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact