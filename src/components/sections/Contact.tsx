"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext"; // <--- Import do Hook

export function Contact() {
  const { t } = useLanguage(); // <--- Uso do Hook
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    
    // ✅ SEU LINK CONFIGURADO
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqnrzgn"; 

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Títulos Traduzidos */}
        <SectionTitle 
          subtitle={t("contact.subtitle")} 
          title={t("contact.title")} 
        />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          
          {/* Lado Esquerdo: Infos */}
          <div className="space-y-6">
            <p className="text-secondary text-lg mb-8">
              {t("contact.text")}
            </p>
            <div className="space-y-4">
              <a href="mailto:gabriellunajob@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors"><Mail size={20} /></div>
                <div><p className="text-xs text-secondary">Email</p><p className="text-white font-medium">gabriellunajob@gmail.com</p></div>
              </a>
              <a href="https://linkedin.com/in/gabriel-luna-14b00821b" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors"><Linkedin size={20} /></div>
                <div><p className="text-xs text-secondary">LinkedIn</p><p className="text-white font-medium">Gabriel Luna</p></div>
              </a>
               <a href="https://github.com/GabrielLuna1" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-all group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors"><Github size={20} /></div>
                <div><p className="text-xs text-secondary">GitHub</p><p className="text-white font-medium">GabrielLuna1</p></div>
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="p-8 rounded-2xl bg-surface border border-white/5 relative overflow-hidden">
            
            {/* Mensagem de Sucesso */}
            {isSuccess ? (
              <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t("contact.success.title")}</h3>
                <p className="text-secondary mb-6">{t("contact.success.text")}</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">{t("contact.btn.again")}</Button>
              </div>
            ) : (
              // Formulário
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-secondary uppercase font-medium">{t("contact.form.name")}</label>
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      placeholder={t("contact.form.name")} 
                      className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-secondary uppercase font-medium">{t("contact.form.email")}</label>
                    <input 
                      name="email" 
                      required 
                      type="email" 
                      placeholder={t("contact.form.email")} 
                      className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs text-secondary uppercase font-medium">{t("contact.form.message")}</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4} 
                    placeholder={t("contact.form.placeholder")} 
                    className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" 
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    {errorMessage}
                  </p>
                )}

                <Button className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>{t("contact.btn.sending")} <Loader2 size={18} className="animate-spin ml-2" /></>
                  ) : (
                    <>{t("contact.btn.send")} <Send size={18} /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}