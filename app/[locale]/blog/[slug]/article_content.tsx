"use client";

import { useTranslations } from 'next-intl';
import { Article } from '@/lib/mock-articles'; // Assurez-vous d'importer Article
import { Clock, Calendar, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

// --- TYPE DE THÈME ---
export type Theme = {
  text: string;
  bg: string;
  border: string;
  glow: string;
  prose: string;
};

// --- CONFIGURATION DES COULEURS DYNAMIQUES (Utility) ---
export const getTheme = (category: string): Theme => {
  switch (category) {
    case 'web': return { 
      text: 'text-indigo-500', 
      bg: 'bg-indigo-500', 
      border: 'border-indigo-500', 
      glow: 'shadow-indigo-500/30',
      prose: 'prose-indigo' 
    };
    case 'mobile': return { 
      text: 'text-purple-500', 
      bg: 'bg-purple-500', 
      border: 'border-purple-500', 
      glow: 'shadow-purple-500/30',
      prose: 'prose-purple' 
    };
    case 'ai': return { 
      text: 'text-yellow-500', 
      bg: 'bg-yellow-500', 
      border: 'border-yellow-500', 
      glow: 'shadow-yellow-500/30',
      prose: 'prose-yellow' 
    };
    case 'data': return { 
      text: 'text-emerald-500', 
      bg: 'bg-emerald-500', 
      border: 'border-emerald-500', 
      glow: 'shadow-emerald-500/30',
      prose: 'prose-emerald' 
    };
    default: return { 
      text: 'text-gray-500', 
      bg: 'bg-gray-500', 
      border: 'border-gray-500', 
      glow: 'shadow-gray-500/30',
      prose: 'prose-gray' 
    };
  }
};

// --- CLIENT COMPONENT POUR L'INTERACTIVITÉ ---
interface ArticleContentProps {
    article: Article;
    theme: Theme;
}

export const ArticleContent = ({ article, theme }: ArticleContentProps) => {
    const t = useTranslations('Blog');
    
    // États pour l'UX
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState<string>("");

    // Utilisation de useMemo pour mémoriser les sections de la TOC
    const toc = useMemo(() => article.toc, [article.toc]);

    // --- LOGIQUE DE SCROLL & TOC ---
    useEffect(() => {
        const handleScroll = () => {
            // 1. Barre de progression
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            // Évite la division par zéro si la page est vide ou très courte
            const scroll = windowHeight > 0 ? `${totalScroll / windowHeight}` : '0';
            setScrollProgress(Number(scroll));

            // 2. Détection de la section active pour la TOC
            const sections = toc.map(s => document.getElementById(s.id));
            let current = "";
            sections.forEach((section) => {
                if (section) {
                    // Si le haut de la section est visible (avec un décalage de 150px)
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 150) {
                        current = section.id;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Nettoyage de l'écouteur d'événement
        return () => window.removeEventListener('scroll', handleScroll);
    }, [toc]);


    return (
        <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
          
          {/* 1. BARRE DE PROGRESSION (Sticky Top) */}
          <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-100 dark:bg-white/5">
            <div 
              className={`h-full ${theme.bg} transition-all duration-100 ease-out`}
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* 2. HERO ARTICLE (Massif & Impressionnant) */}
          <section className="relative pt-32 pb-20 px-6 border-b border-gray-100 dark:border-white/5 overflow-hidden">
             {/* Fond Gradient Dynamique */}
             <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${theme.bg} opacity-5 blur-[120px] -z-10 rounded-full`}></div>
             
             <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Badge Catégorie */}
                <Link href={`/projects/${article.category}`} className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.border} border-opacity-20 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-8 hover:scale-105 transition-transform`}>
                    <span className={`w-2 h-2 rounded-full ${theme.bg}`}></span>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.text}`}>
                        Module: {article.category}
                    </span>
                </Link>

                {/* Titre */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                  {article.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Méta-données */}
                <div className="flex items-center justify-center gap-6 mt-8 text-sm font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} read</span>
                    </div>
                </div>
             </div>
          </section>

          {/* 3. CORPS DE L'ARTICLE (Layout 3 colonnes) */}
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* COLONNE GAUCHE : TOC (Sticky) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32">
                        <Link href="/blog" className="inline-flex items-center text-xs font-mono text-gray-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors group">
                            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
                            INDEX
                        </Link>

                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-6">
                            Table of Contents
                        </h4>
                        
                        <nav className="space-y-1 relative border-l border-gray-200 dark:border-white/10">
                            {toc.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`block pl-4 py-2 text-sm transition-all border-l-2 -ml-[2px] ${
                                        activeSection === item.id 
                                        ? `${theme.border} ${theme.text} font-bold bg-gray-50 dark:bg-white/5` 
                                        : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
                                    }`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>

                        {/* Actions Rapides */}
                        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/5 flex gap-4">
                            <button className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300">
                                <Share2 className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300">
                                <Bookmark className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </aside>

                {/* COLONNE CENTRALE : CONTENU */}
                <article className="lg:col-span-7">
                    {/* Utilisation de Tailwind Typography (prose) pour styliser le HTML brut. */}
                    <div 
                        className={`
                            prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-black prose-headings:tracking-tight
                            prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300
                            prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-gray-200 dark:prose-img:border-white/10
                            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10
                            ${theme.prose}
                        `}
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>

                {/* COLONNE DROITE : (Optionnelle - Espace vide pour l'équilibre ou pubs futures) */}
                <div className="hidden xl:block xl:col-span-2">
                    {/* Espace vide */}
                </div>

            </div>
          </div>

          {/* 4. FOOTER ARTICLE */}
          <div className="border-t border-gray-200 dark:border-white/5 py-20 bg-gray-50 dark:bg-neutral-950/30">
             <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="font-mono text-xs text-gray-400 mb-6 uppercase tracking-widest">Fin de transmission</p>
                <h3 className="text-2xl font-bold mb-8">Vous avez aimé cet article ?</h3>
                <div className="flex justify-center gap-4">
                    <Link 
                        href="/blog" 
                        className={`px-8 py-3 rounded bg-slate-900 dark:bg-white text-white dark:text-black font-bold hover:scale-105 transition-transform shadow-lg`}
                    >
                        Lire d'autres articles
                    </Link>
                    <Link 
                        href="/contact" 
                        className="px-8 py-3 rounded border border-gray-300 dark:border-white/20 hover:bg-white dark:hover:bg-white/10 transition-colors font-bold"
                    >
                        Me contacter
                    </Link>
                </div>
             </div>
          </div>

        </main>
    );
}