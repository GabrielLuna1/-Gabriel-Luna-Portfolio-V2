"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Server, Shield, Activity, BarChart3, Lock, Database, FileSpreadsheet, PieChart, Layers, BookOpen } from "lucide-react";
import Link from "next/link";
import ProjectNavigation from "@/components/ui/ProjectNavigation";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";
import { ProjectNav } from "@/components/ui/ProjectNav";
import { ProjectCommandMenu } from "@/components/ui/ProjectCommandMenu";
import { useLanguage } from "@/contexts/LanguageContext";

const getFeatures = (lang: "pt" | "en") => [
  {
    title: lang === "pt" ? "Gestão Logística Completa" : "Complete Logistics Management",
    description: lang === "pt" ? "Controle avançado de inventário com tracking de lote, validade, movimentações de entrada/saída em tempo real e alertas de estoque mínimo." : "Advanced inventory control with batch tracking, expiration dates, real-time inbound/outbound movements, and low stock alerts.",
    icon: Database,
  },
  {
    title: lang === "pt" ? "RBAC & Segurança Multicamada" : "RBAC & Multi-layer Security",
    description: lang === "pt" ? "Controle de acesso baseado em roles (Admin, Gestor, Operador) usando NextAuth com middleware de proteção no edge. Sessões JWT com refresh token e rate limiting por endpoint." : "Role-based access control (Admin, Manager, Operator) using NextAuth with edge middleware protection. JWT sessions with refresh tokens and per-endpoint rate limiting.",
    icon: Shield,
  },
  {
    title: lang === "pt" ? "Auditoria SystemLog" : "SystemLog Auditing",
    description: lang === "pt" ? "Registro imutável de todas as ações com timestamp, IP, metadata e diff de dados. Consulta por filtros com exportação para auditoria externa." : "Immutable logging of all actions with timestamp, IP, metadata, and data diffs. Filterable queries with external audit exports.",
    icon: Activity,
  },
  {
    title: lang === "pt" ? "Dashboard & KPIs em Tempo Real" : "Real-time Dashboard & KPIs",
    description: lang === "pt" ? "Painel interativo com Recharts: giro de estoque, alertas de reposição, performance de vendas, métricas por categoria e projeções baseadas em histórico." : "Interactive dashboard powered by Recharts: inventory turnover, restock alerts, sales performance, category metrics, and historical projections.",
    icon: BarChart3,
  },
  {
    title: lang === "pt" ? "Relatórios Financeiros (ExcelJS)" : "Financial Reports (ExcelJS)",
    description: lang === "pt" ? "Geração de relatórios Excel profissionais no servidor: balanço mensal, movimentações por período, top produtos, DRE simplificado. Download com um clique." : "Server-side generation of professional Excel reports: monthly balance sheets, period movements, top products, simplified P&L. One-click download.",
    icon: FileSpreadsheet,
  },
  {
    title: lang === "pt" ? "Server Actions Mutations" : "Server Actions Mutations",
    description: lang === "pt" ? "Operações CRUD via Server Actions do Next.js 14, eliminando a necessidade de endpoints API intermediários com segurança type-safe entre cliente e servidor." : "CRUD operations via Next.js 14 Server Actions, eliminating intermediary API endpoints while ensuring type-safe security between client and server.",
    icon: Server,
  },
];

const getArchitectureLayers = (lang: "pt" | "en") => [
  {
    title: "Frontend (Next.js 14 App Router)",
    items: lang === "pt" 
      ? ["Server Components para performance máxima", "Client Components interativos (dashboard, formulários)", "Streaming SSR para carregamento progressivo", "Server Actions para mutações seguras de dados", "Middleware edge para proteção de rotas RBAC"]
      : ["Server Components for maximum performance", "Interactive Client Components (dashboard, forms)", "SSR Streaming for progressive loading", "Server Actions for secure data mutations", "Edge middleware for RBAC route protection"],
    color: "text-primary",
    border: "border-primary/30",
  },
  {
    title: lang === "pt" ? "Segurança (NextAuth + Middleware)" : "Security (NextAuth + Middleware)",
    items: lang === "pt"
      ? ["Autenticação JWT com refresh token rotation", "RBAC com 3 níveis: Admin, Gestor, Operador", "Middleware edge protege rotas antes do carregamento", "Rate limiting por endpoint sensível", "Session management com invalidação remota"]
      : ["JWT authentication with refresh token rotation", "3-level RBAC: Admin, Manager, Operator", "Edge middleware secures routes before loading", "Sensitive endpoint rate limiting", "Session management with remote invalidation"],
    color: "text-primary",
    border: "border-primary/30",
  },
  {
    title: lang === "pt" ? "Auditoria (SystemLog)" : "Auditing (SystemLog)",
    items: lang === "pt"
      ? ["Registro imutável de todas as operações CRUD", "Metadata completa: usuário, IP, timestamp, ação", "Diff automático de dados antes/depois", "Filtros por data, usuário, ação e entidade", "Exportação de logs para compliance"]
      : ["Immutable logging of all CRUD operations", "Complete metadata: user, IP, timestamp, action", "Automatic before/after data diffs", "Filters by date, user, action, and entity", "Log exports for compliance"],
    color: "text-amber-400",
    border: "border-amber-400/30",
  },
  {
    title: "Data Layer (MongoDB + ExcelJS)",
    items: lang === "pt"
      ? ["MongoDB com schemas validados (Mongoose)", "Índices compostos para queries performáticas", "ExcelJS para geração de relatórios no servidor", "GridFS para documentos e anexos", "Aggregation pipeline para KPIs do dashboard"]
      : ["MongoDB with validated schemas (Mongoose)", "Compound indexes for performant queries", "ExcelJS for server-side report generation", "GridFS for documents and attachments", "Aggregation pipelines for dashboard KPIs"],
    color: "text-cyan-400",
    border: "border-cyan-400/30",
  },
];

