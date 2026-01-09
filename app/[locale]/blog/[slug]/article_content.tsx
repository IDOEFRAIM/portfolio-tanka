'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Article } from '@/lib/types';
import type { Theme } from '@/lib/theme';
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, X, Copy, MessageCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

export default function ArticleContent({
  article,
  theme,
}: {
  article: Article;
  theme: Theme;
}) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isSharing, setIsSharing] = useState(false);

  // Scroll Progress Listener
  useEffect(() => {
    const updateProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setReadingProgress((currentScroll / scrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  // Scroll spy effect for TOC
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           setActiveSection(entry.target.id);
         }
       });
    }, { rootMargin: '-20% 0px -35% 0px' });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [article]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans relative">
      
      {/* READING PROGRESS BAR (Mobile & Desktop) */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-gray-100 dark:bg-gray-800/50">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* 1. HERO SECTION (Titre + Meta + Image) */}
      <header className="relative pt-32 pb-12 md:pt-40 md:pb-20 px-6 bg-gray-50 dark:bg-[#050505] border-b border-gray-100 dark:border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            
            {/* Category & Date */}
            <div className="flex items-center justify-center gap-4 mb-6 text-sm font-medium">
               <span className="uppercase tracking-widest text-primary font-bold">
                 {article.category}
               </span>
               <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
               <span className="text-gray-500 flex items-center gap-1">
                 <Calendar className="w-4 h-4" /> {article.date}
               </span>
               <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
               <span className="text-gray-500 flex items-center gap-1">
                 <Clock className="w-4 h-4" /> {article.readTime}
               </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
               {article.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto">
               {article.subtitle}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center justify-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden flex items-center justify-center text-xs font-bold text-gray-500">
                  ID
               </div>
               <div className="text-left">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Tanka B. Ido</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">@tankabido</p>
               </div>
            </div>
         </div>
      </header>

      {/* 2. COVER IMAGE (Large & Immersive) */}
      <div className="w-full px-4 md:px-6 -mt-8 md:-mt-12 mb-16 relative z-10 max-w-7xl mx-auto">
          <div className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 bg-gray-900">
             {article.coverImage && (
                <Image 
                  src={article.coverImage} 
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
             )}
          </div>
      </div>

      {/* 3. MAIN CONTENT LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
         
         {/* LEFT SIDEBAR (Socials + Back) */}
         <div className="hidden lg:block col-span-2 sticky top-32 h-fit">
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-12 group"
            >
              <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                 <ChevronLeft className="w-4 h-4" />
              </div>
              Back
            </Link>

            <div className="flex flex-col gap-4">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Share</p>
               <button 
                  onClick={() => setIsShareModalOpen(true)}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110"
               >
                  <Share2 className="w-4 h-4" />
               </button>
               <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                  <Bookmark className="w-4 h-4" />
               </button>
            </div>
         </div>

         {/* CENTER CONTENT */}
         <div className="col-span-1 lg:col-span-7">
            <div 
              className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl max-w-none text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
            
            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
               <p className="text-gray-500 italic">Thanks for reading.</p>
               <div className="flex gap-2">
                 <Link href="/blog" className="px-6 py-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                    More Articles
                 </Link>
               </div>
            </div>
         </div>

         {/* RIGHT SIDEBAR (Table Of Contents) */}
         <div className="hidden lg:block col-span-3 sticky top-32 h-fit">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">On this page</p>
            <nav className="relative flex flex-col">
               {/* Vertical Line */}
               {article.toc && article.toc.length > 0 && (
                  <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gray-200 dark:bg-white/10" />
               )}

               {article.toc?.map((section, index) => {
                 const activeIndex = article.toc?.findIndex(s => s.id === activeSection) ?? -1;
                 const isActive = activeSection === section.id;
                 const isPast = activeIndex !== -1 && index < activeIndex;

                 return (
                   <a 
                     key={section.id} 
                     href={`#${section.id}`}
                     className="relative flex items-start group py-2"
                     onClick={(e) => {
                       e.preventDefault();
                       document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                       setActiveSection(section.id);
                     }}
                   >
                     {/* Dot */}
                     <span className={`
                       absolute left-0 mt-[6px] w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 bg-white dark:bg-[#050505]
                       ${isActive 
                          ? 'border-primary bg-primary scale-110' 
                          : isPast
                             ? 'border-primary bg-primary'
                             : 'border-gray-200 dark:border-gray-700 group-hover:border-gray-400'
                       }
                     `}>
                     </span>

                     {/* Text */}
                     <span className={`
                       text-sm ml-8 transition-colors duration-300 block leading-tight
                       ${isActive 
                          ? 'text-primary font-bold' 
                          : isPast 
                             ? 'text-gray-700 dark:text-gray-300' 
                             : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                       }
                     `}>
                       {section.title}
                     </span>
                   </a>
                 );
               })}
            </nav>
         </div>

      </div>

      {/* SHARE MODAL OVERLAY */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
           <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl relative">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">Share Article</h3>
                 <button 
                   onClick={() => setIsShareModalOpen(false)}
                   className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                 >
                   <X className="w-5 h-5 text-gray-500" />
                 </button>
              </div>

              <div className="space-y-6">
                 
                 {/* 1. Native & Status Share */}
                 <div className="grid grid-cols-2 gap-4">
                    <button 
                      disabled={isSharing}
                      onClick={async () => {
                        if (isSharing) return;
                        if (navigator.share) {
                           try {
                              setIsSharing(true);
                              // Use origin + pathname to strip query params for cleaner sharing
                              const shareUrl = `${window.location.origin}${window.location.pathname}`;
                              await navigator.share({
                                 title: article.title,
                                 text: article.summary,
                                 url: shareUrl,
                              });
                           } catch (err) {
                              console.log('Share dismissed or failed', err);
                           } finally {
                              setIsSharing(false);
                           }
                        } else {
                           alert('Native sharing is not supported on this browser.');
                        }
                      }}
                      className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20 disabled:opacity-50"
                    >
                       <Share2 className="w-6 h-6" />
                       <span className="text-sm font-semibold">{isSharing ? 'Sharing...' : 'System Share'}</span>
                    </button>

                    <button 
                      onClick={() => {
                         const shareUrl = `${window.location.origin}${window.location.pathname}`;
                         const text = encodeURIComponent(`${article.title}\n${shareUrl}`);
                         window.open(`https://wa.me/?text=${text}`, '_blank');
                      }}
                       className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 hover:bg-green-100 dark:hover:bg-green-900/20 text-green-600 dark:text-green-400 transition-all border border-transparent hover:border-green-500/20"
                    >
                       <Smartphone className="w-6 h-6" />
                       <span className="text-sm font-semibold">WhatsApp Status</span>
                    </button>
                 </div>

                 <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-widest">Or send directly</span>
                    <div className="flex-grow border-t border-gray-200 dark:border-white/10"></div>
                 </div>

                 {/* 2. Direct WhatsApp Message */}
                 <form 
                   onSubmit={(e) => {
                     e.preventDefault();
                     if(!whatsappNumber) return;
                     const cleanNumber = whatsappNumber.replace(/\D/g, ''); 
                     const shareUrl = `${window.location.origin}${window.location.pathname}`;
                     const text = encodeURIComponent(`*${article.title}*\n_${article.summary}_\n\nRead here: ${shareUrl}`);
                     window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
                   }}
                   className="space-y-3"
                 >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                       Send to WhatsApp Number
                    </label>
                    <div className="flex gap-2">
                       <input 
                         type="tel" 
                         placeholder="Ex: 22890909090" // Example area code
                         value={whatsappNumber}
                         onChange={(e) => setWhatsappNumber(e.target.value)}
                         className="flex-1 p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                       />
                       <button 
                         type="submit"
                         className="p-3 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                       >
                          <MessageCircle className="w-5 h-5" />
                       </button>
                    </div>
                    <p className="text-xs text-gray-400">
                       Enter number with country code (e.g., 228...)
                    </p>
                 </form>
                 
                 {/* 3. Copy Link Fallback */}
                 <button 
                   onClick={() => {
                      const shareUrl = `${window.location.origin}${window.location.pathname}`;
                      navigator.clipboard.writeText(shareUrl);
                      alert('Link copied to clipboard!'); 
                   }}
                   className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                 >
                    <Copy className="w-4 h-4" /> Copy Link
                 </button>

              </div>
           </div>
        </div>
      )}

      <style jsx global>{`
         /* Typography Override/Polyfill */
         .prose h2 {
            font-size: 2rem;
            margin-top: 4rem;
            margin-bottom: 1.5rem;
            color: inherit;
            line-height: 1.2;
         }
         .prose p {
            line-height: 1.8;
            margin-bottom: 1.5rem;
         }
         .prose ul {
            list-style-type: disc;
            padding-left: 1.5em; /* L'indentation des listes */
            margin-bottom: 2rem;
            color: inherit; /* S'assurer que ça prend la couleur du parent */
         }
         .prose li {
            margin-bottom: 0.5em; /* Espacement entre les puces */
            padding-left: 0.5em; /* Espace entre la puce et le texte */
         }
         /* Fallback pour s'assurer que les marqueurs de liste sont visibles */
         .prose ul li::marker {
            color: var(--primary-color, #6366f1);
         }
         .prose blockquote {
            border-left: 4px solid #6366f1;
            padding-left: 1.5rem;
            margin: 2.5rem 0;
            font-style: italic;
            font-size: 1.25rem;
            background: linear-gradient(to right, rgba(99, 102, 241, 0.1), transparent);
            padding: 2rem;
            border-radius: 0 1rem 1rem 0;
         }
         .prose code {
            background-color: rgba(99, 102, 241, 0.1);
            color: #6366f1;
            padding: 0.2em 0.4em;
            border-radius: 0.25rem;
            font-family: monospace;
            font-size: 0.9em;
         }
         /* Smooth Scrolling */
         html {
            scroll-behavior: smooth;
         }
      `}</style>
    </div>
  );
}
