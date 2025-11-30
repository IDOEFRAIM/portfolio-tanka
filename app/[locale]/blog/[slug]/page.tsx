// app/blog/[slug]/page.tsx
import React from 'react';
import { getArticleBySlug, getAllArticles, type Article } from '@/lib/mock-articles';
import { notFound } from 'next/navigation';
import ArticleContent from './article_content';
import type { Theme } from '@/lib/theme';
import { getThemeFromCategory } from '@/lib/theme';

type ParamsShape = { slug?: string; locale?: string };
type Props = { params: ParamsShape | Promise<ParamsShape> };

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
    return null;
  }

  const article: Article | undefined = getArticleBySlug(slug);
  if (!article) {
    notFound();
    return null;
  }

  const theme: Theme = getThemeFromCategory(article.category);

  return <ArticleContent article={article} theme={theme} />;
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}