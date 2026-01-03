import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-gray-50 dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 pt-40 pb-20 lg:pt-40 lg:pb-0">
      
      {/* 1. FOND GRAPHIQUE (Plus riche et captivant) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Grille plus élégante avec masque radial */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Lueurs d'ambiance (Aurora Effect) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] mix-blend-screen animate-pulse duration-[5000ms] delay-1000"></div>
        
        {/* Spot de lumière zénithal */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-[100%] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 2. HEADER : Badge (Plus premium) */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-sm transition-all hover:bg-white dark:hover:bg-white/10 hover:scale-105 duration-300 cursor-default group">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-widest uppercase group-hover:text-primary transition-colors">
              {t('badge')}
            </span>
          </div>
        </div>

        {/* 3. CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Colonne Gauche : Message */}
          <div className="lg:col-span-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              {t('title_line1')} <br />
              {/* Utilisation du GRADIENT CENTRALISÉ (bg-hero-gradient) */}
              <span className="text-transparent bg-clip-text bg-hero-gradient">
                {t('title_line2')}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed mt-8 mx-auto md:mx-0">
              {t.rich('description', {
                // Utilise la couleur primary pour la bordure
                bold: (chunks) => <span className="text-slate-900 dark:text-white font-bold border-b border-primary">{chunks}</span>
              })}
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
              <Link 
                href="/en/projects" 
                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-lg overflow-hidden rounded-none hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <span className="relative z-10 mix-blend-difference dark:mix-blend-normal">{t('cta_primary')}</span>
                {/* L'animation de survol utilise PRIMARY */}
                <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0"></div>
              </Link>

              <Link 
                href="https://wa.me/+22601479800" 
                className="group px-8 py-4 border border-gray-300 dark:border-white/20 text-slate-700 dark:text-white font-mono text-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>{t('cta_secondary')}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Colonne Droite : Stats / Preuves */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-6 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 pt-8 lg:pt-0 pl-0 lg:pl-8 mt-8 lg:mt-0 transition-colors">
            
            {/* Carte Stat 1 */}
            <div className="group/card relative p-6 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-2xl transition-all hover:-translate-y-1 duration-300 hover:border-primary/30 hover:bg-white/80 dark:hover:bg-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-primary mb-3 p-3 bg-primary/10 rounded-lg w-fit group-hover/card:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{t('stat_1_value')}</h3>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{t('stat_1_label')}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 leading-relaxed">{t('stat_1_desc')}</p>
              </div>
            </div>

            {/* Carte Stat 2 */}
            <div className="group/card relative p-6 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-2xl transition-all hover:-translate-y-1 duration-300 hover:border-secondary/30 hover:bg-white/80 dark:hover:bg-white/10 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10">
                <div className="text-secondary mb-3 p-3 bg-secondary/10 rounded-lg w-fit group-hover/card:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">AI & Dev</h3>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{t('stat_2_label')}</p>
              </div>

          </div>
        </div>
        </div>

        {/* 4. FOOTER HERO */}
        <div className="mt-12 lg:mt-24 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest transition-colors">
          <span>{t('footer_routine')}</span>
          <span className="hidden md:inline">•</span>
          <span>{t('footer_loc')}</span>
          <span className="hidden md:inline">•</span>
          <span>{t('footer_stack')}</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;