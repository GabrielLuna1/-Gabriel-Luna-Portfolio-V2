"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, Linkedin, Mail, ArrowRight, Monitor, User, Code2, FolderGit, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Abrir com Ctrl + K ou Cmd + K
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

  // Ações do Menu
  const actions = [
    { 
      id: "home", 
      label: "Início", 
      icon: <Monitor className="w-4 h-4" />, 
      shortcut: "H",
      action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); } 
    },
    { 
      id: "about", 
      label: "Sobre Mim", 
      icon: <User className="w-4 h-4" />, 
      action: () => { document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } 
    },
    { 
      id: "projects", 
      label: "Projetos", 
      icon: <FolderGit className="w-4 h-4" />, 
      action: () => { document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); } 
    },
    { 
      id: "github", 
      label: "GitHub", 
      icon: <Github className="w-4 h-4" />, 
      action: () => window.open("https://github.com/GabrielLuna1", "_blank") 
    },
    { 
      id: "linkedin", 
      label: "LinkedIn", 
      icon: <Linkedin className="w-4 h-4" />, 
      action: () => window.open("https://linkedin.com/in/gabriel-luna-14b00821b", "_blank") 
    },
    { 
      id: "email", 
      label: "Copiar Email", 
      icon: <Mail className="w-4 h-4" />, 
      action: () => { 
        navigator.clipboard.writeText("gabriellunajob@gmail.com"); 
        setOpen(false); 
        alert("Email copiado!"); // Pode trocar por um toast notification depois
      } 
    },
  ];

  // Filtrar resultados
  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
          
          {/* Backdrop (Fundo escuro) */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* A Janela do Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-lg bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Input de Busca */}
            <div className="flex items-center px-4 border-b border-white/5">
              <Search className="w-5 h-5 text-secondary" />
              <input
                autoFocus
                type="text"
                placeholder="O que você procura? (Digite 'Projetos', 'GitHub'...)"
                className="w-full bg-transparent p-4 text-white placeholder:text-secondary focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="text-xs text-secondary border border-white/10 px-2 py-1 rounded">ESC</span>
            </div>

            {/* Lista de Resultados */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <p className="p-4 text-center text-sm text-secondary">Nenhum resultado encontrado.</p>
              ) : (
                filteredActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={action.action}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors text-left group"
                  >
                    <div className="p-2 rounded-md bg-white/5 text-secondary group-hover:text-primary transition-colors">
                      {action.icon}
                    </div>
                    <span className="flex-1 text-sm font-medium text-white group-hover:text-primary">
                      {action.label}
                    </span>
                    {action.shortcut && (
                       <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                         {action.shortcut}
                       </span>
                    )}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </button>
                ))
              )}
            </div>
            
            {/* Rodapé do Menu */}
            <div className="p-2 border-t border-white/5 bg-white/[0.02] text-[10px] text-secondary text-center">
              Use as setas ↑↓ para navegar e Enter para selecionar
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}