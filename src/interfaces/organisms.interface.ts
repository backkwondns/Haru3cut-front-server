import React, { CSSProperties } from 'react';
import { diary } from 'interfaces/diary.interface';
import { searchedFriendInterface } from 'interfaces/friend.interface';
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
  fill?: string;
  onClick?: () => void;
}

export interface sidebarItemInterface {
  icon: JSX.Element;
  text: string;
  mobile?: boolean;
  nested?: boolean;
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
export interface postInterface {
  data: diary;
  onEdit?: (event: React.MouseEvent<SVGElement>) => void;
  onSave?: (event: React.MouseEvent<SVGElement>) => void;
}

export interface userInfoInterface {
  nickName: string;
  nickNameTag: number;
  avatar: string;
}

export interface friendAddContainerInterface {
  add: boolean;
  friendSearch: { friendName: string; friendNameTag: number };
  searchedFriend: searchedFriendInterface;
  onSearchFriend: () => void;
  onRequestFriend: () => void;
  onChangeFriendSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressKeyNameTag: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
