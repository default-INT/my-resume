'use client';
import { memo } from 'react';
import cn from 'classnames';
import { useLocale, useTranslations } from 'next-intl';
import { Project } from '@/features/about-me/model';
import { getAssetPath } from '@/shared/utils/getAssetPath';
import { typographyStyle } from '@/shared/styles';
import { getFormattedDate } from '@/shared/utils/getFormattedDate';
import { Tag } from '@/shared/components/Tag';
import { SkillCard } from '@/features/about-me/ui/SkillCard';
import { CrossIcon, MembersIcon } from '@/shared/assets/icons';
import { ProjectLink } from '@/entities/about-me/ui';
import { closeDrawer } from '@/shared/components/Drawer';
import { OtherInfo } from './ui/OtherInfo';
import styles from './styles.module.scss';

interface Props {
  project: Project;
}

export const AboutProjectDrawer = memo((props: Props) => {
  const { project } = props;
  const locale = useLocale();
  const t = useTranslations(`landing.projects.list.${project.id}`);
  const othersT = useTranslations('landing.projects.others');

  const from = getFormattedDate(project.period.from, locale);
  const to = project.period.to ? getFormattedDate(project.period.to, locale) : null;
  const isPresent = !project.period.to;

  const responsibilities = t.has('responsibilities') ? t.raw('responsibilities') as string[] : null;
  const achievements = t.has('achievements') ? t.raw('achievements') as string[] : null;

  return (
    <div className={styles.root}>
      <button type='button' className={styles.closeButton} onClick={closeDrawer}>
        <CrossIcon width={24} height={24}/>
      </button>
      <img
        className={styles.preview}
        src={getAssetPath(project.logoUrl)}
        alt={project.name}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.aboutMe}>
            <div className={styles.title}>
              <h1 className={typographyStyle.h1Bold}>{project.name}</h1>
              {isPresent && <span className={styles.present}>{othersT('present')}</span>}
            </div>
            <h2 className={cn(typographyStyle.h2Bold, styles.positionText)}>{project.position}</h2>
            <div className={styles.period}>
              <span className={styles.datePeriod}>{othersT('period.from', { value: from })}</span>
              {to && <span className={styles.datePeriod}>{othersT('period.to', { value: to })}</span>}
            </div>
          </div>
          {project.other?.teamMembersCount && (
            <OtherInfo
              title={othersT('team_members.title')}
              value={othersT('team_members.value', { value: project.other.teamMembersCount })}
              icon={MembersIcon}
            />
          )}
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>{othersT('articles.tech_stack')}</span>
          <div className={styles.techStackContent}>
            {project.techStack?.map(skill => <Tag key={skill} title={skill}/>)}
          </div>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>{othersT('articles.about')}</span>
          <div className={styles.description}>
            {t.rich('description', {
              p: chunks => <p>{chunks}</p>,
            })}
          </div>
          <ProjectLink link={project.link} linkPreview={project.linkPreview}/>
        </div>
        {Boolean(responsibilities?.length) && (
          <div className={styles.section}>
            <span className={styles.sectionTitle}>{othersT('articles.responsibilities')}</span>
            <div className={styles.list}>
              {responsibilities?.map(item => (
                <SkillCard
                  key={item}
                  list={[[item]]}
                  className={styles.softSkillCard}
                />
              ))}
            </div>
          </div>
        )}
        {Boolean(achievements?.length) && (
          <div className={styles.section}>
            <span className={styles.sectionTitle}>{othersT('articles.achievements')}</span>
            <div className={styles.list}>
              {achievements?.map(item => (
                <SkillCard
                  key={item}
                  list={[[item]]}
                  className={styles.softSkillCard}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

AboutProjectDrawer.displayName = 'AboutProjectDrawer';
