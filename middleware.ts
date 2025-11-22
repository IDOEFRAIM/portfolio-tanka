import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Liste des langues
  locales: ['en', 'fr'],

  // Langue par défaut
  defaultLocale: 'fr',
  
  // Force toujours le préfixe (ex: /fr) pour éviter les bugs de détection
  localePrefix: 'always'
});

export const config = {
  // Matcher qui laisse passer tout sauf les fichiers internes (_next) et statiques
  matcher: ['/((?!api|_next|.*\\..*).*)']
};