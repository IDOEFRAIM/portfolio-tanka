import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import en from './messages/en.json';
import fr from './messages/fr.json';

const locales = ['en', 'fr'] as const;
const allMessages = { en, fr };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as keyof typeof allMessages | undefined;

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