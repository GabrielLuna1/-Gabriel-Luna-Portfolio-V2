"use client";

import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext"; // <--- Import do tradutor

// Se precisar ajustar a tipagem, importe ou defina aqui
interface EducationProps {
  data: any[]; 
}

export function Education({ data }: EducationProps) {
  const { t } = useLanguage(); // <--- Hook

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Títulos Traduzidos */}
        <SectionTitle 
          subtitle={t("education.subtitle")} 
          title={t("education.title")} 
        />

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="group bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                
                {/* Cabeçalho do Card */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-secondary whitespace-nowrap">
                    <Calendar size={12} />
                    {t(item.period)}
                  </div>
                </div>

                {/* Títulos e Instituição */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {t(item.course)}
                </h3>
                <p className="text-sm font-medium text-secondary/80 flex items-center gap-2 mb-4">
                  <BookOpen size={14} />
                  {t(item.institution)}
                </p>

                {/* Descrição */}
                <p className="text-secondary text-sm leading-relaxed mt-auto border-t border-white/5 pt-4">
                  {t(item.description)}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}