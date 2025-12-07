'use client';
import React from 'react';
import type { Article } from '@/lib/mock-articles';
import type { Theme } from '@/lib/theme';

export default function ArticleContent({
  article,
  theme,
}: {
  article: Article;
  theme: Theme;
}) {
  return (
    <article className={`article theme-${theme}`}>
      <header>
        <h1>{article.title}</h1>
        <p><em>{article.subtitle}</em></p>
      </header>

      <section dangerouslySetInnerHTML={{ __html: article.content }} />

      <style jsx>{`
        .article { padding: 1.25rem; }
        .theme-light { background: #fff; color: #111827; }
        .theme-neutral { background: #f3f4f6; color: #0f172a; }
        .theme-dark { background: #0b1220; color: #e6eef8; }
      `}</style>
    </article>
  );
}