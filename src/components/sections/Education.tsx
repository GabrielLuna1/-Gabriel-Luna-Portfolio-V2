"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import type { EducationItem } from "@/data/types"; // Importando o tipo correto

interface EducationProps {
  data: EducationItem[];
}

export function Education({ data }: EducationProps) {
  const { t } = useLanguage();

  return (
    <section
      id="education"
      className="py-24 bg-surface/30 border-y border-white/5"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle={t("education.subtitle")}
          title={t("education.title")}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col h-full bg-background border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                item.type === "degree"
                  ? "border-primary/20 hover:border-primary/50" // Destaque para Graduação
                  : "border-white/5 hover:border-white/20"
              }`}
            >
              {/* Efeito de Glow no Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Cabeçalho */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      item.type === "degree"
                        ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background"
                        : "bg-white/5 text-secondary group-hover:text-white"
                    }`}
                  >
                    {item.type === "degree" ? (
                      <GraduationCap size={24} />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs text-secondary font-mono">
                    <Calendar size={12} />
                    {t(item.period)}
                  </div>
                </div>

                {/* Conteúdo Principal */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {t(item.course)}
                </h3>

                <div className="flex items-center gap-2 text-sm font-medium text-secondary/80 mb-6">
                  <BookOpen size={14} />
                  {t(item.institution)}
                </div>

                {/* Descrição */}
                <p className="text-secondary text-sm leading-relaxed mt-auto border-t border-white/5 pt-4">
                  {t(item.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
