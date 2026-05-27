"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Server, Shield, Activity, BarChart3, Lock, Database, FileSpreadsheet, PieChart, Layers, BookOpen } from "lucide-react";
import Link from "next/link";
import ProjectNavigation from "@/components/ui/ProjectNavigation";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { ProjectCommandMenu } from "@/components/ui/ProjectCommandMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";

const getFeatures = (lang: "pt" | "en") => [
  {
    title: lang === "pt" ? "Gestão Logística" : "Logistics Management",
    description: lang === "pt" ? "Controle avançado de inventário com tracking de lote, validade, e alertas de estoque." : "Advanced inventory control with batch tracking, expiration dates, and low stock alerts.",
    icon: Database,
  },
  {
    title: lang === "pt" ? "RBAC & Segurança" : "RBAC & Security",
    description: lang === "pt" ? "Controle de acesso (Admin, Gestor, Operador) usando NextAuth com middleware de proteção." : "Role-based access control using NextAuth with edge middleware protection.",
    icon: Shield,
  },
  {
    title: lang === "pt" ? "SystemLog Auditing" : "SystemLog Auditing",
    description: lang === "pt" ? "Registro imutável de ações com timestamp, IP, metadata e diff de dados exportável." : "Immutable logging of actions with timestamp, IP, metadata, and exportable data diffs.",
    icon: Activity,
  },
  {
    title: lang === "pt" ? "Real-time Dashboard" : "Real-time Dashboard",
    description: lang === "pt" ? "Painel interativo com Recharts: giro de estoque, alertas, e métricas por categoria." : "Interactive dashboard powered by Recharts: inventory turnover, alerts, category metrics.",
    icon: BarChart3,
  },
  {
    title: lang === "pt" ? "Relatórios ExcelJS" : "ExcelJS Reports",
    description: lang === "pt" ? "Geração de relatórios profissionais no servidor: balanço, DRE simplificado. Download 1-click." : "Server-side generation of professional reports: balance sheets, P&L. 1-click download.",
    icon: FileSpreadsheet,
  },
  {
    title: lang === "pt" ? "Server Actions" : "Server Actions",
    description: lang === "pt" ? "Operações CRUD via Server Actions do Next.js 14, eliminando APIs intermediárias." : "CRUD operations via Next.js 14 Server Actions, eliminating intermediary APIs.",
    icon: Server,
  },
];

const getArchitectureLayers = (lang: "pt" | "en") => [
  {
    title: "Frontend (Next.js 14)",
    items: lang === "pt" 
      ? ["Server Components", "Client Components interativos", "Streaming SSR", "Server Actions"]
      : ["Server Components", "Interactive Client Components", "SSR Streaming", "Server Actions"],
    color: "text-primary",
  },
  {
    title: lang === "pt" ? "Segurança Edge" : "Edge Security",
    items: lang === "pt"
      ? ["JWT Auth com refresh", "RBAC 3 níveis", "Middleware protection", "Rate limiting"]
      : ["JWT Auth with refresh", "3-level RBAC", "Middleware protection", "Rate limiting"],
    color: "text-accent-cool",
  },
  {
    title: lang === "pt" ? "Auditoria" : "Auditing",
    items: lang === "pt"
      ? ["Registro imutável", "Metadata completa", "Diff de dados", "Exportação compliance"]
      : ["Immutable logging", "Complete metadata", "Data diffs", "Compliance exports"],
    color: "text-amber-400",
  },
  {
    title: "Data Layer",
    items: lang === "pt"
      ? ["MongoDB + Mongoose", "Índices compostos", "ExcelJS Reports", "Aggregation pipeline"]
      : ["MongoDB + Mongoose", "Compound indexes", "ExcelJS Reports", "Aggregation pipeline"],
    color: "text-emerald-400",
  },
];

const getTechDetails = (lang: "pt" | "en") => [
  { name: "Next.js 14", desc: "App Router + Actions", icon: Code2 },
  { name: "MongoDB", desc: "NoSQL + Mongoose", icon: Database },
  { name: "NextAuth", desc: "JWT + RBAC", icon: Lock },
  { name: "Recharts", desc: "Interactive KPIs", icon: PieChart },
];