const getTechDetails = (lang: "pt" | "en") => [
  { name: "Next.js 14", desc: "App Router + Server Actions + Middleware", icon: Code2 },
  { name: "MongoDB", desc: lang === "pt" ? "Banco NoSQL com Mongoose ODM" : "NoSQL database with Mongoose ODM", icon: Database },
  { name: "NextAuth", desc: lang === "pt" ? "Autenticação JWT com RBAC integrado" : "JWT Auth with integrated RBAC", icon: Lock },
  { name: "Server Actions", desc: lang === "pt" ? "Mutações type-safe sem API Layer" : "Type-safe mutations without API Layer", icon: Server },
  { name: "ExcelJS", desc: lang === "pt" ? "Relatórios Excel gerados no servidor" : "Server-generated Excel reports", icon: FileSpreadsheet },
  { name: "Recharts", desc: lang === "pt" ? "Dashboard interativo com KPIs em tempo real" : "Interactive real-time KPI dashboard", icon: PieChart },
  { name: "Tailwind CSS", desc: lang === "pt" ? "Design system responsivo com dark mode" : "Responsive design system with dark mode", icon: Code2 },
  { name: "TypeScript", desc: lang === "pt" ? "Tipagem estática de ponta a ponta" : "End-to-end static typing", icon: Code2 },
];

const getNavSections = (lang: "pt" | "en") => [
  { id: "sm-hero", label: lang === "pt" ? "Visão Geral" : "Overview", icon: <BookOpen size={16} /> },
  { id: "sm-tech", label: "Stack", icon: <Code2 size={16} /> },
  { id: "sm-features", label: lang === "pt" ? "Funcionalidades" : "Features", icon: <Layers size={16} /> },
  { id: "sm-architecture", label: lang === "pt" ? "Arquitetura" : "Architecture", icon: <Server size={16} /> },
];

const getCmdActions = (lang: "pt" | "en", features: any[], techDetails: any[]) => [
  { id: "gh", label: lang === "pt" ? "Ver Código no GitHub" : "View Code on GitHub", icon: <Github size={16} />, keywords: "github codigo repo code", action: () => window.open("https://github.com/GabrielLuna1/stockmaster", "_blank") },
  { id: "demo", label: lang === "pt" ? "Abrir Demo Online" : "Open Live Demo", icon: <ExternalLink size={16} />, keywords: "demo online ao vivo live", action: () => window.open("https://stock-master-pro-app.vercel.app/", "_blank") },
  ...features.map((f, i) => ({
    id: `feat-${i}`, label: `Feature: ${f.title}`, icon: <BarChart3 size={16} />, keywords: `${f.title} feature funcionalidade`, action: () => document.getElementById("sm-features")?.scrollIntoView({ behavior: "smooth" }),
  })),
  ...techDetails.map((t, i) => ({
    id: `tech-${i}`, label: `Tech: ${t.name}`, icon: <Code2 size={16} />, keywords: `${t.name} ${t.desc} tecnologia tech`, action: () => document.getElementById("sm-tech")?.scrollIntoView({ behavior: "smooth" }),
  })),
];

