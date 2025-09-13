'use client';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';
import { PublisherSubscriber } from '@/shared/utils/publisherSubscriber';
import { IDrawerState } from './types';
import styles from './styles.module.scss';

const drawerPubSub = new PublisherSubscriber();

export const drawerState: IDrawerState = {
  beforeCloseCallback: null,
  isOpened: false,
  isCloseByWrapper: true,
};

export const showDrawer = (Component: ReactNode, isCloseByWrapper = true) => {
  drawerState.isOpened = true;

  drawerState.isCloseByWrapper = isCloseByWrapper;

  drawerPubSub.notify(Component);
};

const setDrawerClosed = () => {
  drawerState.isOpened = false;
  drawerState.isCloseByWrapper = true;
  drawerState.beforeCloseCallback = null;
  drawerPubSub.notify(null);
};

export const closeDrawer = () => {
  if (drawerState.beforeCloseCallback) return drawerState.beforeCloseCallback(setDrawerClosed);
  setDrawerClosed();
};

export const Drawer = () => {
  const [children, setChildren] = useState<ReactElement | null>(null);

  useEffect(() => {
    drawerPubSub.subscribe(setChildren);

    return () => drawerPubSub.unsubscribe(setChildren);
  }, []);

  return (
    <div data-testid='drawer-root' className={cn(styles.root, { [styles.visible]: !!children })}>
      <div
        data-testid='drawer-click-zone'
        className={cn(styles.backgroundClickZone, { [styles.visible]: !!children })}
        onClick={() => drawerState.isCloseByWrapper && closeDrawer()}
        role='presentation'
      />
      <div className={cn(styles.content, { [styles.visible]: !!children })}>
        {children}
      </div>
    </div>
  );
};
