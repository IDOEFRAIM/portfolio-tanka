import Link from 'next/link';
import Image from 'next/image'; 
import { useTranslations } from 'next-intl';

const HookProject = () => {
  const t = useTranslations('HookProject');

  return (
    <section className="relative flex items-center py-24 lg:py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-white border-t border-slate-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* COLONNE GAUCHE : TEXTE (8 colonnes pour plus d'espace) */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            
            {/* Badge Minimaliste */}
            <div className="inline-flex items-center gap-2 mb-10 px-0 py-1 text-slate-400 font-bold text-[10px] tracking-[0.3em] uppercase border-b border-slate-100 dark:border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white"></span>
              {t('badge')}
            </div>

            {/* Titre : Typographie forte, pas de gradient */}
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-[0.85] uppercase italic">
              {t('title')}<span className="not-italic font-black text-slate-300 dark:text-slate-800">.sys</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 font-normal max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Stats : Style Liste au lieu de Cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16 border-l border-slate-100 dark:border-white/10 pl-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t('stat_1_label')}</p>
                <p className="text-4xl font-light tracking-tight italic text-slate-900 dark:text-white">30min <span className="text-slate-300 dark:text-slate-700 mx-2">→</span> 2min</p>
                <p className="text-[10px] font-medium text-slate-400 mt-3 uppercase tracking-wider">{t('stat_1_desc')}</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{t('stat_2_label')}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Next.js + Tailwind</p>
                <p className="text-[10px] font-medium text-slate-400 mt-3 uppercase tracking-wider">{t('stat_2_desc')}</p>
              </div>
            </div>

            {/* Bouton style "Lien Souligné" ou "Bloc Noir" */}
            <Link 
              href="/en/projects" 
              className="group relative inline-flex items-center gap-6 text-slate-900 dark:text-white"
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-slate-900 dark:border-white pb-1 group-hover:pr-4 transition-all duration-300">
                {t('cta_inspect')}
              </span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* COLONNE DROITE : LE VISUEL (5 colonnes) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            
            {/* Frame Minimaliste sans fioritures */}
            <div className="relative overflow-hidden bg-slate-50 dark:bg-white/5 p-4 border border-slate-100 dark:border-white/5 transition-all duration-700">
              
              {/* Header du Mockup réduit au strict minimum */}
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10"></div>
                </div>
                <div className="text-[9px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em]">
                  agriconnect.sys
                </div>
              </div>

              {/* L'image : Naturelle, sans overlays techniques */}
              <div className="aspect-[4/5] relative grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
                <Image 
                  src="/images/agri.png" 
                  alt="Dashboard AgriConnect" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Légende discrète sous l'image */}
            <p className="mt-4 text-[9px] font-mono text-slate-400 dark:text-slate-600 uppercase text-right tracking-widest">
              [ Case Study 01 / 2024 ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HookProject;