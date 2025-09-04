import { memo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Experience } from '@/features/about-me/model';
import { getFormattedDate } from '@/shared/utils/getFormattedDate';
import styles from './styles.module.scss';

interface Props {
  period: Experience['period'];
}

const SEPARATOR_SYMBOL = '-';

export const DatePeriod = memo((props: Props) => {
  const { period: { from, to } } = props;
  const t = useTranslations('landing.experience.period');
  const locale = useLocale();

  const isPresent = !to;

  if (isPresent) return <span className={styles.present}>{t('present')}</span>;

  const formattedFrom = getFormattedDate(from, locale);
  const formattedTo = getFormattedDate(to, locale);

  return (
    <div className={styles.date}>
      <span>{formattedFrom}</span>
      <span className={styles.separator}>{SEPARATOR_SYMBOL}</span>
      <span>{formattedTo}</span>
    </div>
  );
});

DatePeriod.displayName = 'DatePeriod';
