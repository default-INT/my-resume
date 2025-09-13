import { memo, MouseEvent, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { LinkIcon } from '@/shared/assets/icons';
import styles from './styles.module.scss';

interface Props {
  link?: string
  linkPreview?: string
}

export const ProjectLink = memo((props: Props) => {
  const { link, linkPreview } = props;
  const othersT = useTranslations('landing.projects.others');

  const handlePreventDefault = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  }, []);

  return (
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
          onClick={handlePreventDefault}
        >
          {linkPreview || link}
        </a>
        ) : <span className={styles.link}>{othersT('status.in_progress')}</span>}
    </div>
  );
});

ProjectLink.displayName = 'ProjectLink';
