import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

import enJson from './messages/en.json';
import frJson from './messages/fr.json';

const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

export interface Messages {
  [key: string]: string | Messages;
}

const en: Messages = enJson as Messages;
const fr: Messages = frJson as Messages;

const allMessages: Record<Locale, Messages> = { en, fr };

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale | undefined;

  if (!locale || !locales.includes(locale)) {
    locale = 'fr';
  }

  const messages = allMessages[locale] ?? allMessages['fr'];

  if (!messages) {
    console.error(`❌ ERREUR CRITIQUE : Impossible de lire messages pour ${locale}`);
    notFound();
  }

  return {
    locale,
    messages
  };
});