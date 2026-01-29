"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Star, Code2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

// --- Variantes de Animação ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const tagsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const tagItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// --- HELPER COMPLETO: Mapeando TODAS as tecnologias ---
const getTechIcon = (name: string) => {
  const normalized = name.toLowerCase().trim();

  const icons: Record<string, string> = {
    "next.js 14": "https://cdn.simpleicons.org/nextdotjs/white",
    "next.js": "https://cdn.simpleicons.org/nextdotjs/white",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    typescript: "https://cdn.simpleicons.org/typescript/3178C6",
    tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
    nextauth: "https://cdn.simpleicons.org/auth0/EB5424",
    "server actions": "https://cdn.simpleicons.org/nodedotjs/339933",
    javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    gulp: "https://cdn.simpleicons.org/gulp/CF4647",
    css3: "https://cdn.simpleicons.org/css3/1572B6",
    html5: "https://cdn.simpleicons.org/html5/E34F26",
    bootstrap: "https://cdn.simpleicons.org/bootstrap/7952B3",
    sass: "https://cdn.simpleicons.org/sass/CC6699",
    saas: "https://cdn.simpleicons.org/sass/CC6699",
    "framer motion": "https://cdn.simpleicons.org/framer/0055FF",
    security: "https://cdn.simpleicons.org/securityscorecard/white",
    "node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
  };

  return icons[normalized] || null;
};

interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="py-24 bg-background overflow-hidden relative"
    >
      {/* --- GRID PATTERN NO FUNDO (Adicionado) --- */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          // Grid de 50x50px com linhas sutis
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      >
        {/* Máscara para suavizar as bordas e focar no centro */}
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          subtitle={t("projects.subtitle")}
          title={t("projects.title")}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 items-stretch"
        >
          {data.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group flex flex-col bg-gradient-to-b from-surface/80 to-surface/40 backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative ${
                project.featured
                  ? "md:col-span-2 lg:col-span-3 border-primary/30 ring-1 ring-primary/10"
                  : "col-span-1 border-white/5 hover:border-primary/30"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Área da Imagem */}
              <div
                className={`relative overflow-hidden shrink-0 ${
                  project.featured ? "h-64 md:h-[500px]" : "h-56"
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-primary/90 backdrop-blur-md text-background text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary/20 animate-in fade-in zoom-in duration-500">
                    <Star size={12} fill="currentColor" /> DESTAQUE
                  </div>
                )}

                <img
                  src={project.imageUrl}
                  alt={t(project.title)}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    project.featured ? "object-top" : "object-center"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90" />
              </div>

              {/* Área de Conteúdo */}
              <div className="relative flex flex-col flex-1 p-6 md:p-8 -mt-12">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className={`font-display font-bold text-white group-hover:text-primary transition-colors ${
                        project.featured ? "text-2xl md:text-4xl" : "text-xl"
                      }`}
                    >
                      {t(project.title)}
                    </h3>
                    {!project.featured && (
                      <Code2
                        className="text-white/10 group-hover:text-primary/20 transition-colors"
                        size={24}
                      />
                    )}
                  </div>

                  <p
                    className={`text-secondary/80 leading-relaxed ${
                      project.featured
                        ? "text-base md:text-lg max-w-3xl"
                        : "text-sm line-clamp-3"
                    }`}
                  >
                    {t(project.description)}
                  </p>
                </div>

                {/* Tags com ÍCONES */}
                <motion.div
                  variants={tagsContainerVariants}
                  className="flex flex-wrap gap-2 mb-8 mt-auto"
                >
                  {project.tags.map((tagName) => {
                    const iconUrl = getTechIcon(tagName);
                    return (
                      <motion.span
                        key={tagName}
                        variants={tagItemVariants}
                        className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full bg-white/5 text-secondary border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-colors cursor-default"
                      >
                        {iconUrl && (
                          <img
                            src={iconUrl}
                            alt=""
                            className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                        {tagName}
                      </motion.span>
                    );
                  })}
                </motion.div>

                {/* Botões */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-background border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all text-xs font-bold uppercase tracking-wide"
                  >
                    <Github size={18} className="text-secondary" />
                    {t("projects.btn.code")}
                  </a>

                  {project.demoUrl !== "#" ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-background font-bold hover:bg-primary/90 transition-all text-xs uppercase tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                      {t("projects.btn.demo")}
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-secondary/50 text-xs font-bold uppercase tracking-wide cursor-not-allowed border border-white/5">
                      Em breve
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
