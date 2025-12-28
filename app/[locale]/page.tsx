// app/[locale]/page.tsx
import { Hero, Philosophy, Categories, HookProject, FinalCTA } from "../../components_/accueil";

const Page = () => {
  return (
    <main className="relative bg-background-deep selection:bg-primary selection:text-white">
      
      {/* 0. AMBIANCE LUMINEUSE (L'âme du site) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blob Indigo en haut à gauche */}
        <div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[180px] opacity-50"></div>
        {/* Blob Purple en bas à droite */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[150px] opacity-50"></div>
      </div>

      {/* LAYER 01 : HERO (Translucide) */}
      <section className="sticky top-0 h-screen z-10 flex items-center justify-center bg-transparent">
        <Hero />
      </section>

      {/* LAYER 02 : PHILOSOPHY (La plaque de verre fumé) */}
      <section className="sticky top-0 min-h-screen z-20 bg-background-surface/80 backdrop-blur-2xl shadow-[0_-50px_100px_rgba(0,0,0,0.5)] border-t border-white/10">
        <div className="absolute inset-0 bg-metal-shine opacity-30"></div> {/* Effet reflet métal */}
        <Philosophy />
      </section>

      {/* LAYER 03 : CATEGORIES (L'Explosion Électrique) */}
      <section className="sticky top-0 min-h-screen z-30 bg-background-card/90 backdrop-blur-3xl shadow-[0_-50px_100px_rgba(0,0,0,0.6)] border-t border-white/20">
        <Categories />
      </section>

      {/* LAYER 04 : HOOK PROJECT (Le Focus) */}
      <section className="sticky top-0 min-h-screen z-40 bg-background-surface shadow-[0_-50px_100px_rgba(0,0,0,0.7)] border-t border-white/5">
        <HookProject />
      </section>

      {/* LAYER 05 : FINAL CTA (Le Final en Noir Absolu) */}
      <section className="relative z-50 bg-black border-t border-primary/30">
        <FinalCTA />
      </section>

    </main>
  );
};

export default Page;