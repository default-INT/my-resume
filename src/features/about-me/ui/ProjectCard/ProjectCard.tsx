'use client';
import { memo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { getAssetPath } from '@/shared/utils/getAssetPath';
import { Project } from '@/features/about-me/model';
import { showDrawer } from '@/shared/components/Drawer';
import { ProjectLink } from '@/entities/about-me/ui';
import { AboutProjectDrawer } from '../AboutProjectDrawer';
import styles from './styles.module.scss';

interface Props {
  item: Project;
}

export const ProjectCard = memo(({ item }: Props) => {
  const { name, id, logoUrl } = item;
  const t = useTranslations(`landing.projects.list.${id}`);
  const othersT = useTranslations('landing.projects.others');

  const handleOpenProject = useCallback(() => {
    showDrawer(<AboutProjectDrawer project={item}/>);
  }, [item]);

  return (
    <button
      type='button'
      className={styles.root}
      onClick={handleOpenProject}
    >
      <img
        className={styles.previewImg}
        src={getAssetPath(logoUrl)}
        alt={id}
      />
      <div className={styles.about}>
        <span className={styles.name}>{name}</span>
        <p className={styles.description}>{t('short_description')}</p>
      </div>
      <ProjectLink link={item.link} linkPreview={item.linkPreview}/>
      <span className={styles.link}>{othersT('actions.show_more')}</span>
    </button>
    );
});

ProjectCard.displayName = 'ProjectCard';
