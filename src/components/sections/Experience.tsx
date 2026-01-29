"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { ExperienceItem } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperienceProps {
  data: ExperienceItem[];
}

export function Experience({ data }: ExperienceProps) {
  const { t } = useLanguage();

  // Variáveis de animação para entrada suave
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Um item aparece após o outro
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle={t("experience.subtitle")}
          title={t("experience.title")}
        />

        <div className="mt-16 relative max-w-4xl mx-auto">
          {/* Linha da Timeline (Com gradiente para desaparecer no final) */}
          <div className="absolute left-4 md:left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {data.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative pl-12 md:pl-16"
              >
                {/* Ponto da Timeline (Com efeito de Pulse) */}
                <div className="absolute left-[10px] md:left-[-6px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Card da Experiência */}
                <div className="group bg-surface/30 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:bg-surface/50 transition-all duration-300 hover:-translate-y-1">
                  {/* Cabeçalho: Cargo e Empresa */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t(item.role)}
                      </h3>
                      <p className="text-lg text-secondary font-medium flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" />
                        {item.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-secondary whitespace-nowrap font-mono">
                      <Calendar size={14} className="text-primary/70" />
                      {t(item.period)}
                    </div>
                  </div>

                  {/* Descrição Geral */}
                  <p className="text-secondary/80 text-base md:text-lg leading-relaxed mb-6">
                    {t(item.description)}
                  </p>

                  {/* Lista de Conquistas/Responsabilidades */}
                  <ul className="grid gap-3">
                    {item.achievements.map((achievementKey, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-secondary group-hover:text-white/90 transition-colors"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-primary/60 shrink-0 group-hover:text-primary transition-colors"
                        />
                        <span className="leading-relaxed text-sm md:text-base">
                          {t(achievementKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
