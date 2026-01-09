"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t("about.stats.exp"), value: "+2" },
    { label: t("about.stats.projects"), value: "+5" },
    { label: t("about.stats.english"), value: "B1" },
  ];

  return (
    <section id="about" className="py-24 bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Título e Stats */}
          <div>
            <SectionTitle 
              subtitle={t("about.subtitle")} 
              title={t("about.title")} 
            />
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-3xl font-display font-bold text-primary">{stat.value}</h4>
                  <p className="text-xs text-secondary uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Texto Focado em Valor e Tecnologia */}
          <div className="space-y-6 text-secondary leading-relaxed text-lg">
            <p>
              {t("about.journey")}
            </p>
            <p>
              {t("about.focus.start")} 
              <strong className="text-primary"> Next.js, React e TypeScript</strong>. 
              {t("about.focus.end")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}