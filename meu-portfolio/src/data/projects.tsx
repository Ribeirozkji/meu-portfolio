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
      'O ConectaTudo é um projeto acadêmico desenvolvido com o objetivo de propor uma solução prática para a organização de pedidos e atendimentos em pequenos negócios.',
    tech: ['Python', 'Django REST', 'PostgreSQL', 'React', 'TypeScript'],
    link: 'https://github.com/Ribeirozkji/ConectaTudo',
    status: 'Em desenvolvimento',
    featured: true,
  },
  {
    id: 2,
    title: 'Fluxo de Projeto',
    description:
      'Aplicativo web de gerenciamento de projetos com foco em organização, produtividade, definição de tarefas, prazos e prioridades.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
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