const getNavSections = (lang: "pt" | "en") => [
  { id: "sm-hero", label: lang === "pt" ? "Visão Geral" : "Overview", icon: <BookOpen size={16} /> },
  { id: "sm-features", label: lang === "pt" ? "Funcionalidades" : "Features", icon: <Layers size={16} /> },
  { id: "sm-architecture", label: lang === "pt" ? "Arquitetura" : "Architecture", icon: <Server size={16} /> },
];

const getCmdActions = (lang: "pt" | "en", features: any[], techDetails: any[]) => [
  { id: "gh", label: "GitHub", icon: <Github size={16} />, action: () => window.open("https://github.com/GabrielLuna1/stockmaster", "_blank") },
  { id: "demo", label: "Demo", icon: <ExternalLink size={16} />, action: () => window.open("https://stock-master-pro-app.vercel.app/", "_blank") },
];

const pageContent = {
  pt: {
    backBtn: "Voltar",
    heroBadge: "Sistema Enterprise",
    heroDesc: "Mini-ERP completo para gestão logística e financeira. Construído com foco absoluto em segurança, performance e escalabilidade empresarial através do Next.js 14 e arquitetura edge.",
    btnCode: "Source",
    btnDemo: "Live Demo",
    statsTitle: "Métricas",
    stats: [
      { label: "Níveis Acesso", value: "3" },
      { label: "Módulos", value: "6" },
      { label: "Relatórios", value: "5" },
      { label: "KPIs", value: "12" },
    ],
    featuresTitle: "Core Features.",
    featuresDesc: "Engenharia de software aplicada para resolver gargalos logísticos do mundo real.",
    archTitle: "Architecture.",
    archDesc: "Design de sistema em camadas com separação clara de responsabilidades, alavancando Server Components e Middleware edge.",
  },
  en: {
    backBtn: "Back",
    heroBadge: "Enterprise System",
    heroDesc: "A complete Mini-ERP for logistics and financial management. Built with an absolute focus on security, performance, and enterprise scalability utilizing Next.js 14 and edge architecture.",
    btnCode: "Source",
    btnDemo: "Live Demo",
    statsTitle: "Metrics",
    stats: [
      { label: "Access Levels", value: "3" },
      { label: "Modules", value: "6" },
      { label: "Reports", value: "5" },
      { label: "KPIs", value: "12" },
    ],
    featuresTitle: "Core Features.",
    featuresDesc: "Software engineering applied to solve real-world logistical bottlenecks.",
    archTitle: "Architecture.",
    archDesc: "Layered system design with clear separation of concerns, leveraging Server Components and Edge Middleware.",
  }
};

