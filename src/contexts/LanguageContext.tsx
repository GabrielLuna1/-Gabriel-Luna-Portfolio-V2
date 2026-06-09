"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  pt: {
    // --- NAVEGAÇÃO ---
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.stack": "Tech",
    "nav.career": "Carreira",
    "nav.projects": "Projetos",
    "nav.studies": "Educação",
    "nav.resume": "Currículo",
    "nav.search": "Pesquisar (Ctrl+K)",
    "nav.cta": "Vamos conversar",

    // --- HERO ---
    "hero.badge": "Disponível para novos desafios",
    "hero.role": "Software Engineer",
    "hero.description": "Transformo complexidade de negócios em software elegante. Foco absoluto em arquiteturas escaláveis, automação inteligente e interfaces de altíssima performance.",
    "hero.btn.projects": "Explorar Projetos",
    "hero.btn.linkedin": "Conectar no LinkedIn",

    // --- SOBRE ---
    "about.title": "Além do Código",
    "about.subtitle": "Sobre Mim",
    "about.stats.exp": "Anos de Exp.",
    "about.stats.projects": "Sistemas em Produção",
    "about.stats.english": "Inglês (Técnico)",
    "about.journey": "Minha trajetória é definida pela prática e resolução de problemas reais. Aprendi construindo sistemas de ponta a ponta, onde estabilidade, segurança e performance não são opcionais — são a fundação.",
    "about.focus.start": "Hoje, concentro minha expertise no ecossistema de alto desempenho, utilizando tecnologias como",
    "about.focus.end": "para entregar plataformas que os usuários adoram e os negócios confiam.",

    // --- STACK ---
    "stack.title": "Core Stack",
    "stack.subtitle": "Tecnologias & Ferramentas",

    // --- EXPERIÊNCIA ---
    "experience.title": "Trajetória Profissional",
    "experience.subtitle": "Carreira",
    "experience.present": "Presente",

    "exp.esc.role": "Front-end Developer & Suporte",
    "exp.esc.date": "Mar 2023 - Atualmente",
    "exp.esc.desc": "Atuo como parceiro técnico de longo prazo. O que iniciou como projetos pontuais evoluiu para a gestão completa da infraestrutura digital.",
    "exp.esc.ach.1": "Desenvolvimento de interfaces responsivas (HTML, CSS, JS, Bootstrap).",
    "exp.esc.ach.2": "Monitoramento de estabilidade e performance em SaaS.",
    "exp.esc.ach.3": "Resolução de conflitos de integração e gateways de pagamento.",
    "exp.esc.ach.4": "Melhorias de UX e automações com IA.",
    "exp.esc.ach.5": "Gestão de deploys e migração de servidores.",

    "exp.freela.role": "Software Developer (Freelance)",
    "exp.freela.date": "2022 - 2023",
    "exp.freela.desc": "Desenvolvimento de soluções sob medida para impulsionar a presença digital e conversão de negócios locais.",
    "exp.freela.ach.1": "Engenharia de Landing Pages de alta conversão para o setor de saúde.",
    "exp.freela.ach.2": "Desenvolvimento de plataformas institucionais corporativas.",
    "exp.freela.ach.3": "Otimização técnica de SEO e gestão completa de DNS/Domínios.",
    "exp.freela.ach.4": "Foco estrito em métricas de performance (Lighthouse 100%).",

    // --- PROJETOS ---
    "projects.title": "Projetos em Destaque",
    "projects.subtitle": "Portfólio",
    "projects.btn.code": "Repositório",
    "projects.btn.demo": "Ver Aplicação",

    "proj.jobhunter.title": "WorkHunter",
    "proj.jobhunter.desc": "Plataforma inteligente de busca e gestão de vagas tech. Integração com 3 portais brasileiros, match score por IA local (Ollama/LM Studio), pipeline kanban, analytics de mercado e currículo inteligente.",
    
    "proj.stockmaster.title": "StockMaster Pro",
    "proj.stockmaster.desc": "ERP Enterprise-grade para gestão logística. Arquitetura serverless com Next.js, controle de acesso refinado (RBAC), auditoria imutável de logs e relatórios financeiros dinâmicos.",

    "proj.galactic.title": "Galactic Luna",
    "proj.galactic.desc": "Experiência web interativa espacial. Incorpora um Chatbot customizado com defesas estritas contra XSS/SQL Injection e pipeline de build otimizado com Gulp.",

    "proj.esc.title": "ESC Cursos Portal",
    "proj.esc.desc": "Infraestrutura front-end projetada para carregamento instantâneo. Sistema de build automatizado com minificação de assets e cache busting estratégico.",

    "proj.v2.title": "Portfólio Profissional V2",
    "proj.v2.desc": "Arquitetura limpa construída com Next.js 14 App Router, TypeScript e Framer Motion. Apresenta design system global, dark mode nativo e suporte multilíngue dinâmico.",

    // --- EDUCAÇÃO ---
    "education.title": "Formação & Certificações",
    "education.subtitle": "Acadêmico",

    "edu.umc.course": "Análise e Desenvolvimento de Sistemas",
    "edu.umc.inst": "Universidade de Mogi das Cruzes",
    "edu.umc.period": "2019 - 2020",
    "edu.umc.desc": "Fundamentos de engenharia de software, estrutura de dados, modelagem de bancos relacionais e ciclo de vida de aplicações.",

    "edu.obc.course": "Desenvolvimento Full Stack",
    "edu.obc.inst": "OneBitCode",
    "edu.obc.period": "Concluído",
    "edu.obc.desc": "Bootcamp intensivo focado no ecossistema JavaScript moderno (Node.js, React) e integração de APIs RESTful.",

    "edu.origamid.course": "Especialização React & TypeScript",
    "edu.origamid.inst": "Origamid",
    "edu.origamid.period": "Em Andamento",
    "edu.origamid.desc": "Aprofundamento em gestão de estado, design de componentes reutilizáveis, UI/UX e arquitetura front-end de alta escala.",

    "edu.impacta.course": "SQL Server Analytics",
    "edu.impacta.inst": "Faculdade Impacta",
    "edu.impacta.period": "2019",
    "edu.impacta.desc": "Especialização em arquitetura de dados relacionais, queries avançadas de performance e normalização.",

    // --- CURRÍCULO ---
    "resume.title": "Meu Currículo",
    "resume.subtitle": "Download",
    "resume.text": "Disponível para download nos formatos PDF e DOCX. Escolha o formato ideal para você.",
    "resume.btn.download": "Baixar",
    "resume.btn.preview": "Visualizar Online",
    "resume.pdf.desc": "Formato universal",
    "resume.docx.desc": "Editável (Word)",

    // --- CONTATO ---
    "contact.title": "Vamos Construir Algo?",
    "contact.subtitle": "Contato",
    "contact.text": "Seja para discutir uma oportunidade de trabalho, projeto inovador ou consultoria técnica, minha caixa de entrada está aberta.",
    "contact.form.name": "Seu Nome",
    "contact.form.email": "Seu Email",
    "contact.form.message": "Sua Mensagem",
    "contact.form.placeholder": "Como posso ajudar no seu próximo projeto?",
    "contact.btn.send": "Enviar Mensagem",
    "contact.btn.sending": "Enviando de forma segura...",
    "contact.success.title": "Recebido com sucesso!",
    "contact.success.text": "Agradeço o contato. Retornarei o mais rápido possível.",
    "contact.btn.again": "Nova mensagem",

    // --- FOOTER ---
    "footer.description": "Software Engineer dedicado a entregar código limpo, arquiteturas testáveis e experiências digitais memoráveis.",
    "footer.menu": "Navegação",
    "footer.resources": "Links",
    "footer.repos": "Repositórios Abertos",
    "footer.profile": "Perfil GitHub",
    "footer.back_to_top": "Subir",
    "footer.stack": "Construído com:",
  },
  en: {
    // --- NAVIGATION ---
    "nav.home": "Home",
    "nav.about": "About",
    "nav.stack": "Tech",
    "nav.career": "Career",
    "nav.projects": "Projects",
    "nav.studies": "Education",
    "nav.resume": "Resume",
    "nav.search": "Search (Cmd+K)",
    "nav.cta": "Let's Talk",

    // --- HERO ---
    "hero.badge": "Available for new challenges",
    "hero.role": "Software Engineer",
    "hero.description": "I transform business complexity into elegant software. Absolute focus on scalable architectures, intelligent automation, and blazing-fast interfaces.",
    "hero.btn.projects": "Explore Work",
    "hero.btn.linkedin": "Connect on LinkedIn",

    // --- ABOUT ---
    "about.title": "Beyond the Code",
    "about.subtitle": "About Me",
    "about.stats.exp": "Years Exp.",
    "about.stats.projects": "Live Systems",
    "about.stats.english": "English (Technical)",
    "about.journey": "My journey is defined by hands-on problem solving. I learned by building end-to-end systems where stability, security, and performance are not optional features—they are the foundation.",
    "about.focus.start": "Today, I focus my expertise on the high-performance ecosystem, utilizing core technologies like",
    "about.focus.end": "to deliver platforms that users love and businesses trust.",

    // --- STACK ---
    "stack.title": "Core Stack",
    "stack.subtitle": "Technologies & Tools",

    // --- EXPERIENCE ---
    "experience.title": "Professional Journey",
    "experience.subtitle": "Career",
    "experience.present": "Present",

    "exp.esc.role": "Front-end Developer & Support",
    "exp.esc.date": "Mar 2023 - Present",
    "exp.esc.desc": "Long-term technical partner. What started as occasional projects evolved into full digital infrastructure management.",
    "exp.esc.ach.1": "Responsive interface development (HTML, CSS, JS, Bootstrap).",
    "exp.esc.ach.2": "SaaS stability and performance monitoring.",
    "exp.esc.ach.3": "Integration conflict resolution and payment gateways.",
    "exp.esc.ach.4": "UX improvements and AI-driven automations.",
    "exp.esc.ach.5": "Deployment management and server migrations.",

    "exp.freela.role": "Software Developer (Freelance)",
    "exp.freela.date": "2022 - 2023",
    "exp.freela.desc": "Developed custom digital solutions to boost online presence and conversion rates for local businesses.",
    "exp.freela.ach.1": "Architected high-conversion Landing Pages for the healthcare sector.",
    "exp.freela.ach.2": "Developed enterprise-grade institutional platforms.",
    "exp.freela.ach.3": "Technical SEO optimization and complete DNS/Domain management.",
    "exp.freela.ach.4": "Strict adherence to performance benchmarks (Lighthouse 100%).",

    // --- PROJECTS ---
    "projects.title": "Featured Work",
    "projects.subtitle": "Portfolio",
    "projects.btn.code": "Source Code",
    "projects.btn.demo": "Live Application",

    "proj.jobhunter.title": "WorkHunter",
    "proj.jobhunter.desc": "Intelligent job search and management platform for tech roles. Integrates with 3 brazilian portals, AI match scoring via local LLMs (Ollama/LM Studio), kanban pipeline, market analytics, and smart resume management.",

    "proj.stockmaster.title": "StockMaster Pro",
    "proj.stockmaster.desc": "Enterprise-grade ERP for logistics management. Features a Next.js serverless architecture, refined Role-Based Access Control (RBAC), immutable log auditing, and dynamic financial reporting.",

    "proj.galactic.title": "Galactic Luna",
    "proj.galactic.desc": "Interactive space-themed web experience. Incorporates a custom Chatbot with strict defenses against XSS/SQL Injection and an optimized Gulp build pipeline.",

    "proj.esc.title": "ESC Courses Portal",
    "proj.esc.desc": "Front-end infrastructure engineered for instant loading. Automated build system featuring asset minification and strategic cache busting.",

    "proj.v2.title": "Professional Portfolio V2",
    "proj.v2.desc": "Clean architecture built with Next.js 14 App Router, TypeScript, and Framer Motion. Features a global design system, native dark mode, and dynamic multi-language support.",

    // --- EDUCATION ---
    "education.title": "Education & Certifications",
    "education.subtitle": "Academic",

    "edu.umc.course": "Systems Analysis and Development",
    "edu.umc.inst": "University of Mogi das Cruzes",
    "edu.umc.period": "2019 - 2020",
    "edu.umc.desc": "Fundamentals of software engineering, data structures, relational database modeling, and application lifecycles.",

    "edu.obc.course": "Full Stack Development",
    "edu.obc.inst": "OneBitCode",
    "edu.obc.period": "Completed",
    "edu.obc.desc": "Intensive bootcamp focused on the modern JavaScript ecosystem (Node.js, React) and RESTful API integration.",

    "edu.origamid.course": "React & TypeScript Specialization",
    "edu.origamid.inst": "Origamid",
    "edu.origamid.period": "In Progress",
    "edu.origamid.desc": "Deep dive into state management, reusable component design, UI/UX, and large-scale front-end architecture.",

    "edu.impacta.course": "SQL Server Analytics",
    "edu.impacta.inst": "Faculdade Impacta",
    "edu.impacta.period": "2019",
    "edu.impacta.desc": "Specialization in relational data architecture, advanced performance queries, and normalization.",

    // --- RESUME ---
    "resume.title": "My Resume",
    "resume.subtitle": "Download",
    "resume.text": "Available for download in PDF and DOCX formats. Pick the format that suits you best.",
    "resume.btn.download": "Download",
    "resume.btn.preview": "View Online",
    "resume.pdf.desc": "Universal format",
    "resume.docx.desc": "Editable (Word)",

    // --- CONTACT ---
    "contact.title": "Let's Build Something?",
    "contact.subtitle": "Contact",
    "contact.text": "Whether you want to discuss a job opportunity, an innovative project, or technical consulting, my inbox is open.",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.placeholder": "How can I help with your next project?",
    "contact.btn.send": "Send Message",
    "contact.btn.sending": "Sending securely...",
    "contact.success.title": "Successfully Received!",
    "contact.success.text": "Thank you for reaching out. I will get back to you as soon as possible.",
    "contact.btn.again": "Send another message",

    // --- FOOTER ---
    "footer.description": "Software Engineer dedicated to shipping clean code, testable architectures, and memorable digital experiences.",
    "footer.menu": "Navigation",
    "footer.resources": "Links",
    "footer.repos": "Open Repositories",
    "footer.profile": "GitHub Profile",
    "footer.back_to_top": "Scroll Up",
    "footer.stack": "Built with:",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "pt" || saved === "en") {
      setLanguage(saved);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("lang", language);
    }
  }, [language, hydrated]);

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
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
