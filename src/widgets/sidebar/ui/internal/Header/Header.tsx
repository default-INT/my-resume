import { memo } from 'react';
import { BurgerIcon } from '@/shared/assets/icons';
import styles from './styles.module.scss';

interface Props {
  onBurgerClick: () => void;
}

export const Header = memo((props: Props) => {
  const { onBurgerClick } = props;

  return (
    <div className={styles.root}>
      <button
        type='button'
        className={styles.button}
        onClick={onBurgerClick}
      >
        <BurgerIcon width={28} height={28}/>
      </button>
    </div>
  );
});

Header.displayName = 'Header';
