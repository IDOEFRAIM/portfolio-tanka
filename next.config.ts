import createNextIntlPlugin from 'next-intl/plugin';

// 👇 Correction : on passe le chemin vers i18n.ts
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
    root: "./"   
  }
};

export default withNextIntl(nextConfig);