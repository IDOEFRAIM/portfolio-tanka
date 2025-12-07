export const dynamicParams = true;

import React from 'react';
import { getArticleBySlug, getAllArticles, type Article } from '@/lib/mock-articles';
import { notFound } from 'next/navigation';
import ArticleContent from './article_content';
import type { Theme } from '@/lib/theme';
import { getThemeFromCategory } from '@/lib/theme';

// ✅ params contient locale + slug, mais locale est ignoré
type Props = {
  params: {
    locale: string; // juste pour éviter les erreurs Next.js
    slug: string;
  };
};

export default function ArticlePage({ params }: Props) {
  const { slug } = params; // ✅ on ignore locale

  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) notFound();

  const theme: Theme = getThemeFromCategory(article.category);

  return <ArticleContent article={article} theme={theme} />;
}

// ✅ generateStaticParams retourne locale + slug
// ✅ mais locale n'est PAS utilisée pour filtrer
export function generateStaticParams() {
  return getAllArticles().map((a) => ({
    locale: 'fr', // ✅ locale par défaut, mais ignorée
    slug: a.slug,
  }));
}