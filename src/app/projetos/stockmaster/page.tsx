"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Server, Shield, Activity, BarChart3, Lock, Database, FileSpreadsheet, PieChart, Layers, BookOpen } from "lucide-react";
import Link from "next/link";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { ProjectCommandMenu } from "@/components/ui/ProjectCommandMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { FloatingTechTags } from "@/components/ui/FloatingTechTags";

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
    heroDesc: "Mini-ERP completo para gestão logística e financeira. Construído com foco absoluto em segurança, performance e escalabilidade empresarial através do Next.js 14 e arquitetura edge.",
    btnCode: "Repositório",
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
    heroDesc: "A complete Mini-ERP for logistics and financial management. Built with an absolute focus on security, performance, and enterprise scalability utilizing Next.js 14 and edge architecture.",
    btnCode: "Repository",
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

const floatingTags = [
  { name: "Next.js", icon: <Code2 size={12} /> },
  { name: "MongoDB", icon: <Database size={12} /> },
  { name: "NextAuth", icon: <Lock size={12} /> },
  { name: "Tailwind", icon: <PieChart size={12} /> }, // using pie chart for variety
  { name: "Recharts", icon: <BarChart3 size={12} /> },
  { name: "ExcelJS", icon: <FileSpreadsheet size={12} /> },
];

export default function StockMasterPage() {
  const { language } = useLanguage();
  const t = pageContent[language];

  const features = getFeatures(language);
  const architectureLayers = getArchitectureLayers(language);
  const techDetails = getTechDetails(language);
  const navSections = getNavSections(language);
  const cmdActions = getCmdActions(language, features, techDetails);

  return (
    <main className="min-h-screen bg-[#020202] pt-32 pb-24 relative overflow-hidden transition-all">
      {/* Mesh Background — pure dark focus */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-noise opacity-[0.03]" />

      <ProjectNav
        projectName="StockMaster Pro"
        projectColor="primary"
        sections={navSections}
        nextProject={{ id: "work-hunter", name: "WorkPlus" }}
      />
      <ProjectCommandMenu
        projectName="StockMaster Pro"
        sections={navSections}
        actions={cmdActions}
      />

      {/* Hero Section — Centered Documentation Style */}
      <section id="sm-hero" className="container mx-auto px-4 max-w-4xl mb-32 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Floating tech tags behind the title */}
        <FloatingTechTags tags={floatingTags} colorTheme="primary" />

        <div className="text-center relative z-10 w-full flex flex-col items-center">


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[6.5rem] font-display font-black tracking-tighter mb-8 leading-[1.05]"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            StockMaster <br className="md:hidden" /> Pro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary/80 leading-relaxed mb-12 max-w-2xl font-medium"
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <a 
              href="https://github.com/GabrielLuna1/stockmaster" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1e40af] text-white font-bold text-sm hover:bg-[#1d4ed8] transition-all shadow-[0_0_40px_rgba(30,64,175,0.6)] hover:shadow-[0_0_60px_rgba(30,64,175,0.8)] border border-blue-400/20 group"
            >
              <Github size={18} />
              {t.btnCode}
              <ArrowLeft size={16} className="rotate-135 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-secondary">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowLeft size={14} className="-rotate-90 text-secondary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Grid */}
      <section className="container mx-auto px-4 max-w-5xl mb-32 relative z-10">
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
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-strong border border-white/[0.04] group hover:border-blue-400/30 transition-colors"
              >
                <Icon size={18} className="text-blue-400/60 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-bold text-white tracking-wide">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="section-fade-separator max-w-4xl mx-auto" />

      {/* Features */}
      <section id="sm-features" className="container mx-auto px-4 max-w-5xl py-24 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-4"
          >
            {t.featuresTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-secondary"
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
            
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="card-premium p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-white/[0.04] flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-500 shadow-elevated">
                  <Icon className="text-blue-400 opacity-80 group-hover:opacity-100" size={20} />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <div className="section-fade-separator max-w-4xl mx-auto" />

      {/* Architecture */}
      <section id="sm-architecture" className="container mx-auto px-4 max-w-5xl py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-display font-black text-white tracking-tighter mb-4"
            >
              {t.archTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary text-sm leading-relaxed"
            >
              {t.archDesc}
            </motion.p>
          </div>

          <div>
            <div className="relative">
              <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent hidden md:block" />
              
              <div className="space-y-6">
                {architectureLayers.map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-0 md:pl-10"
                  >
                    <div className="absolute left-[7px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#020202] border-2 border-blue-500 hidden md:block" />
                    
                    <div className="card-spotlight p-6 elevation-2 border border-white/[0.04] bg-surface/40 hover:bg-surface/60 transition-colors group">
                      <h3 className={`text-xs font-mono tracking-wider uppercase font-bold ${layer.color} mb-4`}>
                        {layer.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item, j) => (
                          <span key={j} className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-secondary/80 font-medium group-hover:text-white transition-colors">
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

    </main>
  );
}
