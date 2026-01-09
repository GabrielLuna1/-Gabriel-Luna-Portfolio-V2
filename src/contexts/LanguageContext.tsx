"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // --- NAVEGAÇÃO ---
    "nav.about": "Sobre",
    "nav.stack": "Stack",
    "nav.career": "Carreira",
    "nav.projects": "Projetos",
    "nav.studies": "Estudos",
    "nav.search": "Pesquisar...",
    "nav.cta": "Vamos conversar",
    
    // --- HERO ---
    "hero.badge": "Disponível para novos projetos",
    "hero.role": "Front-end Developer",
    "hero.description": "Foco em interfaces modernas e estabilidade. Combino precisão técnica com a robustez da experiência real em produção.",
    "hero.btn.projects": "Ver Projetos",
    "hero.btn.linkedin": "LinkedIn",
    
    // --- SOBRE ---
    "about.title": "Além do Código.",
    "about.subtitle": "Sobre Mim",
    "about.stats.exp": "Anos de Exp.",
    "about.stats.projects": "Projetos Entregues",
    "about.stats.english": "Inglês",
    "about.journey": "Minha jornada técnica é marcada pela prática: não apenas estudei, mas resolvi problemas reais. Na ESC Cursos, aprendi na pele que código limpo é aquele que mantém o sistema estável e o usuário final satisfeito.",
    "about.focus.start": "Hoje, combino essa vivência de produção com a potência de tecnologias modernas como",
    "about.focus.end": "Meu foco é criar interfaces que unem performance técnica com a experiência de usuário fluida.",

    // --- STACK ---
    "stack.title": "Tecnologias",
    "stack.subtitle": "Meu cinto de utilidades",

    // --- EXPERIÊNCIA (ESTRUTURA) ---
    "experience.title": "Trajetória Profissional",
    "experience.subtitle": "Carreira",
    "experience.present": "Atualmente",

    // 👇 AQUI ESTÁ A MÁGICA QUE FALTAVA 👇
    // --- EXPERIÊNCIA (DADOS - ESC CURSOS) ---
    "exp.esc.role": "Front-end Developer & Suporte",
    "exp.esc.date": "Mar 2023 - Atualmente",
    "exp.esc.desc": "Atuo como parceiro técnico de longo prazo. O que iniciou como projetos pontuais evoluiu para a gestão completa da infraestrutura digital.",
    "exp.esc.ach.1": "Desenvolvimento de interfaces responsivas (HTML, CSS, JS, Bootstrap).",
    "exp.esc.ach.2": "Monitoramento de estabilidade e performance em SaaS.",
    "exp.esc.ach.3": "Resolução de conflitos de integração e gateways de pagamento.",
    "exp.esc.ach.4": "Melhorias de UX e automações com IA.",
    "exp.esc.ach.5": "Gestão de deploys e migração de servidores.",

    // --- EXPERIÊNCIA (DADOS - FREELANCER) ---
    "exp.freela.role": "Desenvolvedor Web (Freelancer)",
    "exp.freela.date": "2022 - 2023",
    "exp.freela.desc": "Foco em entregar soluções rápidas para pequenos negócios, transformando requisitos em páginas de alta conversão.",
    "exp.freela.ach.1": "Criação de Landing Pages para Clínica Odontológica.",
    "exp.freela.ach.2": "Site Institucional para Indústria Metalúrgica.",
    "exp.freela.ach.3": "Otimização de SEO local e configuração de domínios.",
    "exp.freela.ach.4": "Entregas focadas em performance (Lighthouse).",
    // 👆 FIM DA PARTE QUE FALTAVA 👆

    // --- PROJETOS ---
    "projects.title": "Projetos Selecionados",
    "projects.subtitle": "Portfólio",
    "projects.btn.code": "Código",
    "projects.btn.demo": "Demo Online",

