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
    <article className={`article-container theme-${theme}`}>
      {/* EN-TÊTE DE L'ARTICLE */}
      <header className="article-header">
        <div className="meta-info">
          <span className="protocol-label">DOC_TYPE: ANALYSIS_REPORT</span>
          <span className="id-label">REF: {article.id || '000-X'}</span>
        </div>
        <h1>{article.title}</h1>
        {article.subtitle && (
          <p className="subtitle">
            <span className="accent">/</span> {article.subtitle}
          </p>
        )}
      </header>

      {/* CONTENU DYNAMIQUE */}
      <section 
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />

      <style jsx>{`
        .article-container {
          padding: 3rem 1.5rem;
          max-width: 800px;
          margin: 0 auto;
          min-height: 100vh;
          transition: background 0.4s ease, color 0.4s ease;
        }

        /* THÈMES GLOBAUX */
        .theme-light { background: #ffffff; color: #1a1a1a; }
        .theme-neutral { background: #f8f9fa; color: #2d3436; }
        .theme-dark { background: #050505; color: #e5e7eb; }

        /* HEADER & META */
        .article-header {
          margin-bottom: 4rem;
          border-bottom: 1px solid currentColor;
          padding-bottom: 2rem;
          opacity: 0.9;
        }

        .meta-info {
          display: flex;
          gap: 1.5rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          margin-bottom: 1.5rem;
          opacity: 0.5;
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
        }

        .subtitle {
          font-size: 1.25rem;
          font-weight: 500;
          opacity: 0.7;
        }

        .accent { color: #3b82f6; } /* Couleur d'accentuation pour le slash */

        /* STYLISATION DU CONTENU INJECTÉ (PROSE) */
        .prose-content :global(h2) {
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          margin: 3rem 0 1.5rem 0;
          letter-spacing: 0.05em;
        }

        .prose-content :global(p) {
          line-height: 1.7;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          opacity: 0.85;
        }

        .prose-content :global(ul) {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
          list-style: square;
        }

        .prose-content :global(li) {
          margin-bottom: 0.5rem;
          opacity: 0.85;
        }

        .prose-content :global(strong) {
          font-weight: 700;
          color: currentColor;
        }

        .prose-content :global(a) {
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.2s;
        }

        .prose-content :global(a:hover) {
          opacity: 0.6;
        }
      `}</style>
    </article>
  );
}