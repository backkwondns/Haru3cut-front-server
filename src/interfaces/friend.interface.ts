import React from 'react';
import { diary } from 'interfaces/diary.interface';

export interface friendInterface {
  friendDiary: diary[];
  add: boolean;
  friendSearch: { friendName: string; friendNameTag: number };
  searchedFriend: searchedFriendInterface;
  onSave: (event: React.MouseEvent<SVGElement>) => void;
  onChangeFriendSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchFriend: () => void;
  onRequestFriend: () => void;
  onPressKeyNameTag: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface friendInfoInterface {
  friendName: string;
  friendNameTag: number;
  avatar?: string;
}

export interface friendSearchResponseInterface {
  nickName: string;
  nickNameTag: number;
  avatar: string;
  friendStatus: 'None' | 'Friend' | 'Requested' | 'Wait';
}

export interface searchedFriendInterface extends friendSearchResponseInterface {
  friendStatus: 'None' | 'Friend' | 'Requested' | 'Wait';
  trigger: boolean | 'None';
}

export interface friendSettingInterface extends getFriendInterface {
  add: boolean;
  friendSearch: { friendName: string; friendNameTag: number };
  searchedFriend: searchedFriendInterface;
  onSearchFriend: () => void;
  onRequestFriend: () => void;
  onChangeFriendSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressKeyNameTag: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFriendClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface getFriendInterface {
  friendList: friendInfoInterface[];
  friendWaitList: friendInfoInterface[];
  friendRequestList: friendInfoInterface[];
  friendBlackList: friendInfoInterface[];
}
