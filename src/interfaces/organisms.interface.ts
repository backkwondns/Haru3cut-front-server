import { CSSProperties } from 'react';
import { buttonInterface } from './atoms.interface';

export interface iconButtonInterface extends buttonInterface {
  icon: JSX.Element;
  text?: string;
  direction?: 'horizontal' | 'vertical';
  onClick?: (event: any) => void;
}

export interface avatarInterface {
  avatar?: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export interface sidebarItemInterface {
  icon: JSX.Element;
  text: string;
  mobile?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export interface transferListInterface {
  // list: { [key: string]: string };
  selectedList: string[];
  nonSelectedList: string[];
}
