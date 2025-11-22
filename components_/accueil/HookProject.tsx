import Link from 'next/link';
import Image from 'next/image'; 
import { useTranslations } from 'next-intl'; // <-- Import nécessaire

const HookProject = () => {
  // Connexion aux traductions pour la section "HookProject"
  const t = useTranslations('HookProject');

  return (
    <section className="py-24 bg-black text-white border-t border-white/5 overflow-hidden relative">
      
      {/* Élément décoratif d'arrière-plan */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-indigo-900/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLONNE GAUCHE : Les Données Techniques */}
          <div className="order-2 lg:order-1">
            
            {/* Badge "Projet Vedette" style Terminal */}
            <div className="inline-flex items-center gap-2 mb-6 text-indigo-400 font-mono text-xs tracking-widest uppercase">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              {t('badge')}
            </div>

            {/* Titre du Projet */}
            <h2 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">
              {t('title')}<span className="text-indigo-600">.sys</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light">
              {t('subtitle')}
            </p>

            {/* Bloc "Problem vs Solution" (La Preuve) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Stat 1 : Le Gain de Temps */}
              <div className="p-4 border-l-2 border-indigo-500 bg-white/5">
                <p className="text-xs text-gray-400 uppercase mb-1">{t('stat_1_label')}</p>
                <p className="text-2xl font-bold text-white">30min <span className="text-gray-500">→</span> 2min</p>
                <p className="text-xs text-gray-500 mt-1">{t('stat_1_desc')}</p>
              </div>
              {/* Stat 2 : La Stack */}
              <div className="p-4 border-l-2 border-purple-500 bg-white/5">
                <p className="text-xs text-gray-400 uppercase mb-1">{t('stat_2_label')}</p>
                <p className="text-lg font-bold text-white">Next.js + Tailwind</p>
                <p className="text-xs text-gray-500 mt-1">{t('stat_2_desc')}</p>
              </div>
            </div>

            {/* Description Narrative courte */}
            <p className="text-gray-400 leading-relaxed mb-10 border-l border-white/10 pl-4 italic">
              {t('description')}
            </p>

            {/* Bouton d'Action */}
            <Link 
              href="/projects/edutrack" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors"
            >
              <span>{t('cta_inspect')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* COLONNE DROITE : Le Visuel (Mockup) */}
          <div className="order-1 lg:order-2 relative group perspective-1000">
            {/* Effet de lueur derrière l'image */}
            <div className="absolute inset-0 bg-indigo-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Container de l'image avec bordure technique */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transform group-hover:rotate-1 transition-transform duration-500">
              
              {/* Barre de fenêtre style "Browser" */}
              <div className="h-8 bg-neutral-800 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>

              {/* Placeholder visuel */}
              <div className="aspect-video bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                 <span className="text-neutral-600 font-mono text-sm">Agriconnect visual</span>
                 {/**/} <Image 
                   src="/images/agri.png" 
                   alt="Dashboard   AgriConnect" 
                   fill
                   className="object-cover"
                 /> 
                 {/**/}
              </div>
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HookProject;