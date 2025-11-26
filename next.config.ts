import createNextIntlPlugin from 'next-intl/plugin';

// 👇 Correction : on passe le chemin vers i18n.ts
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // ✅ utilise process.cwd() pour un chemin absolu portable
    root: process.cwd()
  }
};

export default withNextIntl(nextConfig);
