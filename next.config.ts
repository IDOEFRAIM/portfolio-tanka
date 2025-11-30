import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin(path.join(process.cwd(), 'i18n.ts'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd()
  }
};

export default withNextIntl(nextConfig);