"use client";

import { useState } from "react";
import { Article } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowUpRight, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const CATEGORY_STYLES: Record<string, { label: string; chip: string; accent: string; gradient: string; }> = {
  web: {
    label: "Web Dev",
    chip: "bg-brand-deep/10 text-brand-deep",
    accent: "text-brand-deep",
    gradient: "from-brand-deep/80 via-brand-deep/40 to-transparent",
  },
  mobile: {
    label: "Mobile",
    chip: "bg-amber-100 text-amber-700",
    accent: "text-amber-700",
    gradient: "from-amber-500/70 via-amber-300/50 to-transparent",
  },
  ai: {
    label: "Artificial Intelligence",
    chip: "bg-emerald-100 text-emerald-700",
    accent: "text-emerald-700",
    gradient: "from-emerald-500/70 via-emerald-300/40 to-transparent",
  },
  data: {
    label: "Data Science",
    chip: "bg-slate-100 text-slate-700",
    accent: "text-slate-700",
    gradient: "from-slate-600/60 via-slate-400/30 to-transparent",
  },
  all: {
    label: "View all",
    chip: "bg-brand-border/20 text-brand-border",
    accent: "text-brand-border",
    gradient: "from-brand-border/70 via-brand-border/40 to-transparent",
  }
};

const CATEGORIES = [
  { id: "all", label: "View all" },
  { id: "web", label: "Web Dev" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "Artificial Intelligence" },
  { id: "data", label: "Data Science" },
];

const getCategoryStyle = (category: string) => CATEGORY_STYLES[category] ?? CATEGORY_STYLES.web;

const ArticleCard = ({ article }: { article: Article }) => {
  const style = getCategoryStyle(article.category);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col h-full bg-white border border-brand-border/30 rounded-3xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)]"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-brand-border/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/90 ${style.accent}`}>
            {style.label}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 gap-4">
        <h3 className="text-xl font-serif text-brand-deep leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-brand-deep/70 text-sm leading-relaxed flex-grow">
          {article.summary}
        </p>
        <div className="flex items-center justify-between text-xs text-brand-border uppercase font-mono tracking-[0.3em] pt-4 border-t border-brand-border/20">
          <span className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Read <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const FeaturedArticle = ({ article }: { article: Article }) => {
  const style = getCategoryStyle(article.category);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group relative block w-full h-[420px] md:h-[520px] rounded-[36px] overflow-hidden border border-brand-border/20 shadow-[0_30px_80px_rgba(8,15,40,0.08)]"
    >
      {article.coverImage ? (
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-brand-border/10" />
      )}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-80`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 p-10 md:p-14 text-white space-y-6 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] rounded-full ${style.chip}`}>
            {style.label}
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/70">
            Featured Essay
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
          {article.title}
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          {article.summary}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4" />
          {article.date}
        </div>
      </div>
    </Link>
  );
};

export default function BlogList({ initialArticles, locale }: { initialArticles: Article[]; locale: string }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: articles } = useQuery({
    queryKey: ["articles", locale],
    queryFn: async () => {
      const res = await fetch(`/api/blog?locale=${locale}`);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json() as Promise<Article[]>;
    },
    initialData: initialArticles,
    staleTime: 0,
  });

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-20 opacity-60">
        <p className="font-mono text-xl tracking-[0.3em] uppercase">No articles found</p>
      </div>
    );
  }

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const normalizedQuery = searchQuery.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(normalizedQuery) ||
      article.summary.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const listArticles = filteredArticles.length > 0 ? filteredArticles.slice(1) : [];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border border-brand-border/30 rounded-3xl p-4 md:p-6 sticky top-20 z-20 shadow-sm">
        <div className="flex overflow-x-auto gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const style = getCategoryStyle(cat.id);

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-transparent transition-all ${
                  isSelected
                    ? `${style.chip} border-none`
                    : "text-brand-border hover:border-brand-border/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-border" />
          <input
            type="text"
            placeholder={locale === "fr" ? "Rechercher" : "Search"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 rounded-full border border-brand-border/30 bg-brand-paper focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {selectedCategory === "all" && !searchQuery && featuredArticle && (
        <FeaturedArticle article={featuredArticle} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(selectedCategory === "all" && !searchQuery && listArticles.length > 0
          ? listArticles
          : filteredArticles
        ).map((article, idx) => (
          <div
            key={article.slug}
            className="animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-24 border border-dashed border-brand-border/30 rounded-3xl bg-white">
          <p className="text-brand-deep font-semibold text-lg mb-2">{locale === "fr" ? "Aucun contenu" : "No articles"}</p>
          <p className="text-brand-border text-sm mb-6">
            {locale === "fr"
              ? "Ajuste les filtres pour decouvrir d'autres analyses."
              : "Adjust filters to discover other essays."}
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-6 py-2 rounded-full border border-brand-border/40 text-sm"
          >
            {locale === "fr" ? "Reinitialiser" : "Reset filters"}
          </button>
        </div>
      )}
    </div>
  );
}
