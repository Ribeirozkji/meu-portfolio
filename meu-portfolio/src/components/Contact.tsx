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
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://discord.com/users/seuusuario"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>

          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://reddit.com/user/seuusuario"
            target="_blank"
            rel="noreferrer"
          >
            Reddit
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact