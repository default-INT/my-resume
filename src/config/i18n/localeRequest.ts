import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

const getMessages = async (locale: string) => {
  const [landing, common] = await Promise.all([
    await import(`@/translations/${locale}/landing.json`),
    await import(`@/translations/${locale}/common.json`),
  ]);

  return {
    common: common.default,
    landing: landing.default,
  };
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await getMessages(locale);

  return { locale, messages };
});
