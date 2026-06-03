"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, Server, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechBadge } from "@/components/ui/TechBadge";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";

const projects = [
  {
    id: "work-hunter",
    title: "WorkPlus",
    subtitle: "AI-Powered Job Search Platform",
    descriptionKey: "jh.overview.desc",
    icon: Brain,
    gradient: "from-primary/20 via-primary-light/5 to-transparent",
    tags: ["FastAPI", "MongoDB", "Next.js 15", "LM Studio"],
  },
  {
    id: "stockmaster",
    title: "StockMaster Pro",
    subtitle: "Enterprise Inventory Management",
    descriptionKey: "sm.overview.desc", // We will add translations
    icon: Server,
    gradient: "from-accent-cool/20 via-accent-cool/5 to-transparent",
    tags: ["Next.js 14", "MongoDB", "NextAuth", "Tailwind CSS"],
  }
];

export default function ProjetosPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-background">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh opacity-70" />

      <ParallaxOrb color="bg-primary/10" size={500} top="-10%" right="-10%" blur={140} yOffset={150} />
      <ParallaxOrb color="bg-accent-cool/5" size={400} bottom="10%" left="-10%" blur={120} yOffset={-100} />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <Link href="/" className="inline-flex items-center text-sm font-medium text-secondary hover:text-white transition-colors mb-8 group">
            <div className="p-1.5 rounded-lg bg-surface-elevated/40 border border-white/[0.04] group-hover:bg-white/10 group-hover:border-white/15 transition-colors mr-3">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            {t("nav.home") || "Voltar ao Início"}
          </Link>
          <h1 className="text-display-lg md:text-[5.5rem] font-display font-black text-white tracking-tighter mb-6 leading-none">
            Meus <br />
            <span className="gradient-text">Projetos.</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed border-l-2 border-primary/30 pl-5">
            Casos de estudo detalhados sobre as soluções arquiteturais e desafios técnicos superados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Link href={`/projetos/${project.id}`} key={project.id} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-full flex flex-col rounded-3xl p-8 overflow-hidden card-premium border border-white/[0.04] hover:border-primary/15 transition-all duration-500 elevation-2 hover:elevation-4"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 shadow-elevated">
                        <Icon className="text-white group-hover:text-primary transition-colors" size={28} />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center border border-white/5 group-hover:bg-primary group-hover:text-white text-secondary transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                        <ArrowRight size={14} className="-rotate-45" />
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">{project.title}</h2>
                    <p className="text-sm text-primary font-bold tracking-wide uppercase mb-4">{project.subtitle}</p>
                    
                    <p className="text-secondary text-body leading-relaxed mb-8 flex-grow">
                      {project.id === "work-hunter" 
                        ? "Plataforma inteligente de hunting que unifica scraping multi-fonte, match por IA, auto-apply e analytics em um só lugar."
                        : "Mini-ERP completo para gestão logística com MVC, controle de acesso, auditoria, relatórios e dashboard em tempo real."}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tags.map(tag => (
                        <TechBadge key={tag} name={tag} />
                      ))}
                    </div>

                    <div className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors mt-auto pt-4 border-t border-white/[0.04]">
                      <BookOpen size={16} className="mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                      Ler Estudo de Caso
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
