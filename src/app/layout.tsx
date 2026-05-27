import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AutoUpdate } from "@/components/utils/AutoUpdate";
import { EnhancedCursor } from "@/components/ui/EnhancedCursor";
import { CaseChat } from "@/components/features/CaseChat";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Luna | Full Stack Developer",
  description:
    "Desenvolvedor Full Stack especializado em React, Next.js, Node.js e Arquitetura de Software.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Gabriel Luna | Portfolio",
    description: "Transformando ideias em codigo de alta performance.",
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
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-background text-white antialiased`}
      >
        <ScrollProgress />
        <EnhancedCursor />
        <LanguageProvider>
          <AutoUpdate />
          <div className="bg-noise" />
          <Header />
          <BackToTop />
          <CommandMenu />
          <CaseChat />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
