import React from 'react';
import { blogService } from '@/lib/blog-service';
import { notFound } from 'next/navigation';
import ArticleContent from './article_content';
import { getThemeFromCategory } from '@/lib/theme';
import Link from 'next/link'; // Importation du lien serveur

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug, locale } = await params;

  const article = await blogService.getArticleBySlug(slug, locale);
  if (!article) notFound();

  const theme = getThemeFromCategory(article.category);

  return (
    <main className="min-h-screen">
      {/* BOUTON RETOUR : Rendu côté serveur, parfait pour le SEO */}
      <div className="max-w-[800px] mx-auto px-6 pt-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-3 font-mono text-[10px] font-bold tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-all group"
        >
          <span className="text-lg leading-none group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          <span>Back_to_Index</span>
        </Link>
      </div>

      <ArticleContent article={article} theme={theme} />
    </main>
  );
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const articles = await blogService.getAllArticles();
  
  const params = [];
  for (const article of articles) {
    params.push({ locale: 'fr', slug: article.slug });
    params.push({ locale: 'en', slug: article.slug });
  }
  
  return params;
}