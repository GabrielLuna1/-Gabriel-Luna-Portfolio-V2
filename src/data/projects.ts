import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "proj.galactic.title", // <--- Chave
    description: "proj.galactic.desc", // <--- Chave
    tech: ["JavaScript", "Gulp", "Security", "CSS3"], // Mantido igual
    repo: "https://github.com/GabrielLuna1/GabrielLuna1.github.io",
    link: "https://gabrielluna1.github.io",
    image: "/galactic-luna.png",
    featured: true
  },
  {
    id: "2",
    title: "proj.esc.title", // <--- Chave
    description: "proj.esc.desc", // <--- Chave
    tech: ["JavaScript", "Gulp", "Bootstrap", "SaaS"], // Mantido igual
    repo: "https://github.com/GabrielLuna1/esc-new",
    link: "#",
    image: "/esc.png",
    featured: true
  },
  {
    id: "3",
    title: "proj.v2.title", // <--- Chave
    description: "proj.v2.desc", // <--- Chave
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"], // Mantido igual
    repo: "https://github.com/GabrielLuna1/portfolio-v2",
    link: "#",
    image: "/Portfólio-V2.png",
    featured: true
  }
];