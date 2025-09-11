import { memo } from 'react';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { getAssetPath } from '@/shared/utils/getAssetPath';
import { Experience } from '@/features/about-me/model';
import { PinWithoutOutlineIcon } from '@/shared/assets/icons';
import { DatePeriod } from './ui/DatePeriod';
import styles from './styles.module.scss';

interface Props {
  item: Experience;
}

export const ExperienceItem = memo(({ item }: Props) => {
  const { position, period, logoUrl, name, location } = item;
  const { to } = period;

  const t = useTranslations('common');

  const isPresent = !to;

  const country = t(`locations.countries.${location.country}`);
  const city = t(`locations.cities.${location.city}`);

  const formattedLocation = `${city}, ${country}`;

  return (
    <div className={cn(styles.root, { [styles.active]: isPresent })}>
      <img
        src={getAssetPath(logoUrl)}
        className={styles.logo}
        alt={name}
      />
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={styles.position}>{position}</span>
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.locationAndPeriod}>
          <DatePeriod period={period}/>
          <div className={styles.locationContainer}>
            <PinWithoutOutlineIcon width={12} height={12}/>
            <span className={styles.location}>{formattedLocation}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

ExperienceItem.displayName = 'ExperienceItem';
