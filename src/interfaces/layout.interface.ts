import React from 'react';

export interface sidebarDesktopInterface {
  nickName: string;
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
  };
}

export interface headerMobileInterface {
  nickName: string;
  searchValue: string;
  search: boolean;
  onEvent: {
    onClickSearch: () => void;
    onClickMore: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onEnterSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export interface sidebarMobileInterface {
  sidebar: boolean;
  moreSetting: boolean;
  onMoreSetting: () => void;
}
