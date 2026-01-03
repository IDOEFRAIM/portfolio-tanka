// app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { Hero, Philosophy, Categories, HookProject, FinalCTA } from "../../components_/accueil";
import PricingSection from "../../components_/pricingOptions";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative bg-background-deep selection:bg-primary selection:text-white">
      
      {/* 0. AMBIANCE LUMINEUSE (L'âme du site) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blob Indigo en haut à gauche */}
        <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[180px] opacity-50"></div>
        {/* Blob Purple en bas à droite */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[150px] opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <Hero />
        <Philosophy />
        <Categories />
        <HookProject />
        <PricingSection />
        <FinalCTA />
      </div>

    </main>
  );
}