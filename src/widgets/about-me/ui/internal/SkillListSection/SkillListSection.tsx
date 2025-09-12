import { getTranslations } from 'next-intl/server';
import cn from 'classnames';
import { devSkills, getSoftSkills } from '@/widgets/about-me/model';
import { RoadSection, SkillSection } from '@/features/about-me/ui';
import { DevelopIcon, SoftIcon } from '@/shared/assets/icons';
import { SkillCard } from '@/features/about-me/ui/SkillCard';
import styles from './styles.module.scss';

interface Props {
  animationIndex?: number;
}

export const SkillListSection = async ({ animationIndex }: Props) => {
  const t = await getTranslations('landing');
  const commonT = await getTranslations('common');

  const softSkills = getSoftSkills(commonT);

  return (
    <RoadSection
      title={t('skills.title')}
      animationIndex={animationIndex}
      className={styles.skillsSection}
    >
      <SkillSection
        title={t('skills.sections.soft')}
        icon={SoftIcon}
        iconClassName={styles.softIcon}
        className={styles.softSection}
      >
        {softSkills.map((list, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkillCard key={idx} list={list} className={styles.softCard}/>
        ))}
      </SkillSection>
      <SkillSection
        title={t('skills.sections.develop')}
        icon={DevelopIcon}
        rootClassName={styles.fullWidth}
        className={styles.devSkillsSection}
      >
        {Object.values(devSkills).map(rows3d => rows3d.map((skillListItem, idx) => (
          <SkillCard
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            list={skillListItem}
            className={cn({
              [styles.span2]: rows3d.length === 3 && idx === 0,
              [styles.span3]: rows3d.length === 2 && idx === 0,
              [styles.span4]: rows3d.length === 1 && idx === 0,
            })}
          />
        )))}
      </SkillSection>
    </RoadSection>
  );
};
