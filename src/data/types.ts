export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
}

// ATUALIZADO PARA O NOVO COMPONENTE DE PROJETOS
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[]; // Antes era 'tech'
  imageUrl: string; // Antes era 'image'
  githubUrl: string; // Antes era 'repo'
  demoUrl: string; // Antes era 'link'
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

// ATUALIZADO PARA SUPORTAR CATEGORIAS (FRONT, BACK, DEVOPS)
export interface TechItem {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

// ATUALIZADO PARA SUPORTAR DESTAQUE DE GRADUAÇÃO
export interface EducationItem {
  id: string;
  course: string;
  institution: string;
  period: string;
  description: string;
  type?: "degree" | "certificate"; // <--- ADICIONADO AQUI (O ? significa opcional)
}
