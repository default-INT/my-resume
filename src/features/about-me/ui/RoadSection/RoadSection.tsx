import { memo, PropsWithChildren } from 'react';
import cn from 'classnames';
import { typographyStyle } from '@/shared/styles';
import styles from './styles.module.scss';

interface Props {
  title: string;
  className?: string;
  animationIndex?: number;
}

export const RoadSection = memo((props: PropsWithChildren<Props>) => {
  const { title, children, className, animationIndex = 0 } = props;

  return (
    <div
      className={styles.root}
      style={{ '--animation-delay': `${animationIndex * 1}s` } as React.CSSProperties}
    >
      <div className={styles.leftContainer}>
        <div className={styles.circle}>
          <div className={styles.innerCircle}/>
        </div>
        <span className={styles.line}/>
      </div>
      <div className={styles.content}>
        <h2
          className={cn(typographyStyle.h2Bold, styles.title)}
        >
          {title}
        </h2>
        <div className={cn(styles.innerContent, className)}>
          {children}
        </div>
      </div>
    </div>
  );
});

RoadSection.displayName = 'RoadSection';
