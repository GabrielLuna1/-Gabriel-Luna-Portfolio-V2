"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Database } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  // Estilo reutilizável para as Tech Tags (Otimizado para Mobile)
  const techTagStyle =
    "inline-block mx-1 px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm font-bold whitespace-nowrap align-baseline transform translate-y-px hover:bg-primary/20 transition-colors cursor-default";

  const stats = [
    { label: t("about.stats.exp"), value: "+2", icon: Code2 },
    { label: t("about.stats.projects"), value: "+5", icon: Database },
    { label: t("about.stats.english"), value: "B1", icon: Globe },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* --- 1. GRID PATTERN (Restaurado) --- */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        {/* Máscara para suavizar nas bordas */}
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,black_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle subtitle={t("about.subtitle")} title={t("about.title")} />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Coluna 1: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-secondary text-lg leading-relaxed border-l-4 border-primary/50 pl-6 italic bg-surface/30 py-4 rounded-r-lg backdrop-blur-sm">
                &quot;{t("about.journey")}&quot;
              </p>

              {/* Texto com correção para Mobile (leading-loose) */}
              <p className="text-secondary text-lg leading-loose md:leading-relaxed mt-6">
                {t("about.focus.start")}
                {/* Tags que não quebram linha */}
                <span className={techTagStyle}>Next.js 14</span>
                <span className={techTagStyle}>Node.js</span>
                <span className={techTagStyle}>MongoDB</span>e
                <span className={techTagStyle}>TypeScript</span>.{" "}
                {t("about.focus.end")}
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/gabriel-luna-14b00821b"
                target="_blank"
                className="text-primary font-bold hover:underline flex items-center gap-2"
              >
                Vamos conectar no LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* Coluna 2: Stats / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-surface/80 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary/30 transition-colors group shadow-lg"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <span className="text-3xl font-display font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-secondary uppercase tracking-wider text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
