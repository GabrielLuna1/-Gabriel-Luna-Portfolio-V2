"use client";

import { Code2, Globe, Database } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const techTagStyle =
    "inline-block mx-1 px-2.5 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15 text-xs md:text-sm font-bold whitespace-nowrap transform translate-y-px hover:bg-primary/15 transition-colors cursor-default";

  const stats = [
    { label: t("about.stats.exp"), value: "4+", icon: Code2 },
    { label: t("about.stats.projects"), value: "10+", icon: Database },
    { label: t("about.stats.english"), value: "B1", icon: Globe },
  ];

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Background mesh for visual differentiation */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh" />
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-cross">
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,black_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          number="01"
          subtitle={t("about.subtitle")}
          title={t("about.title")}
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          {/* Text Column */}
          <Reveal direction="left" delay={0.1}>
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-secondary text-body-lg leading-relaxed border-l-2 border-primary/30 pl-5 italic glass-elevated py-4 pr-4 rounded-r-xl">
                  &quot;{t("about.journey")}&quot;
                </p>

                <p className="text-secondary text-body-lg leading-relaxed mt-6">
                  {t("about.focus.start")}
                  <span className={techTagStyle}>Next.js 14</span>
                  <span className={techTagStyle}>Node.js</span>
                  <span className={techTagStyle}>MongoDB</span>
                  <span className={techTagStyle}>TypeScript</span>.{" "}
                  {t("about.focus.end")}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://linkedin.com/in/gabriel-luna-14b00821b"
                  target="_blank"
                  className="text-primary font-bold hover:underline flex items-center gap-2 text-sm group"
                >
                  Vamos conectar no LinkedIn{" "}
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Stats Column */}
          <Reveal direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} variant="glass" className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="p-3 bg-primary/8 rounded-xl text-primary mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={24} />
                  </div>
                  <span className="text-3xl font-display font-bold text-white mb-1.5 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-secondary uppercase tracking-widest text-center font-mono leading-tight">
                    {stat.label}
                  </span>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
