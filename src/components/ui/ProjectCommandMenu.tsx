"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, ExternalLink, Github, BookOpen, Code2, Layers, Server, Cpu, Database, Globe, Zap, Target, Shield, BarChart3, Workflow, Network, Brain, FlaskConical } from "lucide-react";

interface CmdAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  keywords?: string;
  action: () => void;
}

interface ProjectCommandMenuProps {
  projectName: string;
  sections: { id: string; label: string; icon: React.ReactNode }[];
  actions: CmdAction[];
}

export function ProjectCommandMenu({ projectName, sections, actions }: ProjectCommandMenuProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        e.stopPropagation();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", down, true);
    return () => window.removeEventListener("keydown", down, true);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const sectionActions = sections.map((s) => ({
    id: `sec-${s.id}`,
    label: `Ir para: ${s.label}`,
    icon: s.icon,
    keywords: `${s.label} secao`,
    action: () => {
      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    },
  }));

  const allActions = [...sectionActions, ...actions];

  const filtered = allActions.filter((a) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return a.label.toLowerCase().includes(q) || (a.keywords || "").includes(q);
  });

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      filtered[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-lg bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            onKeyDown={handleKey}
          >
            <div className="flex items-center gap-3 px-4 py-2 border-b border-white/5 bg-primary/5">
              <BookOpen size={14} className="text-primary shrink-0" />
              <span className="text-xs font-medium text-primary">{projectName}</span>
            </div>

            <div className="flex items-center px-4 border-b border-white/5">
              <Search className="w-5 h-5 text-secondary" />
              <input
                autoFocus
                type="text"
                placeholder={`Buscar em ${projectName}...`}
                className="w-full bg-transparent p-4 text-white placeholder:text-secondary focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
              />
              <span className="text-xs text-secondary border border-white/10 px-2 py-1 rounded">ESC</span>
            </div>

            <div className="max-h-[350px] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="p-4 text-center text-sm text-secondary">Nenhum resultado encontrado.</p>
              ) : (
                filtered.map((action, i) => {
                  const isSelected = i === selectedIndex;
                  return (
                    <button
                      key={action.id}
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
                      <ArrowRight className={`w-4 h-4 transition-all shrink-0 ${
                        isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      } text-primary`} />
                    </button>
                  );
                })
              )}
            </div>

            <div className="p-2 border-t border-white/5 bg-white/[0.02] text-[10px] text-secondary text-center flex gap-4 justify-center">
              <span>↑↓ Navegar</span>
              <span>Enter Selecionar</span>
              <span>ESC Fechar</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
