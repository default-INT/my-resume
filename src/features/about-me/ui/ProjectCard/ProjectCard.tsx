import { memo } from 'react';
import { useTranslations } from 'next-intl';
import { Project } from '@/features/about-me/model';
import { LinkIcon } from '@/shared/assets/icons';
import styles from './styles.module.scss';

interface Props {
  item: Project;
}

export const ProjectCard = memo(({ item }: Props) => {
  const { name, id, link, linkPreview, logoUrl } = item;
  const t = useTranslations('landing.projects');

  return (
    <div className={styles.root}>
      <img
        className={styles.previewImg}
        src={logoUrl}
        alt={id}
      />
      <div className={styles.about}>
        <span className={styles.name}>{name}</span>
        <p className={styles.description}>{t(`descriptions.${id}`)}</p>
      </div>
      <div className={styles.actions}>
        <LinkIcon
          width={24}
          height={24}
          className={styles.icon}
        />
        {link ? (
          <a
            href={link}
            className={styles.link}
            target='_blank'
          >
            {link || linkPreview}
          </a>
        ) : <span className={styles.link}>{t('status.in_progress')}</span>}
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';
