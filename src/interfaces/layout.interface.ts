import React from 'react';

export interface sidebarDesktopInterface {
  nickName: string;
  nickNameTag: string;
  avatar: string;
  searchValue: string;
  sidebar: boolean;
  moreSetting: boolean;
  search: boolean;
  onEvent: {
    onClickMore: () => void;
    onClickSearch: () => void;
    onEnterSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMoreSetting: () => void;
    onLogout: () => void;
  };
}

export interface headerMobileInterface {
  nickName: string;
  nickNameTag: string;
  avatar: string;
  searchValue: string;
  search: boolean;
  location: string;
  onEvent: {
    onClickSearch: () => void;
    onClickMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onEnterSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickAdd: () => void;
  };
}

export interface sidebarMobileInterface {
  sidebar: boolean;
  moreSetting: boolean;
  onMoreSetting: () => void;
  onLogout: () => void;
}
