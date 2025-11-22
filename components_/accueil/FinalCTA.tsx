import { useTranslations } from 'next-intl';

const FinalCTA = () => {
  const t = useTranslations('FinalCTA');

  return (
    <section className="relative py-32 bg-gray-50 dark:bg-black text-slate-900 dark:text-white border-t border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
      
      {/* Fond : Grille Texture (Adaptée Dark/Light) */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Grille Light Mode (Lignes noires très transparentes) */}
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>
         {/* Grille Dark Mode (Lignes blanches très transparentes) */}
         <div className="absolute inset-0 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* 1. Le Message "Mindset" */}
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
          {t('title_line1')}<br />
          {/* Utilisation du GRADIENT CENTRALISÉ (bg-hero-gradient) */}
          <span className="text-transparent bg-clip-text bg-hero-gradient">
            {t('title_line2')}
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-light">
          {t('description')}
          <br />
          <span className="text-slate-900 dark:text-white font-mono mt-2 block font-bold">
            {t('cmd_init')}
          </span>
        </p>

        {/* 2. Les Boutons d'Action (Style Industriel) */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          
          {/* Bouton Calendly : Utilise la couleur PRIMARY :"https://calendly.com/efraim/15min"*/}
          <a
            href="https://wa.me/+2120782901759"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-lg tracking-wide hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            <span className="flex items-center gap-2">
              <span>{t('btn_calendar')}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </a>

          {/* Bouton CV : Bordures dynamiques */}
          <a
            href="/cv.pdf"
            target="_blank" 
            className="px-8 py-4 border border-gray-300 dark:border-white/20 text-slate-600 dark:text-gray-300 font-mono text-lg hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span>{t('btn_cv')}</span>
          </a>
        </div>

        {/* 3. Connecteurs Sociaux (Ports) */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-10">
          <p className="text-xs font-mono text-gray-500 dark:text-gray-600 mb-6 uppercase tracking-widest">{t('connect_label')}</p>
          
          <div className="flex justify-center gap-8">
            {/* LinkedIn - Hover vers PRIMARY */}
            <a href="https://www.linkedin.com/in/efraim-m-d-ido-a30021276" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            
            {/* GitHub - Hover vers PRIMARY (ou noir en light, blanc en dark) */}
            <a href="https://github.com/IDOEFRAIM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {/* Email - Hover vers DATA (Vert) */}
            <a href="mailto:idoefraim06@gmail.com" className="text-gray-400 hover:text-data transition-colors hover:scale-110 transform duration-200">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;