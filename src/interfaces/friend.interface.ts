import React from 'react';
import { diary } from 'interfaces/diary.interface';

export interface friendInterface {
  friendDiary: diary[];
  add: boolean;
  friendSearch: { friendName: string; friendNameTag: string };
  searchedFriend: searchedFriendInterface;
  onSave: (event: React.MouseEvent<SVGElement>) => void;
  onChangeFriendSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchFriend: () => void;
  onRequestFriend: () => void;
  onPressKeyNameTag: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface friendSearchStateInterface {
  friendName: string;
  friendNameTag: string;
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
