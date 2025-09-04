import { MetadataRoute } from 'next';
import { routing } from '@/config/i18n/routing';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yauheni-trafimau.dev';

  // Generate URLs for all locales
  const localeUrls = routing.locales.flatMap(locale => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]);

  return [
    // Root URL (redirects to default locale)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...localeUrls,
  ];
}
