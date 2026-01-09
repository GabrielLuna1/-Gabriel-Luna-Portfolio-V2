import { TechItem } from "./types";

export const stack: TechItem[] = [
  // Frontend
  { 
    name: "HTML5", 
    category: "Frontend",
    icon: "https://cdn.simpleicons.org/html5/E34F26" 
  },
  { 
    name: "CSS3", 
    category: "Frontend", 
    // Link corrigido para Devicon (mais estável)
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
  },
  { 
    name: "JavaScript", 
    category: "Frontend", 
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E" 
  },
  { 
    name: "TypeScript", 
    category: "Frontend", 
    icon: "https://cdn.simpleicons.org/typescript/3178C6" 
  },
  { 
    name: "React", 
    category: "Frontend", 
    icon: "https://cdn.simpleicons.org/react/61DAFB" 
  },
  { 
    name: "Next.js", 
    category: "Frontend", 
    icon: "https://cdn.simpleicons.org/nextdotjs/white" 
  },
  { 
    name: "Tailwind CSS", 
    category: "Frontend", 
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" 
  },
  { 
    name: "Styled Comp.", 
    category: "Frontend", 
    icon: "https://cdn.simpleicons.org/styledcomponents/DB7093" 
  },
  
  // Backend
  { 
    name: "Node.js", 
    category: "Backend", 
    icon: "https://cdn.simpleicons.org/nodedotjs/339933" 
  },
  { 
    name: "Express", 
    category: "Backend", 
    icon: "https://cdn.simpleicons.org/express/white" 
  },
  { 
    name: "PostgreSQL", 
    category: "Backend", 
    icon: "https://cdn.simpleicons.org/postgresql/4169E1" 
  },
  
  // Ferramentas
  { 
    name: "Git", 
    category: "Ferramentas", 
    icon: "https://cdn.simpleicons.org/git/F05032" 
  },
  { 
    name: "Docker", 
    category: "Ferramentas", 
    icon: "https://cdn.simpleicons.org/docker/2496ED" 
  },
  { 
    name: "VS Code", 
    category: "Ferramentas", 
    // Link corrigido para Devicon
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
  }
];