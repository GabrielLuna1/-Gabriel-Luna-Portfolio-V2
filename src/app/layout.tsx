import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Imports dos Componentes
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { CommandMenu } from "@/components/ui/CommandMenu"; 
import { LanguageProvider } from "@/contexts/LanguageContext"; // Importado aqui

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Gabriel Luna | Front-end Developer",
  description: "Desenvolvedor Front-end especializado em React, Next.js e Interfaces Modernas.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gabriel Luna | Portfolio",
    description: "Transformando ideias em código de alta performance.",
    siteName: "Gabriel Luna Portfolio",
    images: [
      {
        url: "/portfolio-v2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans bg-background text-white antialiased`}>
        
        {/* 🚨 CORREÇÃO: O LanguageProvider precisa começar aqui */}
        <LanguageProvider>
          
          {/* 1. Textura de fundo */}
          <div className="bg-noise" />
          
          {/* 2. Menu de Navegação */}
          <Header />
          
          {/* 3. Funcionalidades Flutuantes */}
          <BackToTop />
          <CommandMenu />
          
          {/* 4. Conteúdo da Página */}
          {children}

          {/* 5. Rodapé */}
          <Footer />
          
        </LanguageProvider> 
        {/* 🚨 E terminar aqui, fechando tudo dentro dele */}
        
      </body>
    </html>
  );
}