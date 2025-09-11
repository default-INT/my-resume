import { getAssetPath } from '@/shared/utils/getAssetPath';
import type { Metadata } from 'next';

interface NextIntlTranslations {
  (key: string): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw: (key: string) => any;
}

export const getMetadata = (locale: string, t: NextIntlTranslations): Metadata => ({
    title: t('title'),
    description: t('description'),
    keywords: t.raw('keywords').join(', '),
    authors: [{ name: 'Yauheni Trafimau', url: 'https://github.com/default-INT' }],
    creator: 'Yauheni Trafimau',
    publisher: 'Yauheni Trafimau',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yauheni-trafimau.dev'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'ru-RU': '/ru',
      },
    },
    openGraph: {
      type: 'website',
      title: t('open_graph.title'),
      description: t('open_graph.description'),
      siteName: t('open_graph.site_name'),
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      url: '/',
      images: [
        {
          url: getAssetPath('/images/avatar.jpeg'),
          width: 400,
          height: 400,
          alt: 'Yauheni Trafimau - React / React Native Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      creator: t('twitter.creator'),
      site: t('twitter.site'),
      images: [getAssetPath('/images/avatar.jpeg')],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
    },
    other: {
      // Facebook specific meta tags
      'fb:app_id': process.env.FACEBOOK_APP_ID,
      'article:author': t('facebook.title'),
      'article:publisher': t('facebook.title'),

      // LinkedIn specific meta tags
      'linkedin:owner': t('linkedin.profile_url'),

      // Telegram specific meta tags
      'telegram:channel': t('telegram.channel'),

      // Instagram specific meta tags
      'instagram:profile': t('instagram.profile'),

      // Additional social meta tags
      'profile:first_name': t('structured_data.name').split(' ')[0],
      'profile:last_name': t('structured_data.name').split(' ')[1],
      'profile:username': t('twitter.creator'),
    } as Record<string, string>,
  });

export const getSocialMetaTags = (t: NextIntlTranslations) => ({
  // Facebook Open Graph tags
  'og:type': 'profile',
  'og:profile:first_name': t('structured_data.name').split(' ')[0],
  'og:profile:last_name': t('structured_data.name').split(' ')[1],
  'og:profile:username': t('twitter.creator').replace('@', ''),

  // Twitter Card additional tags
  'twitter:label1': 'Experience',
  'twitter:data1': '3+ years',
  'twitter:label2': 'Location',
  'twitter:data2': t('structured_data.address_locality'),

  // LinkedIn tags
  'linkedin:title': t('linkedin.title'),
  'linkedin:description': t('linkedin.description'),

  // Telegram tags
  'telegram:title': t('telegram.title'),
  'telegram:description': t('telegram.description'),

  // Instagram tags
  'instagram:title': t('instagram.title'),
  'instagram:description': t('instagram.description'),
});

export const getStructuredData = (locale: string, t: NextIntlTranslations) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t('structured_data.name'),
    alternateName: t('structured_data.alternate_name'),
    jobTitle: t('structured_data.job_title'),
    description: t('description'),
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yauheni-trafimau.dev',
    image: getAssetPath('/images/avatar.jpeg'),
    email: 'evgeniy.trofimov.int@gmail.com',
    telephone: '+375298174753',
    address: {
      '@type': 'PostalAddress',
      addressLocality: t('structured_data.address_locality'),
      addressCountry: t('structured_data.address_country'),
    },
    sameAs: [
      t('linkedin.profile_url'),
      'https://github.com/default-INT',
      `https://t.me/${t('telegram.channel').replace('@', '')}`,
      `https://www.instagram.com/${t('instagram.profile').replace('@', '')}/`,
      `https://twitter.com/${t('twitter.creator').replace('@', '')}`,
    ],
    knowsAbout: [
      'React.js',
      'React Native',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Mobile Development',
      'Web Development',
      'Frontend Development',
      'Full-stack Development',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Roolz',
      url: 'https://roolz.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: t('structured_data.university_name'),
    },
  });
