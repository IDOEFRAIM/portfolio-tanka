import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import en from './messages/en.json';
import fr from './messages/fr.json';

// Déclare clairement les locales supportées
const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

// Précharge tous les fichiers de messages
const allMessages: Record<Locale, Record<string, string>> = {
  en,
  fr
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale | undefined;

  // Fallback sécurisé
  if (!locale || !locales.includes(locale)) {
    locale = 'fr';
  }

  try {
    return {
      locale,
      messages: allMessages[locale]
    };
  } catch (error) {
    console.error(`❌ ERREUR CRITIQUE : Impossible de lire messages pour ${locale}`);
    notFound();
  }
});