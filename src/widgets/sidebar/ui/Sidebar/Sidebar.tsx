'use client';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { typographyStyle } from '@/shared/styles';
import {
  ByIcon, CrossIcon,
  EnIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon, RuIcon,
  TelegramIcon,
} from '@/shared/assets/icons';
import { LinkItem } from '@/widgets/sidebar/ui/internal/LinkItem';
import { Avatar } from '../internal/Avatar';
import { CountryItem } from '../internal/CountryItem';
import { Header } from '../internal/Header';
import styles from './styles.module.scss';

export const Sidebar = () => {
  const t = useTranslations('landing.about_me_sidebar');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarVisible(prevState => !prevState);
  }, []);

  return (
    <>
      <Header onBurgerClick={toggleSidebar}/>
      <div
        className={cn(styles.root, { [styles.mobileVisible]: isSidebarVisible })}
      >
        <button
          type='button'
          className={styles.closeMobile}
          onClick={toggleSidebar}
        >
          <CrossIcon width={28} height={28}/>
        </button>
        <Avatar/>
        <div className={styles.content}>
          <div className={styles.aboutMe}>
            <h1 className={typographyStyle.h1Bold}>{t('full_name')}</h1>
            <h2 className={cn(
              typographyStyle.h2Bold,
              styles.positionText,
            )}>
              {t('position')}
            </h2>
          </div>
          <div className={styles.section}>
            <LinkItem
              icon={MailIcon}
              iconClassName={styles.socialIcon}
              label={t('contacts.list.email')}
              value='evgeniy.trofimov.int@gmail.com'
              to='mailto:evgeniy.trofimov.int@gmail.com'
            />
            <LinkItem
              icon={PhoneIcon}
              label={t('contacts.list.phone')}
              value='+375 (29) 817-47-53'
              to='tel:+375298174753'
            />
            <LinkItem
              icon={PinIcon}
              label={t('contacts.list.address')}
              value='Minsk, Belarus'
              to='https://maps.app.goo.gl/KgbzXXiv2WPtA2fQ6'
              target='_blank'
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionTitle}>
              {t('socials.title')}
            </span>
            <LinkItem
              icon={LinkedInIcon}
              label={t('socials.list.linkedin')}
              value='yauheni-trafimau-int'
              to='https://www.linkedin.com/in/yauheni-trafimau-int/'
              target='_blank'
            />
            <LinkItem
              icon={InstagramIcon}
              label={t('socials.list.instagram')}
              value='default_int18'
              to='https://www.instagram.com/default_int18/'
              target='_blank'
            />
            <LinkItem
              icon={TelegramIcon}
              label={t('socials.list.telegram')}
              value='@trafimau1806'
              to='https://t.me/trafimau1806'
              target='_blank'
            />
            <LinkItem
              icon={GitHubIcon}
              label={t('socials.list.github')}
              value='default-INT'
              to='https://github.com/default-INT'
              target='_blank'
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionTitle}>
              {t('languages.title')}
            </span>
            <CountryItem
              icon={EnIcon}
              label={t('languages.list.en')}
              value='B1-B2'
            />
            <CountryItem
              icon={ByIcon}
              label={t('languages.list.by')}
              value='Native'
            />
            <CountryItem
              icon={RuIcon}
              label={t('languages.list.ru')}
              value='Native'
            />
          </div>
        </div>
      </div>
    </>
  );
};
