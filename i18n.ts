import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'fr'];

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. On récupère la locale (Spécifique Next.js 15 : c'est une Promise)
  let locale = await requestLocale;

  // 2. Sécurité : Si la locale est inconnue, on force le Français par défaut
  if (!locale || !locales.includes(locale as any)) {
    locale = 'fr';
  }

  try {
    // 3. On charge le VRAI fichier JSON depuis le dossier messages
    const messages = (await import(`./messages/${locale}.json`)).default;

    return {
      locale,
      messages
    };
  } catch (error) {
    console.error(`❌ ERREUR CRITIQUE : Impossible de lire messages/${locale}.json`);
    // Si ça plante ici, c'est que ton fichier JSON a une erreur de virgule
    notFound();
  }
});