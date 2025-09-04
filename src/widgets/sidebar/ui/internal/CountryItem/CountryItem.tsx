import { FC, memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  label: string;
  value: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}

export const CountryItem = memo((props: Props) => {
  const { label, icon: Icon, value } = props;

  return (
    <div className={styles.container}>
      <Icon width={26}/>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
});

CountryItem.displayName = 'CountryItem';
