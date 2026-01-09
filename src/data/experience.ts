import { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    id: "1", // <-- PRECISA DE ASPAS AQUI
    role: "exp.esc.role",
    company: "ESC Cursos",
    period: "exp.esc.date",
    description: "exp.esc.desc",
    achievements: [
      "exp.esc.ach.1",
      "exp.esc.ach.2",
      "exp.esc.ach.3",
      "exp.esc.ach.4",
      "exp.esc.ach.5"
    ]
  },
  {
    id: "2", // <-- PRECISA DE ASPAS AQUI
    role: "exp.freela.role",
    company: "Projetos Diversos",
    period: "exp.freela.date",
    description: "exp.freela.desc",
    achievements: [
      "exp.freela.ach.1",
      "exp.freela.ach.2",
      "exp.freela.ach.3",
      "exp.freela.ach.4"
    ]
  }
];