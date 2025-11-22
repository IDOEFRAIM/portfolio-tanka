import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      
      {/* 1. FOND GRAPHIQUE (Adapté Dark/Light) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grille Light (Lignes noires subtiles) */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Grille Dark (Lignes blanches subtiles) */}
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Lueur Centrale (Utilise la couleur PRIMARY) */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* 2. HEADER : Badge */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-mono text-gray-600 dark:text-gray-300 tracking-wider uppercase">
              {t('badge')}
            </span>
          </div>
        </div>

        {/* 3. CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Colonne Gauche : Message */}
          <div className="lg:col-span-8 text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              {t('title_line1')} <br />
              {/* Utilisation du GRADIENT CENTRALISÉ (bg-hero-gradient) */}
              <span className="text-transparent bg-clip-text bg-hero-gradient">
                {t('title_line2')}
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed mt-8">
              {t.rich('description', {
                // Utilise la couleur primary pour la bordure
                bold: (chunks) => <span className="text-slate-900 dark:text-white font-bold border-b border-primary">{chunks}</span>
              })}
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
              <Link 
                href="/projects" 
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
          <div className="lg:col-span-4 flex flex-col gap-6 border-l border-gray-200 dark:border-white/10 pl-0 lg:pl-8 mt-8 lg:mt-0 transition-colors">
            
            {/* Carte Stat 1 */}
            <div className="p-6 bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none transition-colors">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t('stat_1_value')}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{t('stat_1_label')}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{t('stat_1_desc')}</p>
            </div>

            {/* Carte Stat 2 */}
            <div className="p-6 bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none transition-colors">
               <div className="text-secondary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">AI & Dev</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{t('stat_2_label')}</p>
            </div>

          </div>
        </div>

        {/* 4. FOOTER HERO */}
        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-wrap gap-8 text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest transition-colors">
          <span>{t('footer_routine')}</span>
          <span>{t('footer_loc')}</span>
          <span>{t('footer_stack')}</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;