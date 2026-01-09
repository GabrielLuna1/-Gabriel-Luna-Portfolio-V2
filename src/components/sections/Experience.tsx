"use client";

import { Briefcase, Calendar } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { ExperienceItem } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperienceProps {
  data: ExperienceItem[];
}

export function Experience({ data }: ExperienceProps) {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <SectionTitle 
          subtitle={t("experience.subtitle")} 
          title={t("experience.title")} 
        />

        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-12">
            {data.map((item) => (
              <div key={item.id} className="relative pl-16">
                
                <div className="absolute left-[10px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] z-10" />

                <div className="bg-surface/30 border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {t(item.role)} {/* <--- AQUI: Adicionei o t() */}
                      </h3>
                      <p className="text-lg text-primary font-medium flex items-center gap-2">
                        <Briefcase size={16} /> {item.company}
                      </p>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-secondary whitespace-nowrap">
                      <Calendar size={14} />
                      {t(item.period)} {/* <--- AQUI: Adicionei o t() */}
                    </div>
                  </div>

                  <p className="text-secondary text-lg leading-relaxed mb-6">
                    {t(item.description)} {/* <--- AQUI: Adicionei o t() */}
                  </p>

                  <ul className="space-y-3">
                    {item.achievements.map((achievementKey, index) => (
                      <li key={index} className="flex items-start gap-3 text-secondary/80">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        <span className="leading-relaxed">
                            {t(achievementKey)} {/* <--- AQUI: Adicionei o t() */}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}