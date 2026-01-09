export type ArticleSection = {
  id: string;
  title: string;
};

export type Article = {
  id?: string; // Appwrite Document ID
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  readTime: string;
  category: 'web' | 'mobile' | 'ai' | 'data';
  toc: ArticleSection[];
  content: string;
  coverImage?: string;
  // Optional fields that might come from the DB but are not strikly required in the frontend model if we map them out
  title_fr?: string;
  title_en?: string;
  subtitle_fr?: string;
  subtitle_en?: string;
  summary_fr?: string;
  summary_en?: string;
  content_fr?: string;
  content_en?: string;
  toc_fr?: ArticleSection[];
  toc_en?: ArticleSection[];
};
