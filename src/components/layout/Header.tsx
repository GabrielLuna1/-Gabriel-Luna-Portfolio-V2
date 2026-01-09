"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, Globe } from "lucide-react"; 
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext"; 

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  
  const { t, toggleLanguage, language } = useLanguage(); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCommandMenu = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true }));
  };

  // 👇 AQUI ESTAVA O PROBLEMA: CORRIGI OS LINKS (HREFS)
 const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.stack"), href: "#tech" }, // <--- VOLTEI PARA #tech
    { name: t("nav.career"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.studies"), href: "#education" },
  ];

  // Função para rolar suavemente (opcional, mas melhora a UX)
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        <a href="#" className="text-5xl font-display font-bold text-white hover:text-primary transition-colors">
          GL<span className="text-primary">.</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleScrollTo(e, item.href)} // Adicionei scroll suave
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* Botão de Busca */}
          <button onClick={openCommandMenu} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-primary hover:border-primary/30 transition-all group mr-2">
            <Search size={14} />
            <span className="text-xs font-medium hidden lg:inline">{t("nav.search")}</span>
            <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-secondary group-hover:text-primary">
              <span className="text-xs">{isMac ? '⌘' : 'Ctrl'}</span>K
            </kbd>
          </button>
          
          {/* BOTÃO DE IDIOMA */}
          <button 
            onClick={toggleLanguage}
            className="p-2 mr-2 rounded-full hover:bg-white/5 text-secondary hover:text-primary transition-colors flex items-center gap-1 text-xs font-bold uppercase"
            title="Mudar idioma"
          >
            <Globe size={16} />
            {language}
          </button>

          <Button href="#contact" variant="primary" size="sm">
            {t("nav.cta")}
          </Button>
        </nav>

        {/* Menu Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleLanguage} className="text-xs font-bold uppercase text-secondary">
             {language}
          </button>
          <button onClick={openCommandMenu} className="text-secondary hover:text-primary"><Search size={20} /></button>
          <button className="text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Dropdown Mobile */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-lg font-medium text-secondary hover:text-primary" 
                onClick={(e) => handleScrollTo(e, item.href)}
              >
                {item.name}
              </a>
            ))}
             <Button href="#contact" variant="primary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                {t("nav.cta")}
             </Button>
          </div>
        )}
      </div>
    </header>
  );
}