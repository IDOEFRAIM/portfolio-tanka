// i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import en from './messages/en.json';
import fr from './messages/fr.json';

const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

// Messages can be nested objects or strings
type Messages = Record<string, string | Messages>;

const allMessages: Record<Locale, Messages> = {
  en,
  fr
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Ensure locale is one of the supported ones
  let locale: Locale = (await requestLocale) as Locale;

  if (!locale || !locales.includes(locale)) {
    locale = 'fr'; // default fallback
  }

  const messages = allMessages[locale];

  if (!messages) {
    console.error(`❌ ERREUR CRITIQUE : Impossible de lire messages pour ${locale}`);
    notFound();
  }

  return {
    locale,
    messages
  };
});
