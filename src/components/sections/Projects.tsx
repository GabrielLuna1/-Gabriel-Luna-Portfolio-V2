"use client";

import { Github, ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectsProps {
  data: any[];
}

export function Projects({ data }: ProjectsProps) {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Títulos */}
        <SectionTitle 
          subtitle={t("projects.subtitle")} 
          title={t("projects.title")} 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {data.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-surface/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              
              {/* Imagem do Projeto */}
              <div className="relative aspect-video overflow-hidden bg-black/50 border-b border-white/5">
                 <img 
                   src={project.image} 
                   alt={t(project.title)} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 />
                 {/* Efeito de overlay suave */}
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col flex-1 p-6">
                
                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {t(project.title)}
                </h3>
                
                {/* Descrição */}
                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {t(project.description)}
                </p>

                {/* Tecnologias (Tags) */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                   {project.tech?.map((techName: string) => (
                     <span key={techName} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-secondary/70 border border-white/5">
                       {techName}
                     </span>
                   ))}
                </div>

                {/* BOTÕES CORRIGIDOS (Usando <a> direto para garantir o link externo) */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-medium"
                  >
                    <Github size={16} /> 
                    {t("projects.btn.code")}
                  </a>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-all text-xs shadow-[0_0_10px_rgba(var(--primary),0.2)] hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                  >
                    {t("projects.btn.demo")}
                    <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}