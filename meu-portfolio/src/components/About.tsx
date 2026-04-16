import SectionTitle from './SectionTitle'

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle
        label="Sobre mim"
        title="Apresentação profissional"
      />

      <div className="card">
        <p>
          Sou estudante de Análise e Desenvolvimento de Sistemas, com interesse
          em desenvolvimento front-end, interfaces bem construídas e projetos
          que unam estética, organização e desempenho.
        </p>

        <p>
          Meu objetivo é criar aplicações que transmitam profissionalismo,
          tenham boa experiência de uso e representem bem minhas habilidades
          técnicas em evolução.
        </p>
      </div>
    </section>
  )
}

export default About