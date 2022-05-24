import { friendInterface } from 'interfaces';

export type booleanType = boolean;
export type widthType = string;
export type heightType = string;

export type loginResponse = {
  nickName: string;
  nickNameTag: number;
  email: string;
  phoneNumber: string;
  setting: {
    language: string;
    mode: 'dark' | 'light' | 'system';
    avatar: string;
  };
  friendList: friendInterface.friendInfoInterface[];
  friendRequestList: friendInterface.friendInfoInterface[];
  friendWaitList: friendInterface.friendInfoInterface[];
  friendBlackList: friendInterface.friendInfoInterface[];
  partyList: string[];
};

export interface axiosResponseInterface<responseType> {
  message: string;
  status: number;
  result: responseType;
}
