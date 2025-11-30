// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // tes autres options Next.js ici
  turbopack: {
    root: process.cwd()
  }
};

// chemin RELATIF (important : littéral, pas path.join(process.cwd(), ...))
const withNextIntl = createNextIntlPlugin('./i18n.ts');

export default withNextIntl(nextConfig);