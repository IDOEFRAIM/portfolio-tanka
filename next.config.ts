// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // tes autres options Next.js ici
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
        pathname: '/v1/storage/buckets/**/files/**/view',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
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