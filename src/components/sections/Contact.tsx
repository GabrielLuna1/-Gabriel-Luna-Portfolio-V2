"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Loader2,
  Copy,
  Check,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  // Função para copiar email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gabriellunajob@gmail.com");
    setHasCopiedEmail(true);
    setTimeout(() => setHasCopiedEmail(false), 2000); // Reseta após 2s
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqnrzgn";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
        event.currentTarget.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Ops! Algo deu errado.");
      }
    } catch (error) {
      setErrorMessage("Erro de conexão. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle={t("contact.subtitle")}
          title={t("contact.title")}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-start">
          {/* Lado Esquerdo: Infos de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-secondary text-lg leading-relaxed max-w-md">
              {t("contact.text")}
            </p>

            <div className="space-y-4">
              {/* Card Email com Clique para Copiar */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-all group text-left relative overflow-hidden"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-white font-medium">
                    gabriellunajob@gmail.com
                  </p>
                </div>

                {/* Ícone de Copiar/Copiado */}
                <div className="text-secondary group-hover:text-primary transition-colors">
                  {hasCopiedEmail ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Copy size={20} />
                  )}
                </div>

                {/* Feedback Visual de Copiado */}
                {hasCopiedEmail && (
                  <span className="absolute right-12 text-xs font-bold text-green-500 animate-in fade-in slide-in-from-right-2">
                    Copiado!
                  </span>
                )}
              </button>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/gabriel-luna-14b00821b"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <p className="text-white font-medium">Gabriel Luna</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/GabrielLuna1"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">
                    GitHub
                  </p>
                  <p className="text-white font-medium">GabrielLuna1</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow de Fundo */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 opacity-20" />

            <div className="p-8 rounded-2xl bg-surface/80 backdrop-blur-sm border border-white/10 relative overflow-hidden shadow-2xl">
              {isSuccess ? (
                <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t("contact.success.title")}
                  </h3>
                  <p className="text-secondary mb-8 leading-relaxed max-w-xs mx-auto">
                    {t("contact.success.text")}
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="w-full"
                  >
                    {t("contact.btn.again")}
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-secondary uppercase font-bold tracking-wider">
                        {t("contact.form.name")}
                      </label>
                      <input
                        name="name"
                        required
                        type="text"
                        placeholder="Seu nome"
                        className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-secondary uppercase font-bold tracking-wider">
                        {t("contact.form.email")}
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-secondary uppercase font-bold tracking-wider">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder={t("contact.form.placeholder")}
                      className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-white/20"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                      <span>⚠️</span> {errorMessage}
                    </div>
                  )}

                  <Button
                    className="w-full py-6 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        {t("contact.btn.sending")}{" "}
                        <Loader2 size={20} className="animate-spin ml-2" />
                      </>
                    ) : (
                      <>
                        {t("contact.btn.send")} <Send size={20} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
