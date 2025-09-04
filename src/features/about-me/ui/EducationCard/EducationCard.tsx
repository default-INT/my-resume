import { memo } from 'react';
import { useLocale } from 'next-intl';
import { Period } from '@/features/about-me/model';
import { getFormattedDate } from '@/shared/utils/getFormattedDate';
import styles from './styles.module.scss';

interface Props {
  title: string;
  position: string;
  logoUrl: string;
  period: Period;
}

export const EducationCard = memo((props: Props) => {
  const { title, logoUrl, position, period } = props;
  const locale = useLocale();

  const dateFrom = getFormattedDate(period.from, locale);
  const dateTo = period.to ? getFormattedDate(period.to, locale) : null;

  const formattedPeriod = dateTo ? `${dateFrom} - ${dateTo}` : dateFrom;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src={logoUrl}
          alt={title}
        />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.about}>
        <span className={styles.position}>{position}</span>
        <span className={styles.datePeriod}>
          {formattedPeriod}
        </span>
      </div>
    </div>
  );
});

EducationCard.displayName = 'EducationCard';
