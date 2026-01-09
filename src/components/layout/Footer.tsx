"use client"; // Importante adicionar use client aqui agora

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center mt-auto">
      <p className="text-secondary text-sm">
        © {new Date().getFullYear()} Gabriel Luna. 
        {" "}{t("footer.developed")} <span className="text-primary">Next.js</span> 
        {" & "} <span className="text-primary">Tailwind</span>.
      </p>
    </footer>
  );
}