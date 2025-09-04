import { getTranslations } from 'next-intl/server';
import { ExperienceItem, RoadSection, ProjectCard } from '@/features/about-me/ui';
import { education, experienceList, projectList } from '@/widgets/about-me/model';
import { EducationCard } from '@/features/about-me/ui/EducationCard';
import { SkillListSection } from '../internal/SkillListSection';
import styles from './styles.module.scss';

export const AboutMe = async () => {
  const t = await getTranslations('landing');

  return (
    <main className={styles.root}>
      <div className={styles.content}>
        <RoadSection
          title={t('experience.title')}
          className={styles.experienceList}
          animationIndex={0}
        >
          {experienceList.map(experience => (
            <ExperienceItem
              key={experience.id}
              item={experience}
            />
          ))}
        </RoadSection>
        <RoadSection
          title={t('projects.title')}
          className={styles.projectGrid}
          animationIndex={1}
        >
          {projectList.map(project => (
            <ProjectCard
              key={project.id}
              item={project}
            />
          ))}
        </RoadSection>

        <SkillListSection animationIndex={2}/>

        <RoadSection
          title={t('educations.title')}
          animationIndex={3}
        >
          <EducationCard
            title={t(`educations.list.${education.id}.title`)}
            position={t(`educations.list.${education.id}.position`)}
            logoUrl={education.logo}
            period={education.period}
          />
        </RoadSection>
      </div>
    </main>
  );
};
