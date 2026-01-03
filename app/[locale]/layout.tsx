import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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

// 2. Métadonnées SEO
export const metadata = {
  title: "Efraim | Full-Stack & AI Engineer",
  description: "Portfolio Engineering & AI. Discipline, Rigueur, Impact.",
};

// 3. Typage des Props (Spécifique Next.js 15/16)
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    // suppressHydrationWarning est OBLIGATOIRE avec next-themes pour éviter les erreurs de mismatch
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      
      <body className="bg-white text-slate-900 dark:bg-black dark:text-white antialiased min-h-screen selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        
        {/* Provider de Traduction */}
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            {/* Provider de Thème (Dark/Light) */}
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {/* Barre de réglages (Langue + Thème)
            <div className="fixed top-20 right-4 z-[60]">
                <SettingsBar />
            </div> */}

            {/* ✅ Navbar globale */}
            <NavBar />
            <BackButton />

            {/* Contenu de la page */}
            {children}
            
          </ThemeProvider>
          </QueryProvider>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}