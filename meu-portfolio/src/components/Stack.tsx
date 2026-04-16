import SectionTitle from './SectionTitle'
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si'

function Stack() {
  return (
    <section id="stack" className="section">
      <SectionTitle
        label="Pilha"
        title="Tecnologias que fazem parte da minha base atual"
      />

      <div className="stack-grid">
        <article className="stack-card">
          <h3>Linguagens</h3>

          <div className="stack-tags">
            <div className="tech-pill">
              <SiJavascript className="tech-icon" />
              <span>JavaScript</span>
            </div>

            <div className="tech-pill">
              <SiPython className="tech-icon" />
              <span>Python</span>
            </div>
          </div>
        </article>

        <article className="stack-card">
          <h3>Front-end</h3>

          <div className="stack-tags">
            <div className="tech-pill">
              <SiReact className="tech-icon" />
              <span>React</span>
            </div>

            <div className="tech-pill">
              <SiVite className="tech-icon" />
              <span>Vite</span>
            </div>
          </div>
        </article>

        <article className="stack-card">
          <h3>Back-end</h3>

          <div className="stack-tags">
            <div className="tech-pill">
              <SiNodedotjs className="tech-icon" />
              <span>Node.js</span>
            </div>
          </div>
        </article>

        <article className="stack-card">
          <h3>Banco de Dados</h3>

          <div className="stack-tags">
            <div className="tech-pill">
              <SiMysql className="tech-icon" />
              <span>MySQL</span>
            </div>
          </div>
        </article>

        <article className="stack-card">
          <h3>Versionamento</h3>

          <div className="stack-tags">
            <div className="tech-pill">
              <SiGit className="tech-icon" />
              <span>Git</span>
            </div>

            <div className="tech-pill">
              <SiGithub className="tech-icon" />
              <span>GitHub</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Stack