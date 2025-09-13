import { FC, memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  title: string;
  value: string;
  iconClassName?: string;
  icon: FC<React.SVGProps<SVGSVGElement>>
}

export const OtherInfo = memo((props: Props) => {
  const { title, icon: Icon, value, iconClassName } = props;

  return (
    <div className={styles.root}>
      <Icon width={24} height={24} className={cn(styles.icon, iconClassName)}/>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
});

OtherInfo.displayName = 'OtherInfo';
