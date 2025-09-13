import { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Roboto } from 'next/font/google';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Drawer } from '@/shared/components/Drawer';
import { routing } from '@/config/i18n/routing';
import { getMetadata, getStructuredData, getSocialMetaTags } from '@/config/seo';
import type { Metadata, Viewport } from 'next';
import './globals.css';

const robotoFonts = Roboto({
  variable: '--font-roboto',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('landing.seo');

  return getMetadata(locale, t);
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

type Props = PropsWithChildren<{
  params: Promise<{ locale: string }>
}>

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const seoTranslations = await getTranslations('landing.seo');
  const structuredData = getStructuredData(locale, seoTranslations);
  const socialMetaTags = getSocialMetaTags(seoTranslations);

  return (
    <html lang={locale}>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Additional social media meta tags */}
        {Object.entries(socialMetaTags).map(([key, value]) => (
          <meta key={key} name={key} content={value}/>
        ))}
      </head>
      <body className={robotoFonts.variable}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
          <Drawer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
