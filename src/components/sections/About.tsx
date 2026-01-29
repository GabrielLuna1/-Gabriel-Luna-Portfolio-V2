"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Globe, Rocket } from "lucide-react"; // Ícones para os stats

export function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t("about.stats.exp"), value: "2+", icon: <Code2 size={20} /> },
    {
      label: t("about.stats.projects"),
      value: "5+",
      icon: <Rocket size={20} />,
    },
    { label: t("about.stats.english"), value: "B1", icon: <Globe size={20} /> },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-surface/30 border-y border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Lado Esquerdo: Título e Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtitle={t("about.subtitle")}
              title={t("about.title")}
            />

            {/* Grid de Stats com Cards */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-background border border-white/5 p-4 rounded-2xl text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-center mb-2 text-primary/70 group-hover:text-primary transition-colors">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] lg:text-xs text-secondary uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito: Texto com Elementos Visuais */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-secondary leading-relaxed text-lg relative"
          >
            {/* Decoração de Fundo (Aspas ou Elemento Gráfico) */}
            <div className="absolute -top-10 -left-10 text-[120px] text-primary/5 font-serif font-bold leading-none select-none z-0">
              &ldquo;
            </div>

            <div className="relative z-10 space-y-6">
              <p className="border-l-2 border-primary/20 pl-4">
                {t("about.journey")}
              </p>

              <p>
                {t("about.focus.start")}
                <span className="inline-block px-2 py-0.5 mx-1 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                  Next.js 14
                </span>
                <span className="inline-block px-2 py-0.5 mx-1 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                  Node.js
                </span>
                <span className="inline-block px-2 py-0.5 mx-1 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                  MongoDB
                </span>
                e
                <span className="inline-block px-2 py-0.5 mx-1 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                  TypeScript
                </span>
                .{t("about.focus.end")}
              </p>
            </div>

            {/* Botão sutil de "Saiba mais" ou Link para LinkedIn (Opcional, mas bom para engajamento) */}
            <div className="pt-4">
              <a
                href="https://linkedin.com/in/gabriel-luna-14b00821b"
                target="_blank"
                className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                Vamos conectar no LinkedIn{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
