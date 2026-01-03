"use client";

import { Article } from '@/lib/mock-articles';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';

const ArticleCard = ({ article }: { article: Article }) => {
  const categoryColors: any = {
    'web': 'text-sky-500 border-sky-500/30 bg-sky-500/5',
    'ia': 'text-pink-500 border-pink-500/30 bg-pink-500/5',
    'data': 'text-green-500 border-green-500/30 bg-green-500/5',
    'mobile': 'text-purple-500 border-purple-500/30 bg-purple-500/5',
  };

  return (
    <Link 
      href={`/blog/${article.slug}`} 
      className="block p-6 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 group shadow-md hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        <span className={`text-xs font-mono uppercase px-3 py-1 border rounded-full whitespace-nowrap ml-4 ${categoryColors[article.category] || 'text-gray-500'}`}>
            {article.category}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {article.summary}
      </p>
      
      <div className="flex items-center space-x-4 text-xs font-mono text-gray-500 dark:text-gray-500">
        <span className="flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {article.date}
        </span>
        <span className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {article.readTime}
        </span>
      </div>
    </Link>
  );
};

export default function BlogList({ articles }: { articles: Article[] }) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-20 opacity-50">
        <p className="font-mono text-xl">No_Data_Found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
