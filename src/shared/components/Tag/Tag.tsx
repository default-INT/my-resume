import { memo } from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
}

export const Tag = memo(({ title }: Props) => (
  <div className={styles.root}>
    {title}
  </div>
));

Tag.displayName = 'Tag';
