// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // tes autres options Next.js ici
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  turbopack: {
    root: process.cwd()
  }
};

// chemin RELATIF (important : littéral, pas path.join(process.cwd(), ...))
const withNextIntl = createNextIntlPlugin('./i18n.ts');

export default withNextIntl(nextConfig);