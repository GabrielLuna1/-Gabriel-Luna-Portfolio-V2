"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechBadge";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import type { Project } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  const { t } = useLanguage();

  const featured = data.filter((p) => p.layoutType === "featured");
  const standard = data.filter((p) => p.layoutType !== "featured");

  return (
    <section id="projects" className="py-28 bg-surface/5 overflow-hidden relative">
      {/* Background mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh-warm opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          number="04"
          subtitle={t("projects.subtitle")}
          title={t("projects.title")}
        />

        <div className="mt-20 space-y-20">
          {/* Featured Projects */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            {featured.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className={`group relative rounded-3xl overflow-hidden border border-white/[0.04] bg-gradient-to-br from-surface/50 to-surface-elevated/35 hover:border-primary/12 transition-all duration-500 elevation-4 flex flex-col card-spotlight ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
              >
                {/* Content Side */}
                <div className="p-8 md:p-10 lg:w-[45%] flex flex-col justify-center relative z-20 space-y-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                    {project.tags.length > 4 && (
                      <span className="inline-flex items-center px-3 py-1 bg-white/[0.03] border border-white/8 rounded-full text-[10px] font-mono font-medium text-white/35">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-heading font-display font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                      {project.title.includes("proj.")
                        ? t(project.title)
                        : project.title}
                    </h3>
                    <p className="text-secondary text-body leading-relaxed">
                      {project.description.includes("proj.")
                        ? t(project.description)
                        : project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <Link
                      href={`/projetos/${project.id}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-sm hover:shadow-glow-md hover:-translate-y-0.5 transition-all btn-glow btn-shimmer border border-white/10"
                    >
                      <BookOpen size={15} />
                      Ver Arquitetura
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl glass border border-white/[0.04] text-white hover:border-primary/15 transition-all text-sm font-medium"
                    >
                      <Github size={15} /> Code
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative w-full lg:w-[55%] min-h-[280px] lg:min-h-[450px] bg-surface/15 overflow-hidden flex items-end justify-end pt-8 pl-8 md:pt-10 md:pl-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative w-full h-[90%] rounded-tl-2xl overflow-hidden border-t border-l border-white/[0.04] shadow-elevated group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700 ease-out">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-left-top opacity-70 group-hover:opacity-95 transition-opacity duration-500"
                    />
                    {/* Image overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Standard Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {standard.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="group flex flex-col rounded-2xl bg-gradient-to-b from-surface/40 to-surface-elevated/25 border border-white/[0.04] hover:border-primary/15 transition-all duration-300 overflow-hidden glass-shine"
              >
                <div className="relative h-44 overflow-hidden bg-surface/20">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                </div>

                <div className="p-5 flex flex-col flex-1 relative z-10 -mt-5">
                  {/* Tags */}
                  <div className="flex gap-1.5 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>

                  <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary transition-colors tracking-tight">
                    {project.title.includes("proj.")
                      ? t(project.title)
                      : project.title}
                  </h4>

                  <p className="text-secondary/60 text-sm mb-5 flex-1 line-clamp-3 leading-relaxed">
                    {project.description.includes("proj.")
                      ? t(project.description)
                      : project.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-white/[0.04]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                    >
                      <Github size={14} /> Repositorio
                    </a>
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors flex items-center gap-1 text-xs font-bold"
                      >
                        Ver Projeto <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="pt-6 text-center">
            <Button href="/projetos" variant="outline" icon={<ArrowRight size={16} />}>
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
