"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import type { TechItem } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext"; // <--- 1. Import

interface TechStackProps {
  data: TechItem[];
}

export function TechStack({ data }: TechStackProps) {
  const { t, language } = useLanguage(); // <--- 2. Hook + Idioma atual
  
  // Mantemos as chaves originais para o FILTRO funcionar (banco de dados)
  const categories = ["Frontend", "Backend", "Ferramentas"] as const;

  // 3. Função auxiliar para traduzir APENAS o nome que aparece na tela
  const getCategoryLabel = (category: string) => {
    if (language === "en") {
      if (category === "Ferramentas") return "Tools";
      // Frontend e Backend geralmente são iguais em inglês, mas se quiser mudar, adicione aqui
    }
    return category;
  };

  return (
    <section id="tech" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* 4. Títulos via Dicionário */}
        <SectionTitle 
           subtitle={t("stack.subtitle")} 
           title={t("stack.title")} 
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              
              {/* 5. Título da Categoria (Usando a função de tradução visual) */}
              <h3 className="text-xl font-display font-bold text-white border-l-4 border-primary pl-4">
                {getCategoryLabel(category)}
              </h3>
              
              {/* Grid de Ícones */}
              <div className="grid grid-cols-1 gap-3">
                {data
                  .filter((item) => item.category === category) // <--- O Filtro usa o nome original (PT)
                  .map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex items-center p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 group"
                    >
                      {/* Área do Ícone */}
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-white/5 mr-4 group-hover:scale-110 transition-transform">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-6 h-6"
                        />
                      </div>

                      {/* Nome da Tecnologia */}
                      <span className="text-secondary group-hover:text-white font-medium transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}