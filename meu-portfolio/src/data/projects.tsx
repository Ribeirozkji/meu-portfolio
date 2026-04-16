export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
  status?: 'Em desenvolvimento' | 'Concluído'
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ConectaTudo',
    description:
      'Projeto em desenvolvimento voltado para prática com Python, estruturação de lógica, organização modular e construção progressiva de funcionalidades.',
    tech: ['Python'],
    link: 'https://github.com/Ribeirozkji/ConectaTudo',
    status: 'Em desenvolvimento',
    featured: true,
  },
  {
    id: 2,
    title: 'Fluxo de Projeto',
    description:
      'Aplicativo web de gerenciamento de projetos com foco em organização, produtividade, definição de tarefas, prazos e prioridades.',
    tech: ['React', 'TypeScript', 'CSS', 'Vite'],
    link: '#',
    status: 'Concluído',
  },
  {
    id: 3,
    title: 'AquaLimpaOFC',
    description:
      'Projeto web com proposta institucional, voltado para apresentação visual, organização de conteúdo e construção de interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    status: 'Concluído',
  },
]