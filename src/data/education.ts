import { EducationItem } from "./types";

export const education: EducationItem[] = [
  {
    id: "1",
    course: "edu.umc.course",
    institution: "edu.umc.inst",
    period: "edu.umc.period",
    description: "edu.umc.desc",
    type: "degree", // <--- Graduação ganha destaque e ícone de Capelo 🎓
  },
  {
    id: "2",
    course: "edu.obc.course",
    institution: "edu.obc.inst",
    period: "edu.obc.period",
    description: "edu.obc.desc",
    type: "certificate", // <--- Cursos ganham ícone de Medalha 🏅
  },
  {
    id: "3",
    course: "edu.origamid.course",
    institution: "edu.origamid.inst",
    period: "edu.origamid.period",
    description: "edu.origamid.desc",
    type: "certificate",
  },
  {
    id: "4",
    course: "edu.impacta.course",
    institution: "edu.impacta.inst",
    period: "edu.impacta.period",
    description: "edu.impacta.desc",
    type: "certificate",
  },
];
