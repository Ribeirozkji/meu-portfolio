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
  SiPhp,
  SiOpenjdk,
  SiTailwindcss,
  SiTypescript,
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

            <div className="tech-pill">
              <SiPhp className="tech-icon" />
              <span>PHP</span>
            </div>

            <div className="tech-pill">
              <SiOpenjdk className="tech-icon" />
              <span>Java</span>
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

            <div className="tech-pill">
              <SiTailwindcss className="tech-icon" />
              <span>Tailwind CSS</span>
            </div>

            <div className="tech-pill">
              <SiTypescript className="tech-icon" />
              <span>TypeScript</span>
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

            <div className="tech-pill">
              <SiPhp className="tech-icon" />
              <span>PHP</span>
            </div>

            <div className="tech-pill">
              <SiOpenjdk className="tech-icon" />
              <span>Java</span>
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