import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import en from './messages/en.json';
import fr from './messages/fr.json';

const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

// Recursive type: a value can be a string or nested Messages
interface Messages {
  [key: string]: string | Messages;
}

const allMessages: Record<Locale, Messages> = {
  en,
  fr
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale | undefined;

  if (!locale || !locales.includes(locale)) {
    locale = 'fr'; // fallback
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
