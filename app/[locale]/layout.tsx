import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components_/ThemeProvider";
import QueryProvider from "@/components_/QueryProvider";
import SettingsBar from '@/components_/SettingsBar';
import NavBar from '@/components_/NavBar';
import BackButton from '@/components_/BackButton'
import "@/app/globals.css";

// 1. Configuration des polices
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

// 2. Métadonnées SEO
export const metadata: Metadata = {
  title: "Efraim Ido | AI Solutions Architect & CEO",
  description: "Executive portfolio detailing multi-agent systems, GraphRAG research, and large-scale architecture leadership.",
};

// 3. Typage des Props (Spécifique Next.js 15/16)
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Génération statique des routes pour la performance (SSG)
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}];
}

export default async function LocaleLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;
  
  // Active l'optimisation statique pour ce layout
  setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    // suppressHydrationWarning est OBLIGATOIRE avec next-themes pour éviter les erreurs de mismatch
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} ${newsreader.variable}`} suppressHydrationWarning>
      
      <body className="bg-brand-paper text-brand-deep antialiased min-h-screen selection:bg-primary/70 selection:text-brand-deep tracking-tight">
        
        {/* Provider de Traduction */}
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            {/* Provider de Thème (Dark/Light) */}
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {/* Barre de réglages (Langue + Thème)
            <div className="fixed top-20 right-4 z-[60]">
                <SettingsBar />
            </div> */}

            {/* reducedMotion="user" respecte prefers-reduced-motion : Framer Motion
                désactive alors les animations de transform et ne garde que l'opacité. */}
            <MotionConfig reducedMotion="user">
              {/* ✅ Navbar globale */}
              <NavBar />
              <BackButton />

              {/* Contenu de la page */}
              {children}
            </MotionConfig>

          </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}