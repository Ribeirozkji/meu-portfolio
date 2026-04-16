function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Em evolução constante na tecnologia
          </div>

          <p className="hero-kicker">Portfólio pessoal</p>

          <h1>
            Pedro Henrique
            <span>
              Estudante de Análise e Desenvolvimento de Sistemas no Senac, com
              foco em backend, desenvolvimento web, cibersegurança e
              infraestrutura.
            </span>
          </h1>

          <p className="hero-text">
            Este perfil reúne projetos, estudos e evolução técnica com ênfase em
            construção sólida de software, organização de código e melhoria
            contínua.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver projetos
            </a>

            <a href="#contact" className="btn btn-secondary">
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-wrap">
            <div className="portrait-glow"></div>

            <div className="portrait-card">
              <img src="/images/pedro.png" alt="Foto de Pedro Henrique" />
            </div>

            <div className="floating-card floating-card-top">
              <span>Foco</span>
              <strong>Backend e segurança</strong>
            </div>

            <div className="floating-card floating-card-bottom">
              <span>Base</span>
              <strong>Web, infraestrutura e código</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero