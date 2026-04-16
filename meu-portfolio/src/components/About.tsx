import SectionTitle from './SectionTitle'

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle
        label="Sobre"
        title="Base técnica em formação com foco em software, segurança e infraestrutura"
      />

      <div className="card">
        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas no Senac, com
          interesse em backend, desenvolvimento web, cibersegurança e
          infraestrutura.
        </p>

        <p>
          Meu foco está na construção de uma base técnica sólida, unindo estudo,
          prática e evolução contínua por meio de projetos, experimentação e
          aprofundamento em tecnologias relevantes para o desenvolvimento de
          software.
        </p>
      </div>
    </section>
  )
}

export default About