// --- PROJETOS REAIS (PT) ---
    "proj.galactic.title": "Galactic Luna 🚀",
    "proj.galactic.desc": "Landing Page interativa com tema espacial. O diferencial técnico é um Chatbot desenvolvido com validações manuais de segurança contra ataques XSS e SQL Injection, além de pipeline de build automatizado com Gulp.",
    
    "proj.esc.title": "Portal ESC Cursos",
    "proj.esc.desc": "Infraestrutura completa de front-end focada em performance. Implementei um sistema de build com Gulp para 'Cache Busting' (atualização automática de cache), minificação de assets e automação de deploy para produção.",
    
    "proj.v2.title": "Portfólio Profissional V2",
    "proj.v2.desc": "Este site que você está navegando! Desenvolvido com a stack mais moderna do mercado: Next.js 14 (App Router), TypeScript e Tailwind CSS. Foco total em arquitetura limpa, performance e animações fluidas.",


    // --- EDUCAÇÃO ---
    "education.title": "Educação & Certificados",
    "education.subtitle": "Aprendizado",

// --- EDUCAÇÃO (DADOS - PT) ---
    "edu.umc.course": "Análise e Desenvolvimento de Sistemas",
    "edu.umc.inst": "Universidade de Mogi das Cruzes",
    "edu.umc.period": "2019 - 2020",
    "edu.umc.desc": "Formação superior completa. Foco em engenharia de software, lógica de programação e gestão de projetos de TI.",

    "edu.obc.course": "Programador Fullstack JavaScript",
    "edu.obc.inst": "OneBitCode",
    "edu.obc.period": "Concluído",
    "edu.obc.desc": "Formação intensiva cobrindo todo o ecossistema JS, do Front ao Back.",

    "edu.origamid.course": "Especialização Front-end (React & TS)",
    "edu.origamid.inst": "Origamid",
    "edu.origamid.period": "Cursando",
    "edu.origamid.desc": "Aprofundamento em interfaces modernas com React, TypeScript, Next.js e Redux. Foco em UI Design e Performance.",

    "edu.impacta.course": "SQL Server 2016",
    "edu.impacta.inst": "Faculdade Impacta",
    "edu.impacta.period": "2019",
    "edu.impacta.desc": "Curso intensivo de 40h focado em modelagem de dados e consultas complexas em bancos relacionais.",


    // --- CONTATO ---
    "contact.title": "Vamos Conversar?",
    "contact.subtitle": "Contato",
    "contact.text": "Procurando iniciar um projeto ou precisa de uma consultoria? Sinta-se à vontade para entrar em contato.",
    "contact.form.name": "Nome",
    "contact.form.email": "Email",
    "contact.form.message": "Mensagem",
    "contact.form.placeholder": "Sobre o que você quer falar?",
    "contact.btn.send": "Enviar Mensagem",
    "contact.btn.sending": "Enviando...",
    "contact.success.title": "Mensagem Enviada!",
    "contact.success.text": "Obrigado pelo contato. Responderei o mais breve possível.",
    "contact.btn.again": "Enviar outra mensagem",

    // --- FOOTER ---
    "footer.developed": "Desenvolvido com",
  },
  en: {
    // --- NAVIGATION ---
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.studies": "Studies",
    "nav.search": "Search...",
    "nav.cta": "Let's talk",
    
    // --- HERO ---
    "hero.badge": "Available for new projects",
    "hero.role": "Front-end Developer",
    "hero.description": "Focus on modern interfaces and stability. Combining technical precision with the robustness of real production experience.",
    "hero.btn.projects": "View Projects",
    "hero.btn.linkedin": "LinkedIn",

    // --- ABOUT ---
    "about.title": "Beyond Code.",
    "about.subtitle": "About Me",
    "about.stats.exp": "Years Exp.",
    "about.stats.projects": "Projects Delivered",
    "about.stats.english": "English",
    "about.journey": "My technical journey is marked by practice: I didn't just study, I solved real problems. At ESC Cursos, I learned firsthand that clean code is what keeps the system stable.",
    "about.focus.start": "Today, I combine this production experience with the power of modern technologies like",
    "about.focus.end": "My focus is creating interfaces that unite technical performance with a fluid user experience.",

    // --- STACK ---
    "stack.title": "Tech Stack",
    "stack.subtitle": "My utility belt",

    // --- EXPERIENCE (STRUCTURE) ---
    "experience.title": "Professional Journey",
    "experience.subtitle": "Career",
    "experience.present": "Present",

    // --- EXPERIENCE (DATA - ESC) ---
    "exp.esc.role": "Front-end Developer & Support",
    "exp.esc.date": "Mar 2023 - Present",
    "exp.esc.desc": "Acting as a long-term technical partner. What started as one-off projects evolved into full management of digital infrastructure.",
    "exp.esc.ach.1": "Development of responsive interfaces (HTML, CSS, JS, Bootstrap).",
    "exp.esc.ach.2": "Stability monitoring and performance in SaaS.",
    "exp.esc.ach.3": "Resolution of integration conflicts and payment gateways.",
    "exp.esc.ach.4": "UX improvements and AI automations.",
    "exp.esc.ach.5": "Deploy management and server migration.",

    // --- EXPERIENCE (DATA - FREELANCE) ---
    "exp.freela.role": "Web Developer (Freelance)",
    "exp.freela.date": "2022 - 2023",
    "exp.freela.desc": "Focused on delivering fast solutions for small businesses, transforming requirements into high-conversion pages.",
    "exp.freela.ach.1": "Creation of Landing Pages for Dental Clinic.",
    "exp.freela.ach.2": "Institutional Website for Metallurgical Industry.",
    "exp.freela.ach.3": "Local SEO optimization and domain setup.",
    "exp.freela.ach.4": "Deliveries focused on performance (Green Lighthouse).",

    // --- PROJECTS ---
    "projects.title": "Selected Projects",
    "projects.subtitle": "Portfolio",
    "projects.btn.code": "View Code",
    "projects.btn.demo": "Live Demo",

    // --- REAL PROJECTS (EN) ---
    "proj.galactic.title": "Galactic Luna 🚀",
    "proj.galactic.desc": "Interactive space-themed Landing Page. Technical highlight is a Chatbot developed with manual security validations against XSS and SQL Injection, plus an automated build pipeline with Gulp.",
    
    "proj.esc.title": "ESC Courses Portal",
    "proj.esc.desc": "Complete front-end infrastructure focused on performance. Implemented a Gulp build system for 'Cache Busting', asset minification, and automated production deployment.",
    
    "proj.v2.title": "Professional Portfolio V2",
    "proj.v2.desc": "The site you are browsing now! Developed with the most modern stack: Next.js 14 (App Router), TypeScript, and Tailwind CSS. Total focus on clean architecture, performance, and fluid animations.",

    

    // --- EDUCATION ---
    "education.title": "Education & Certifications",
    "education.subtitle": "Learning",

// --- EDUCATION (DATA - EN) ---
    "edu.umc.course": "Analysis and Systems Development",
    "edu.umc.inst": "University of Mogi das Cruzes",
    "edu.umc.period": "2019 - 2020",
    "edu.umc.desc": "Complete higher education. Focus on software engineering, programming logic, and IT project management.",

    "edu.obc.course": "Fullstack JavaScript Programmer",
    "edu.obc.inst": "OneBitCode",
    "edu.obc.period": "Completed",
    "edu.obc.desc": "Intensive training covering the entire JS ecosystem, from Front to Back.",

    "edu.origamid.course": "Front-end Specialization (React & TS)",
    "edu.origamid.inst": "Origamid",
    "edu.origamid.period": "In Progress",
    "edu.origamid.desc": "Deep dive into modern interfaces with React, TypeScript, Next.js, and Redux. Focus on UI Design and Performance.",

    "edu.impacta.course": "SQL Server 2016",
    "edu.impacta.inst": "Faculdade Impacta",
    "edu.impacta.period": "2019",
    "edu.impacta.desc": "Intensive 40h course focused on data modeling and complex queries in relational databases.",


    // --- CONTACT ---
    "contact.title": "Let's Talk?",
    "contact.subtitle": "Contact",
    "contact.text": "Looking to start a project or need consultancy? Feel free to reach out.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.placeholder": "What do you want to talk about?",
    "contact.btn.send": "Send Message",
    "contact.btn.sending": "Sending...",
    "contact.success.title": "Message Sent!",
    "contact.success.text": "Thanks for contacting. I'll reply as soon as possible.",
    "contact.btn.again": "Send another message",

    // --- FOOTER ---
    "footer.developed": "Developed with",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}