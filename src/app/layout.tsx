import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Imports dos Componentes
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AutoUpdate } from "@/components/utils/AutoUpdate"; // <--- Importado

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Gabriel Luna | Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em React, Next.js, Node.js e Arquitetura de Software.",
  icons: {
    icon: "/favicon.svg", // Certifique-se de ter esse arquivo ou remova essa linha
  },
  openGraph: {
    title: "Gabriel Luna | Portfolio",
    description: "Transformando ideias em código de alta performance.",
    siteName: "Gabriel Luna Portfolio",
    images: [
      {
        url: "/portfolio-v2.png", // Certifique-se de ter essa imagem em public/
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
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-background text-white antialiased`}
      >
        <LanguageProvider>
          {/* 1. AutoUpdate: Verifica versões novas invisivelmente */}
          <AutoUpdate />

          {/* 2. Textura de fundo */}
          <div className="bg-noise" />

          {/* 3. Interface Global */}
          <Header />
          <BackToTop />
          <CommandMenu />

          {/* 4. Conteúdo da Página */}
          <main>{children}</main>

          {/* 5. Rodapé */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
