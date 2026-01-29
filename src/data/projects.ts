import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "stockmaster-pro",
    title: "proj.stockmaster.title", // O Novo Flagship Full Stack
    description: "proj.stockmaster.desc",
    tags: ["Next.js 14", "MongoDB", "NextAuth", "Server Actions", "TypeScript"],
    imageUrl: "/stockmaster.png", // Certifique-se que a imagem está na pasta public com esse nome
    githubUrl: "https://github.com/GabrielLuna1/Stock-master-pro", // <--- LINK CORRIGIDO AQUI
    demoUrl: "https://stock-master-pro-app.vercel.app/",
    featured: true, // Destaque máximo
  },
  {
    id: "galactic-luna",
    title: "proj.galactic.title",
    description: "proj.galactic.desc",
    tags: ["JavaScript", "Gulp", "Security", "CSS3"],
    imageUrl: "/galactic-luna.png",
    githubUrl: "https://github.com/GabrielLuna1/GabrielLuna1.github.io",
    demoUrl: "https://gabrielluna1.github.io",
    featured: false,
  },
  {
    id: "esc-cursos",
    title: "proj.esc.title",
    description: "proj.esc.desc",
    tags: ["JavaScript", "Gulp", "Bootstrap", "SaaS"],
    imageUrl: "/esc.png",
    githubUrl: "https://github.com/GabrielLuna1/esc-new",
    demoUrl: "#",
    featured: false,
  },
  {
    id: "portfolio-v2",
    title: "proj.v2.title",
    description: "proj.v2.desc",
    tags: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: "/Portfólio-V2.png",
    githubUrl: "https://github.com/GabrielLuna1/portfolio-v2",
    demoUrl: "#",
    featured: false,
  },
];
