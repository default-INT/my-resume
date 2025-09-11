import { getAssetPath } from '@/shared/utils/getAssetPath';
import styles from './styles.module.scss';

export const Avatar = () => (
  <div className={styles.avatarContainer}>
    <img src={getAssetPath('/images/avatar.jpeg')} alt=''/>
  </div>
);
