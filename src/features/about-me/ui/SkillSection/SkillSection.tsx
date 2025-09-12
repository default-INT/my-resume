import { FC, memo, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  title: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  rootClassName?: string;
  className?: string;
}

export const SkillSection = memo((props: PropsWithChildren<Props>) => {
  const { title, children, icon: Icon, iconClassName, className, rootClassName } = props;

  return (
    <div className={cn(styles.root, rootClassName)}>
      <div className={styles.title}>
        <Icon width={24} height={24} className={cn(styles.titleIcon, iconClassName)}/>
        <span className={styles.titleText}>{title}</span>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
});

SkillSection.displayName = 'SkillSection';
