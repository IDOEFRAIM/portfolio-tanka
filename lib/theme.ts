// lib/theme.ts
export type Theme = 'light' | 'dark' | 'neutral';

export function getThemeFromCategory(category: string): Theme {
  switch (category) {
    case 'web': return 'light';
    case 'data': return 'dark';
    case 'ai': return 'neutral';
    default: return 'light';
  }
}