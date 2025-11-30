// lib/theme.ts
export type Theme = 'light' | 'dark' | 'neutral';

export function getThemeFromCategory(category: string): Theme {
  switch (category) {
    case 'web':
      return 'light';
    case 'ia':
      return 'neutral';
    case 'data':
      return 'dark';
    default:
      return 'light';
  }
}