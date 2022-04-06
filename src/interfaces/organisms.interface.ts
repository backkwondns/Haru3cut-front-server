import React, { CSSProperties } from 'react';
import { buttonInterface } from './atoms.interface';

export interface iconButtonInterface extends buttonInterface {
  icon: JSX.Element;
  text?: string;
  direction?: 'horizontal' | 'vertical';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  target?: string;
  onClick?: () => void;
}

export interface transferListInterface {
  // list: { [key: string]: string };
  selectedList: string[];
  nonSelectedList: string[];
}

export interface imageSelectorInterface {
  preview?: string;
  imageRef: React.Ref<any>;
  text?: string;
  onEvent: {
    onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickFile: () => void;
  };
}

export interface checkItemInterface {
  value?: string;
  checked: boolean;
  toggleItem: () => void;
}
