type TCloseDrawerCallback = () => void;
export type TBeforeCloseCallback = (closeDrawer: TCloseDrawerCallback) => void;

export interface IDrawerState {
  beforeCloseCallback: TBeforeCloseCallback | null;
  isOpened: boolean;
  isCloseByWrapper: boolean;
}
