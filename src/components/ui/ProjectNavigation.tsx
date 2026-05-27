"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectNavigationProps {
  prevProject?: { id: string; name: string };
  nextProject?: { id: string; name: string };
}

export default function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  const { language } = useLanguage();

  return (
    <div className="border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link 
              href={`/projetos/${prevProject.id}`}
              className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-surface/50 border border-transparent hover:border-white/5 transition-all w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ArrowLeft className="text-secondary group-hover:text-primary transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-sm text-secondary mb-1">
                  {language === "pt" ? "Projeto Anterior" : "Previous Project"}
                </p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">{prevProject.name}</p>
              </div>
            </Link>
          ) : <div className="w-full sm:w-auto" />}

          {nextProject ? (
            <Link 
              href={`/projetos/${nextProject.id}`}
              className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-surface/50 border border-transparent hover:border-white/5 transition-all w-full sm:w-auto text-right"
            >
              <div className="text-right">
                <p className="text-sm text-secondary mb-1">
                  {language === "pt" ? "Próximo Projeto" : "Next Project"}
                </p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">{nextProject.name}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ArrowRight className="text-secondary group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ) : <div className="w-full sm:w-auto" />}
        </div>
      </div>
    </div>
  );
}
