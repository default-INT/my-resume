import { setRequestLocale } from 'next-intl/server';
import { Sidebar } from '@/widgets/sidebar/ui';
import { routing } from '@/config/i18n/routing';
import { AboutMe } from '@/widgets/about-me/ui';
import styles from './page.module.scss';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>
}

export default async function Home(props: Props) {
  const { locale } = await props.params;

  setRequestLocale(locale);

  return (
    <div className={styles.page}>
      <Sidebar/>
      <AboutMe/>
    </div>
  );
}
