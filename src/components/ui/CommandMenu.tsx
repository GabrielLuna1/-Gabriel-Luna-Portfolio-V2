"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, Linkedin, Mail, ArrowRight, Monitor, User, Code2, FolderGit, GraduationCap, BookOpen, Bot, Database, Globe, Brain, Zap, Target, Server, Shield, Activity, BarChart3, Lock, Star, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { stack } from "@/data/stack";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  keywords?: string;
  shortcut?: string;
  category: string;
  action: () => void;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const sections: Action[] = [
    { id: "home", label: "Início", icon: <Monitor className="w-4 h-4" />, shortcut: "H", category: "Navegação", action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); } },
    { id: "about", label: "Sobre Mim", icon: <User className="w-4 h-4" />, category: "Navegação", keywords: "sobre jornada historia bio", action: () => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "projects", label: "Todos os Projetos", icon: <FolderGit className="w-4 h-4" />, category: "Navegação", keywords: "portfolio trabalhos", action: () => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "tech", label: "Tecnologias & Stack", icon: <Code2 className="w-4 h-4" />, category: "Navegação", keywords: "stack tech ferramentas cinto utilidades", action: () => { document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "studies", label: "Educação", icon: <GraduationCap className="w-4 h-4" />, category: "Navegação", keywords: "estudo formacao certificados", action: () => { document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
    { id: "contact", label: "Contato", icon: <Mail className="w-4 h-4" />, category: "Navegação", keywords: "falar mensagem email", action: () => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } },
  ];

  const projectActions: Action[] = [
    { id: "work-hunter", label: "WorkHunter — IA & Automação de Vagas", icon: <Brain className="w-4 h-4 text-primary" />, category: "Projetos", keywords: "ia inteligencia artificial playwright ollama lm studio scraping automacao emprego job", action: () => { router.push('/projetos/work-hunter'); setOpen(false); } },
    { id: "stock-master", label: "StockMaster Pro — ERP & Logística", icon: <Server className="w-4 h-4 text-primary" />, category: "Projetos", keywords: "erp logistica nextauth rbac exceljs recharts estoque financeiro", action: () => { router.push('/projetos/stockmaster'); setOpen(false); } },
    { id: "galactic-luna", label: "Galactic Luna — Landing Page Espacial", icon: <Globe className="w-4 h-4 text-purple-500" />, category: "Projetos", keywords: "landing page espacial chatbot seguranca", action: () => window.open("https://gabrielluna1.github.io", "_blank") },
    { id: "esc-cursos", label: "Portal ESC Cursos — Educação", icon: <BookOpen className="w-4 h-4 text-amber-500" />, category: "Projetos", keywords: "portal educacional gulp cache build", action: () => window.open("https://github.com/GabrielLuna1/esc-new", "_blank") },
  ];

  const socialActions: Action[] = [
    { id: "github", label: "GitHub — GabrielLuna1", icon: <Github className="w-4 h-4" />, category: "Redes", keywords: "repositorio codigo fonte", action: () => window.open("https://github.com/GabrielLuna1", "_blank") },
    { id: "linkedin", label: "LinkedIn — Gabriel Luna", icon: <Linkedin className="w-4 h-4" />, category: "Redes", keywords: "perfil profissional rede contato", action: () => window.open("https://linkedin.com/in/gabriel-luna-14b00821b", "_blank") },
    { id: "email", label: "Copiar Email — gabriellunajob@gmail.com", icon: <Mail className="w-4 h-4" />, category: "Redes", keywords: "email contato copiar", action: () => { navigator.clipboard.writeText("gabriellunajob@gmail.com"); setOpen(false); } },
    { id: "casechat", label: "Abrir CaseChat Copilot", icon: <Bot className="w-4 h-4 text-primary" />, category: "Ferramentas", keywords: "chat ia assistente perguntas", action: () => { document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true })); setOpen(false); } },
  ];

  const allActions = [...sections, ...projectActions, ...socialActions];

  const filtered = allActions.filter(action => {
    const q = query.toLowerCase();
    if (!q) return true;
    return action.label.toLowerCase().includes(q) ||
      (action.keywords || "").includes(q);
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      filtered[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-xl bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center px-4 border-b border-white/5">
              <Search className="w-5 h-5 text-secondary" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar projetos, tecnologias, seções..."
                className="w-full bg-transparent p-4 text-white placeholder:text-secondary focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <span className="text-xs text-secondary border border-white/10 px-2 py-1 rounded">ESC</span>
            </div>

            <div className="max-h-[400px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="p-4 text-center text-sm text-secondary">Nenhum resultado encontrado.</p>
              ) : (
                filtered.map((action, i) => {
                  const isSelected = i === selectedIndex;
                  const prevCategory = i > 0 ? filtered[i - 1].category : null;
                  const showCategory = action.category !== prevCategory;

                  return (
                    <div key={action.id}>
                      {showCategory && (
                        <div className="px-3 pt-3 pb-1 text-[10px] uppercase tracking-widest text-secondary/60 font-semibold">
                          {action.category}
                        </div>
                      )}
                      <button
                        onClick={action.action}
                        onMouseEnter={() => setSelectedIndex(i)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left group ${
                          isSelected ? "bg-primary/10 text-primary" : "hover:bg-white/5 hover:text-primary"
                        }`}
                      >
                        <div className={`p-2 rounded-md shrink-0 ${
                          isSelected ? "bg-primary/20 text-primary" : "bg-white/5 text-secondary"
                        } transition-colors`}>
                          {action.icon}
                        </div>
                        <span className={`flex-1 text-sm font-medium ${
                          isSelected ? "text-white" : "text-white/80"
                        }`}>
                          {action.label}
                        </span>
                        {action.shortcut && (
                          <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            {action.shortcut}
                          </span>
                        )}
                        <ArrowRight className={`w-4 h-4 transition-all shrink-0 ${
                          isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        } text-primary`} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="p-2 border-t border-white/5 bg-white/[0.02] text-[10px] text-secondary text-center flex gap-4 justify-center">
              <span>↑↓ Navegar</span>
              <span>Enter Selecionar</span>
              <span>ESC Fechar</span>
              <span>{filtered.length} resultados</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
