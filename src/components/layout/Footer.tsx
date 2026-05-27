"use client";

import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Top gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="h-[60px] bg-gradient-to-b from-surface/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 pb-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <a
              href="#"
              onClick={scrollToTop}
              className="text-5xl font-display font-black text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            >
              GL<span className="gradient-text">.</span>
            </a>
            <p className="text-secondary text-body leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>

            <div className="flex gap-2.5">
              <a
                href="https://github.com/GabrielLuna1"
                target="_blank"
                className="p-3 glass rounded-xl text-secondary hover:text-white hover:border-white/15 transition-all group"
                aria-label="GitHub"
              >
                <Github
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://linkedin.com/in/gabriel-luna-14b00821b"
                target="_blank"
                className="p-3 glass rounded-xl text-secondary hover:text-[#0A66C2] hover:border-[#0A66C2]/20 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="mailto:gabriellunajob@gmail.com"
                className="p-3 glass rounded-xl text-secondary hover:text-primary hover:border-primary/20 transition-all group"
                aria-label="Email"
              >
                <Mail
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">
              {t("footer.menu")}
            </h4>
            <ul className="space-y-1">
              {[
                { href: "/#about", label: t("nav.about") },
                { href: "/#tech", label: t("nav.stack") },
                { href: "/#projects", label: t("nav.projects") },
                { href: "/#experience", label: t("nav.career") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/[0.03] transition-all text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/15 group-hover:bg-primary group-hover:shadow-[0_0_6px_rgba(59,130,246,0.4)] transition-all" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-5 text-sm tracking-wide uppercase">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/GabrielLuna1?tab=repositories"
                  target="_blank"
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/[0.03] transition-all text-sm"
                >
                  <Github
                    size={15}
                    className="text-white/25 group-hover:text-primary transition-colors"
                  />
                  <span className="font-medium flex-1">{t("footer.repos")}</span>
                  <ExternalLink
                    size={11}
                    className="opacity-0 group-hover:opacity-60 transition-opacity"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GabrielLuna1"
                  target="_blank"
                  className="group flex items-center gap-2.5 px-3 py-2 rounded-lg text-secondary hover:text-white hover:bg-white/[0.03] transition-all text-sm"
                >
                  <Github
                    size={15}
                    className="text-white/25 group-hover:text-primary transition-colors"
                  />
                  <span className="font-medium flex-1">{t("footer.profile")}</span>
                  <ExternalLink
                    size={11}
                    className="opacity-0 group-hover:opacity-60 transition-opacity"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/70 text-xs font-medium">
            &copy; {new Date().getFullYear()} Gabriel Luna.
            <span className="hidden md:inline mx-2 opacity-30">·</span>
            <span className="block md:inline mt-2 md:mt-0 opacity-50">
              {t("footer.stack")}{" "}
              <span className="text-white/60 font-semibold">Next.js</span>,{" "}
              <span className="text-white/60 font-semibold">Tailwind</span> &{" "}
              <span className="text-white/60 font-semibold">Framer Motion</span>.
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}
