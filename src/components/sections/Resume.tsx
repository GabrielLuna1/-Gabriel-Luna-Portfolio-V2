"use client";

import { FileText, FileCode, Download, Eye } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export function Resume() {
  const { t } = useLanguage();

  const downloads = [
    {
      label: "PDF",
      icon: FileText,
      href: "/curriculo/CV Gabriel Luna - Full Stack.pdf",
      description: t("resume.pdf.desc"),
    },
    {
      label: "DOCX",
      icon: FileCode,
      href: "/curriculo/CV_Gabriel_Luna_FullStack.docx",
      description: t("resume.docx.desc"),
    },
  ];

  return (
    <section id="resume" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          number="06"
          subtitle={t("resume.subtitle")}
          title={t("resume.title")}
        />

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <Reveal direction="up" delay={0.1}>
            <p className="text-secondary text-body-lg leading-relaxed mb-10">
              {t("resume.text")}
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 w-full">
            {downloads.map((item, index) => (
              <Reveal key={item.label} direction="up" delay={0.15 + index * 0.1}>
                <a
                  href={item.href}
                  download
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl card-premium hover:border-primary/20 transition-all min-w-[180px]"
                >
                  <div className="p-3 rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <div className="text-center">
                    <span className="text-white font-display font-bold text-lg block">
                      {item.label}
                    </span>
                    <span className="text-secondary text-xs font-mono">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    <span>{t("resume.btn.download")}</span>
                    <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.4}>
            <a
              href="/curriculo/CV Gabriel Luna - Full Stack.html"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-sm font-bold group"
            >
              <Eye size={16} />
              {t("resume.btn.preview")}
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
