export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Tarefas',
    description:
      'Aplicação para gerenciamento de tarefas com foco em produtividade, organização e experiência de uso.',
    tech: ['React', 'Vite', 'TypeScript'],
    link: '#',
  },
  {
    id: 2,
    title: 'Landing Page Moderna',
    description:
      'Página institucional com design responsivo, foco em conversão e identidade visual forte.',
    tech: ['React', 'UI Design', 'Responsive'],
    link: '#',
  },
  {
    id: 3,
    title: 'App de Estudos',
    description:
      'Projeto voltado para acompanhamento de rotina de estudos, metas e evolução pessoal.',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    link: '#',
  },
]