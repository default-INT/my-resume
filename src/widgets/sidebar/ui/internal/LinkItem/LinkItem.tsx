import { FC, memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  label: string;
  value: string;
  target?: string;
  to: string;
}

export const LinkItem = memo((props: Props) => {
  const { icon: Icon, iconClassName, label, to, value, target } = props;

  return (
    <div className={styles.container}>
      <Icon width={26} height={26} className={iconClassName}/>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <a target={target} className={styles.link} href={to}>{value}</a>
      </div>
    </div>
  );
});

LinkItem.displayName = 'LinkItem';
