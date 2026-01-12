"use client";

import { useState } from 'react';
import { Article } from '@/lib/types';
import Link from 'next/link';
import { Clock, Calendar, ArrowUpRight, Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const CATEGORY_STYLES: Record<string, { label: string; gradient: string; shadow: string; border: string; text: string; bg: string }> = {
  web: { 
    label: 'Web Dev', 
    gradient: 'from-cyan-400 to-blue-600', 
    shadow: 'hover:shadow-cyan-500/20', 
    border: 'group-hover:border-cyan-500/50',
    text: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30'
  },
  ai: { 
    label: 'AI & ML', 
    gradient: 'from-fuchsia-400 to-purple-600', 
    shadow: 'hover:shadow-fuchsia-500/20', 
    border: 'group-hover:border-fuchsia-500/50',
    text: 'text-fuchsia-600 dark:text-fuchsia-400',
    bg: 'bg-fuchsia-50 dark:bg-fuchsia-950/30'
  },
  data: { 
    label: 'Data Science', 
    gradient: 'from-emerald-400 to-teal-600', 
    shadow: 'hover:shadow-emerald-500/20', 
    border: 'group-hover:border-emerald-500/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30'
  },
  mobile: { 
    label: 'Mobile', 
    gradient: 'from-amber-400 to-orange-600', 
    shadow: 'hover:shadow-amber-500/20', 
    border: 'group-hover:border-amber-500/50',
    text: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/30'
  },
  all: {
      label: 'View all',
      gradient: 'from-gray-400 to-slate-500',
      shadow: 'hover:shadow-gray-500/20',
      border: 'group-hover:border-gray-500/50',
      text: 'text-gray-600 dark:text-gray-400',
      bg: 'bg-gray-50 dark:bg-gray-900/50'
  }
};

const CATEGORIES = [
  { id: 'all', label: 'View all' },
  { id: 'web', label: 'Web Dev' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'Artificial Intelligence' },
  { id: 'data', label: 'Data Science' },
];

const ArticleCard = ({ article }: { article: Article }) => {
  const style = CATEGORY_STYLES[article.category] || CATEGORY_STYLES.web;

  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className={`group flex flex-col h-full bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl ${style.shadow} ${style.border} relative rounded-2xl`}
    >
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${style.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {article.coverImage ? (
          <Image 
            src={article.coverImage} 
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
            <div className={`w-full h-full bg-gradient-to-br ${style.gradient} opacity-20`}></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
             <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-sm uppercase tracking-wider ${style.text}`}>
                {style.label}
             </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-gray-100 transition-colors line-clamp-2 leading-tight">
          {article.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm flex-grow leading-relaxed">
          {article.summary}
        </p>
        
        <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-white/5 justify-between">
             <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
             </div>
             
             <div className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${style.text} opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}>
                Read <ArrowUpRight className="w-3.5 h-3.5" />
             </div>
        </div>
      </div>
    </Link>
  );
};

const FeaturedArticle = ({ article }: { article: Article }) => {
    const style = CATEGORY_STYLES[article.category] || CATEGORY_STYLES.web;

    return (
        <div className="mb-12">
             <Link href={`/blog/${article.slug}`} className={`group relative block w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden bg-gray-900 border border-gray-200 dark:border-white/10 shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] transition-all duration-500`}>
                {article.coverImage ? (
                  <Image 
                    src={article.coverImage} 
                    alt={article.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${style.gradient} opacity-40`} />
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient} opacity-0 group-hover:opacity-30 mix-blend-overlay transition-opacity duration-500`} />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4 lg:w-2/3">
                    <div className="flex items-center gap-3 mb-6">
                        <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg`}>
                             Featured
                        </span>
                        <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-white rounded-full shadow-lg ${style.text}`}>
                            {style.label}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                        {article.title}
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl line-clamp-2 mb-8 font-medium leading-relaxed max-w-2xl drop-shadow-md">
                        {article.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white text-sm font-semibold tracking-wide">
                        <span className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-[10px] text-black">M</div>
                             Madjid
                        </span>
                        <span className="flex items-center gap-2 opacity-80">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                        </span>
                         <span className={`hidden md:flex ml-4 items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20`}>
                            Read Article <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
             </Link>
        </div>
    );
}

export default function BlogList({ initialArticles, locale }: { initialArticles: Article[], locale: string }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: articles } = useQuery({
    queryKey: ['articles', locale],
    queryFn: async () => {
      const res = await fetch(`/api/blog?locale=${locale}`);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json() as Promise<Article[]>;
    },
    initialData: initialArticles,
    staleTime: 0,
  });

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-20 opacity-50">
        <p className="font-mono text-xl">No_Data_Found</p>
      </div>
    );
  }

  // Filter Logic
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const listArticles = filteredArticles.length > 0 ? filteredArticles.slice(1) : [];

  return (
    <div className="space-y-10">
      {/* Controls: Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/50 dark:bg-white/5 p-2 md:p-3 rounded-2xl backdrop-blur-xl border border-gray-200/50 dark:border-white/5 shadow-sm sticky top-20 z-30 transition-all duration-300">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-1 no-scrollbar p-1">
            {CATEGORIES.map((cat) => {
                const style = CATEGORY_STYLES[cat.id] || CATEGORY_STYLES.web;
                const isSelected = selectedCategory === cat.id;
                
                return (
                <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                        isSelected
                            ? 'text-white shadow-md ring-2 ring-white/20 dark:ring-black/20'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                    {isSelected && (
                         <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${style.gradient}`}></div>
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        {cat.label}
                    </span>
                </button>
            )})}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64 group pl-2 md:pl-0 pr-1 md:pr-0 pb-1 md:pb-0">
             <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-white/10 dark:to-white/5 rounded-xl -m-0.5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="relative flex items-center">
                 <Search className="absolute left-3 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-xl text-sm focus:outline-none focus:bg-white dark:focus:bg-black/50 transition-all font-medium placeholder-gray-500"
                />
            </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {selectedCategory === 'all' && !searchQuery && featuredArticle && (
             <FeaturedArticle article={featuredArticle} />
        )}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(selectedCategory === 'all' && !searchQuery && listArticles.length > 0) ? (
            listArticles.map((article, idx) => (
                <div key={article.slug} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                    <ArticleCard article={article} />
                </div>
            ))
        ) : (
            filteredArticles.map((article, idx) => (
                <div key={article.slug} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                    <ArticleCard article={article} />
                </div>
            ))
        )}
      </div>

       {filteredArticles.length === 0 && (
          <div className="text-center py-24 bg-gray-50 dark:bg-white/5 rounded-3xl border border-dashed border-gray-200 dark:border-white/10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-white/10 mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">No articles found</p>
              <p className="text-gray-500 text-sm mb-6">We couldn't find any articles matching your search.</p>
              <button 
                onClick={() => {setSelectedCategory('all'); setSearchQuery('')}}
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:opacity-80 transition-opacity"
              >
                Clear all filters
              </button>
          </div>
      )}
    </div>
  );
}
