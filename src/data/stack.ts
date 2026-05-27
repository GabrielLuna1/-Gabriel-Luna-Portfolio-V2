import { TechItem } from "./types";

export const stack: TechItem[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 14", icon: "https://cdn.simpleicons.org/nextdotjs/white", level: "Avançado" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", level: "Avançado" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", level: "Intermediário" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: "Avançado" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: "Avançado" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", level: "Avançado" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", level: "Avançado" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", level: "Avançado" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", level: "Intermediário" },
      { name: "NextAuth.js", icon: "https://next-auth.js.org/img/logo/logo-sm.png", level: "Avançado" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", level: "Intermediário" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/white", level: "Avançado" },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", level: "Avançado" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", level: "Básico" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/vscode/vscode-original.svg", level: "Avançado" },
    ],
  },
];
