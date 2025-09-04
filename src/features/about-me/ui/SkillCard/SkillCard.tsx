import { memo } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  list: string[][];
  className?: string;
}

export const SkillCard = memo((props: Props) => {
  const { list, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      {list.map((column, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx} className={styles.column}>
          <ul className={styles.list}>
            {column.map(item => (
              <li
                key={item}
                className={styles.listItem}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

SkillCard.displayName = 'SkillCard';
