import Link from 'next/link';
import Image from 'next/image'; 
import { useTranslations } from 'next-intl';

const HookProject = () => {
  const t = useTranslations('HookProject');

  return (
    // CHANGEMENT : bg-background-surface + sticky + shadow-layer
    <section className="sticky top-0 min-h-[100dvh] flex items-center py-16 lg:py-24 bg-background-surface/90 backdrop-blur-2xl text-white border-t border-white/10 overflow-hidden shadow-layer">
      
      {/* 1. EFFET ATMOSPHÉRIQUE : Le halo qui réagit au scroll */}
      <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* COLONNE GAUCHE : DATA & SPECS */}
          <div className="order-2 lg:order-1">
            
            {/* Badge style "Système" */}
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-[10px] tracking-[0.3em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('badge')}
            </div>

            {/* Titre avec Gradient Centralisé */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none italic uppercase">
              {t('title')}<span className="bg-hero-gradient bg-clip-text text-transparent">.sys</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 font-medium italic max-w-lg leading-snug">
              {t('subtitle')}
            </p>

            {/* Grille de stats style "DashBoard" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="p-6 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-2xl group hover:border-primary/30 transition-colors">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">{t('stat_1_label')}</p>
                <p className="text-3xl font-black text-white italic">30min <span className="text-primary">→</span> 2min</p>
                <p className="text-[10px] font-mono text-primary/60 mt-2 uppercase">{t('stat_1_desc')}</p>
              </div>

              <div className="p-6 border border-white/5 bg-white/[0.03] backdrop-blur-md rounded-2xl group hover:border-secondary/30 transition-colors">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">{t('stat_2_label')}</p>
                <p className="text-xl font-black text-white uppercase italic tracking-tighter">Next.js + Tailwind</p>
                <p className="text-[10px] font-mono text-secondary/60 mt-2 uppercase">{t('stat_2_desc')}</p>
              </div>
            </div>

            {/* Bouton d'Action avec Effet Glow */}
            <Link 
              href="/en/projects" 
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] overflow-hidden"
            >
              <span className="relative z-10">{t('cta_inspect')}</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 group-hover:translate-x-2 transition-transform group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* COLONNE DROITE : LE MOCKUP DYNAMIQUE */}
          <div className="order-1 lg:order-2 relative group">
            {/* Halo de couleur spécifique au projet */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Frame du navigateur style "Industrial Design" */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-background-card shadow-2xl transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-500">
              
              {/* Header du Mockup */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-5 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                </div>
                <div className="mx-auto bg-white/5 px-4 py-1 rounded text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  agriconnect.sys / research
                </div>
              </div>

              {/* L'image avec un léger Shimmer */}
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900">
                <Image 
                  src="/images/agri.png" 
                  alt="Dashboard AgriConnect" 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Overlay de scanline technique */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HookProject;