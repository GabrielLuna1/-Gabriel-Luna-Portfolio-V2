"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, Server } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: "work-hunter",
    title: "WorkHunter",
    subtitle: "AI-Powered Job Hunting Platform",
    descriptionKey: "jh.overview.desc", // We will add translations
    icon: Brain,
    gradient: "from-blue-600/20 via-primary/10 to-transparent",
    tags: ["FastAPI", "MongoDB", "Next.js 15", "Playwright", "LM Studio"],
  },
  {
    id: "stockmaster",
    title: "StockMaster Pro",
    subtitle: "Enterprise Inventory Management",
    descriptionKey: "sm.overview.desc", // We will add translations
    icon: Server,
    gradient: "from-primary/20 via-blue-500/10 to-transparent",
    tags: ["Next.js 14", "MongoDB", "NextAuth", "Tailwind CSS"],
  }
];

export default function ProjetosPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2" size={20} />
            {t("nav.home") || "Voltar ao Início"}
          </Link>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Meus <span className="text-primary">Projetos</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Casos de estudo detalhados sobre as soluções arquiteturais e desafios técnicos superados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Link href={`/projetos/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-full bg-surface border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-primary/30 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-primary" size={28} />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-sm text-primary font-medium mb-4">{project.subtitle}</p>
                    
                    <p className="text-secondary mb-8 flex-grow">
                      {project.id === "work-hunter" 
                        ? "Plataforma inteligente de hunting que unifica scraping multi-fonte, match por IA, auto-apply e analytics em um só lugar."
                        : "Mini-ERP completo para gestão logística com MVC, controle de acesso, auditoria, relatórios e dashboard em tempo real."}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center text-primary group-hover:text-primary-bright font-medium mt-auto">
                      Ver Estudo de Caso
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
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