export default function StockMasterPage() {
  const { language } = useLanguage();
  const t = pageContent[language];

  const features = getFeatures(language);
  const architectureLayers = getArchitectureLayers(language);
  const techDetails = getTechDetails(language);
  const navSections = getNavSections(language);
  const cmdActions = getCmdActions(language, features, techDetails);

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Editorial Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-mesh-warm opacity-40" />

      <ProjectNav
        projectName="StockMaster Pro"
        projectColor="primary"
        sections={navSections}
        nextProject={{ id: "work-hunter", name: "WorkHunter" }}
      />
      <ProjectCommandMenu
        projectName="StockMaster Pro"
        sections={navSections}
        actions={cmdActions}
      />

      <ParallaxOrb color="bg-accent-cool/10" size={600} top="-5%" left="-10%" blur={160} yOffset={200} />
      <ParallaxOrb color="bg-primary/5" size={500} bottom="10%" right="-5%" blur={140} yOffset={-150} />

      {/* Hero Section — Asymmetric & Editorial */}
      <section id="sm-hero" className="container mx-auto px-4 max-w-6xl mb-32 relative z-10">
        <Link href="/projetos" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="mr-3 transition-transform group-hover:-translate-x-1" size={16} />
          {t.backBtn}
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated/40 border border-white/[0.04] text-[10px] text-accent-cool font-mono tracking-wider uppercase mb-8"
            >
              <Server size={12} />
              {t.heroBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-8 leading-[1.05]"
            >
              Stock<br/>
              <span className="text-accent-cool">Master</span> Pro.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-xl border-l-2 border-accent-cool/30 pl-5 glass-elevated py-4 pr-4 rounded-r-2xl"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://stock-master-pro-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-cool to-blue-600 text-white font-bold text-sm hover:shadow-glow-md hover:-translate-y-0.5 transition-all btn-shimmer border border-white/10">
                <ExternalLink size={18} />
                {t.btnDemo}
              </a>
              <a href="https://github.com/GabrielLuna1/stockmaster" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.02] transition-all font-bold text-sm">
                <Github size={18} />
                {t.btnCode}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Abstract representation of the dashboard */}
            <div className="card-spotlight rounded-[2.5rem] p-8 elevation-4 border border-white/[0.04] relative overflow-hidden bg-gradient-to-b from-surface/80 to-surface/30 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
              
              <h3 className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em] mb-8">{t.statsTitle}</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 relative z-10">
                {t.stats.map((stat, i) => (
                  <div key={stat.label} className="relative group">
                    <div className="absolute -inset-4 bg-white/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-2 group-hover:text-accent-cool transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-secondary/70 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative chart lines */}
              <div className="mt-12 pt-6 border-t border-white/[0.04] flex items-end gap-2 h-20 opacity-40">
                {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }} 
                    animate={{ height: `${h}%` }} 
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="flex-1 bg-accent-cool/20 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Grid — Grid-breaking overlapping design */}
      <section className="container mx-auto px-4 max-w-6xl mb-32 relative z-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {techDetails.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-strong border border-white/[0.04] group hover:border-accent-cool/30 transition-colors"
              >
                <Icon size={18} className="text-accent-cool/60 group-hover:text-accent-cool transition-colors" />
                <span className="text-sm font-bold text-white tracking-wide">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="section-fade-separator" />

      {/* Features — Masonry-style abstract flow */}
      <section id="sm-features" className="container mx-auto px-4 max-w-6xl py-24 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mb-6"
          >
            {t.featuresTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-secondary"
          >
            {t.featuresDesc}
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            // Create varied heights for masonry feel
            const isTall = i === 1 || i === 4;
            
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`card-premium p-8 group flex flex-col justify-between ${isTall ? 'md:row-span-2' : ''}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-white/[0.04] flex items-center justify-center mb-8 group-hover:bg-accent-cool/10 group-hover:scale-110 transition-all duration-500 shadow-elevated">
                    <Icon className="text-accent-cool opacity-80 group-hover:opacity-100" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-accent-cool transition-colors leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-secondary leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <div className="section-fade-separator" />

      {/* Architecture — Layers Visualization */}
      <section id="sm-architecture" className="container mx-auto px-4 max-w-6xl py-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-6"
            >
              {t.archTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg text-secondary leading-relaxed"
            >
              {t.archDesc}
            </motion.p>
          </div>

          <div className="lg:col-span-3">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
              
              <div className="space-y-6">
                {architectureLayers.map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Node dot */}
                    <div className="absolute left-[29px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 hidden md:block" />
                    
                    <div className="card-spotlight p-6 elevation-2 border border-white/[0.04] bg-surface/40 hover:bg-surface/60 transition-colors group">
                      <h3 className={`text-sm font-mono tracking-wider uppercase font-bold ${layer.color} mb-5 flex items-center gap-3`}>
                        <span className="w-6 h-px bg-current opacity-30 hidden sm:block" />
                        {layer.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item, j) => (
                          <span key={j} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-secondary/80 font-medium group-hover:text-white transition-colors">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectNavigation
        prevProject={{ id: "work-hunter", name: "WorkHunter" }}
      />
    </main>
  );
}
