import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[100dvh] flex items-start lg:items-center justify-center bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300 pt-48 pb-20 lg:pt-0 lg:pb-0">
      
      {/* 1. FOND NEUTRE ET NATUREL */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grille simple et discrète sans masque radial complexe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 2. HEADER : Badge minimaliste */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-200 dark:border-white/10 rounded-none bg-transparent backdrop-blur-sm transition-all duration-300">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase">
              {t('badge')}
            </span>
          </div>
        </div>

        {/* 3. CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-tight leading-[0.85] mb-6">
              {t('title_line1')} <br />
              <span className="text-slate-400 dark:text-slate-500 italic font-light">
                {t('title_line2')}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed mt-8 mx-auto md:mx-0">
              {t.rich('description', {
                bold: (chunks) => <span className="text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white">{chunks}</span>
              })}
            </p>

            {/* Boutons - Style "Papier/Print" */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center md:justify-start">
              <Link 
                href="/en/projects" 
                className="group relative px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-medium text-lg transition-all duration-300 hover:opacity-90"
              >
                {t('cta_primary')}
              </Link>

              <Link 
                href="https://wa.me/+22601479800" 
                className="group px-0 py-4 text-slate-900 dark:text-white font-medium text-lg flex items-center justify-center gap-3 border-b border-transparent hover:border-slate-900 dark:hover:border-white transition-all"
              >
                <span>{t('cta_secondary')}</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Colonne Droite : Stats épurées */}
          <div className="lg:col-span-4 flex flex-col gap-10 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 pt-10 lg:pt-0 pl-0 lg:pl-10 mt-10 lg:mt-0">
            
            <div className="relative">
              <h3 className="text-5xl font-light text-slate-900 dark:text-white tracking-tighter">{t('stat_1_value')}</h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-2">{t('stat_1_label')}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 leading-snug max-w-xs">{t('stat_1_desc')}</p>
            </div>

            <div className="relative">
              <h3 className="text-5xl font-light text-slate-900 dark:text-white tracking-tighter">AI & Dev</h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-2">{t('stat_2_label')}</p>
            </div>

          </div>
        </div>

        {/* 4. FOOTER HERO - Minimaliste */}
        <div className="mt-20 lg:mt-32 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 dark:text-slate-600 font-medium text-[10px] uppercase tracking-[0.3em]">
          <span>{t('footer_routine')}</span>
          <span>{t('footer_loc')}</span>
          <span>{t('footer_stack')}</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;