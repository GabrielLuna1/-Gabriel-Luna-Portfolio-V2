import { TechItem } from "./types";

export const stack: TechItem[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "Next.js 14",
        icon: "https://cdn.simpleicons.org/nextdotjs/white",
      },
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "HTML5",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      // ADICIONADO: MongoDB (Essencial para o StockMaster)
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      // ADICIONADO: NextAuth (Essencial para o StockMaster)
      {
        name: "NextAuth.js",
        icon: "https://next-auth.js.org/img/logo/logo-sm.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
      {
        name: "Express",
        icon: "https://cdn.simpleicons.org/express/white",
      },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git/F05032",
      },
      {
        name: "Docker",
        icon: "https://cdn.simpleicons.org/docker/2496ED",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
];
