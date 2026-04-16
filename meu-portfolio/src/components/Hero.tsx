function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Disponível para projetos e oportunidades
          </div>

          <p className="hero-kicker">Front-end em evolução</p>

          <h1>
            Pedro
            <span>
              Construo interfaces com presença visual, estrutura limpa e foco
              em experiência.
            </span>
          </h1>

          <p className="hero-text">
            Sou estudante de Análise e Desenvolvimento de Sistemas e estou
            desenvolvendo projetos com foco em front-end moderno, identidade
            visual forte e código organizado.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explorar projetos
            </a>

            <a href="#contact" className="btn btn-secondary">
              Falar comigo
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>3+</strong>
              <span>Projetos em desenvolvimento</span>
            </div>

            <div>
              <strong>React</strong>
              <span>Vite, TSX e UI moderna</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-wrap">
            <div className="portrait-glow"></div>

            <div className="portrait-card">
              <img src="/images/pedro.png" alt="Foto de Pedro" />
            </div>

            <div className="floating-card floating-card-top">
              <span>UI</span>
              <strong>Clean design</strong>
            </div>

            <div className="floating-card floating-card-bottom">
              <span>Code</span>
              <strong>React + TypeScript</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero