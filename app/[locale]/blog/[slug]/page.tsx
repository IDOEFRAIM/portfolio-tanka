// app/blog/[slug]/page.tsx
import React from 'react';
import { getArticleBySlug, getAllArticles, Article } from '@/lib/mock-articles';
import { notFound } from 'next/navigation';
import { getThemeFromCategory, Theme } from '@/lib/theme';
import {ArticleContent} from './article_content';

type ParamsShape = { slug?: string; locale?: string };
type Props = { params: ParamsShape | Promise<ParamsShape> };

export default async function ArticlePage({ params }: Props) {
  // Résoudre params (peut être une Promise dans l'App Router)
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  console.log('[ArticlePage] requested params:', resolvedParams);

  if (!slug) {
    console.warn('[ArticlePage] missing slug in params', resolvedParams);
    notFound();
    return null;
  }

  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) {
    console.warn(`[ArticlePage] Article not found for slug: ${slug}`);
    notFound();
    return null;
  }

  // Utiliser la version server-safe pour déterminer le thème
  const theme: Theme = getThemeFromCategory(article.category);

  // Passer le thème et l'article au Client Component
  return <ArticleContent article={article} theme={theme} />;
}

// Génération statique des params (ajuste locales si nécessaire)
export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}