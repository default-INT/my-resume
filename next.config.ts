import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const prefixUrl = process.env.NEXT_PUBLIC_PREFIX_URL || '';

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  basePath: prefixUrl,
  assetPrefix: prefixUrl ? `${prefixUrl}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

const withNextIntl = createNextIntlPlugin('./src/config/i18n/localeRequest.ts');

const config = withNextIntl(nextConfig);

export default config;
