// i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import en from './messages/en.json';
import fr from './messages/fr.json';

const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

// Type récursif : une valeur peut être une string ou un objet Messages
type Messages = {
  [key: string]: string | Messages;
};

const allMessages: Record<Locale, Messages> = {
  en,
  fr
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale | undefined;

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