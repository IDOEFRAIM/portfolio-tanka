// ✅ Autorise les slugs dynamiques même si la page est statique
export const dynamicParams = true;

import React from 'react';
import { getArticleBySlug, getAllArticles, type Article } from '@/lib/mock-articles';
import { notFound } from 'next/navigation';
import ArticleContent from './article_content';
import type { Theme } from '@/lib/theme';
import { getThemeFromCategory } from '@/lib/theme';

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const { slug } = params;

  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const theme: Theme = getThemeFromCategory(article.category);

  return <ArticleContent article={article} theme={theme} />;
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}