const pageContent = {
  pt: {
    backBtn: "Voltar para Projetos",
    heroBadge: "Sistema Enterprise",
    heroDesc: "Um Mini-ERP completo para gestão logística e financeira, construído com Next.js 14, MongoDB e NextAuth. Foco em segurança, performance e escalabilidade empresarial.",
    btnCode: "Ver Código",
    btnDemo: "Ver Demo Online",
    statsTitle: "Sistema em Números",
    stats: [
      { label: "Níveis de Acesso", value: "3" },
      { label: "Módulos", value: "6" },
      { label: "Tipos de Relatório", value: "5" },
      { label: "KPIs no Dashboard", value: "12" },
      { label: "Middleware Protections", value: "Edge" },
      { label: "Autenticação", value: "JWT" },
    ],
    techTitle: "Stack Tecnológica",
    featuresTitle: "Funcionalidades Estratégicas",
    featuresDesc: "Cada funcionalidade foi desenhada para resolver problemas reais de gestão empresarial.",
    archTitle: "Arquitetura do Sistema",
    archDesc: "MVC adaptado para o App Router, com Server Actions e Middleware edge para segurança máxima.",
  },
  en: {
    backBtn: "Back to Projects",
    heroBadge: "Enterprise System",
    heroDesc: "A complete Mini-ERP for logistics and financial management, built with Next.js 14, MongoDB, and NextAuth. Focused on security, performance, and enterprise scalability.",
    btnCode: "View Code",
    btnDemo: "Live Demo",
    statsTitle: "System by the Numbers",
    stats: [
      { label: "Access Levels", value: "3" },
      { label: "Modules", value: "6" },
      { label: "Report Types", value: "5" },
      { label: "Dashboard KPIs", value: "12" },
      { label: "Middleware Protections", value: "Edge" },
      { label: "Authentication", value: "JWT" },
    ],
    techTitle: "Technology Stack",
    featuresTitle: "Strategic Features",
    featuresDesc: "Each feature was engineered to solve real-world enterprise management bottlenecks.",
    archTitle: "System Architecture",
    archDesc: "MVC pattern adapted for the App Router, featuring Server Actions and Edge Middleware for maximum security.",
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

      <ParallaxOrb color="bg-primary/10" size={500} top="5%" left="-10%" blur={140} yOffset={150} />
      <ParallaxOrb color="bg-blue-500/10" size={400} bottom="20%" right="-10%" blur={120} yOffset={-100} />

      {/* Hero */}
      <section id="sm-hero" className="container mx-auto px-4 max-w-6xl mb-24 relative z-10">
        <Link href="/projetos" className="inline-flex items-center text-secondary hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
          {t.backBtn}
        </Link>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <Server size={16} />
              {t.heroBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
            >
              Stock<span className="text-primary">Master</span> Pro
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary leading-relaxed mb-8"
            >
              {t.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://github.com/GabrielLuna1/stockmaster" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                <Github size={20} />
                {t.btnCode}
              </a>
              <a href="https://stock-master-pro-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface/50 border border-white/10 text-white font-medium hover:bg-white/5 transition-all hover:-translate-y-0.5">
                <ExternalLink size={20} />
                {t.btnDemo}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-surface/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">{t.statsTitle}</h3>
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="bg-background/50 rounded-xl p-4 border border-white/5">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="sm-tech" className="border-y border-white/5 bg-surface/20 py-20 mb-24 relative">
        <div className="absolute inset-0 bg-cross opacity-30" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-semibold text-secondary uppercase tracking-widest mb-12 text-center"
          >
            {t.techTitle}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {techDetails.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-background/50 border border-white/5 rounded-xl p-5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{tech.name}</h3>
                  <p className="text-xs text-secondary/70">{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="sm-features" className="container mx-auto px-4 max-w-6xl mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-white mb-4"
        >
          {t.featuresTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-secondary mb-12 max-w-2xl"
        >
          {t.featuresDesc}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-surface/30 border border-white/5 p-6 rounded-2xl hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-secondary/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Arquitetura */}
      <section id="sm-architecture" className="container mx-auto px-4 max-w-6xl mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-black text-white mb-4"
        >
          {t.archTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-secondary mb-12 max-w-2xl"
        >
          {t.archDesc}
        </motion.p>

        <div className="space-y-4">
          {architectureLayers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface/30 border border-white/5 rounded-xl p-6 hover:bg-surface/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`w-1 h-full min-h-[80px] bg-white/5 rounded-full mt-1 shrink-0`} style={{ width: 3, backgroundColor: `color-mix(in srgb, ${layer.color.replace('text-', '')} 20%, transparent)` }} />
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${layer.color} mb-3`}>{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-secondary/80">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${layer.color} bg-current shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectNavigation
        prevProject={{ id: "work-hunter", name: "WorkHunter" }}
      />
    </main>
  );
}
