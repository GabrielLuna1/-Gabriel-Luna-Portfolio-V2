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

export interface Project {
  id: string; // <--- Agora aceita texto ("1")
  title: string;
  description: string;
  tech: string[];
  repo: string;
  link?: string; // O ? significa que é opcional (pois alguns estão offline)
  image: string;
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

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Ferramentas";
  icon: string;
}

export interface EducationItem {
  id: string;
  course: string;
  institution: string;
  period: string;
  description: string;
}