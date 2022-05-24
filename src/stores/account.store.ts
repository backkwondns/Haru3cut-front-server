import { makeAutoObservable } from 'mobx';
import { friendInterface } from 'interfaces';
import RootStore from './root.store';

export default class AccountStore {
  rootStore: RootStore;

  nickName!: string | undefined;

  nickNameTag!: number | undefined;

  email!: string;

  phoneNumber!: string;

  friendList!: friendInterface.friendInfoInterface[];

  friendRequestList!: friendInterface.friendInfoInterface[];

  friendWaitList!: friendInterface.friendInfoInterface[];

  friendBlackList!: friendInterface.friendInfoInterface[];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getNickName() {
    return this.nickName;
  }

  setNickName(nickName: string | undefined) {
    this.nickName = nickName;
  }

  get getNickNameTag() {
    return this.nickNameTag;
  }

  setNickNameTag(nickNameTag: number | undefined) {
    this.nickNameTag = nickNameTag;
  }

  get getEmail(): string {
    return this.email;
  }

  setEmail(value: string) {
    this.email = value;
  }

  get getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(value: string) {
    this.phoneNumber = value;
  }

  get getFriendList(): friendInterface.friendInfoInterface[] {
    return this.friendList;
  }

  setFriendList(value: friendInterface.friendInfoInterface[]) {
    this.friendList = value;
  }

  get getFriendRequestList(): friendInterface.friendInfoInterface[] {
    return this.friendRequestList;
  }

  setFriendRequestList(value: friendInterface.friendInfoInterface[]) {
    this.friendRequestList = value;
  }

  get getFriendWaitList(): friendInterface.friendInfoInterface[] {
    return this.friendWaitList;
  }

  setFriendWaitList(value: friendInterface.friendInfoInterface[]) {
    this.friendWaitList = value;
  }

  get getFriendBlackList(): friendInterface.friendInfoInterface[] {
    return this.friendBlackList;
  }

  setFriendBlackList(value: friendInterface.friendInfoInterface[]) {
    this.friendBlackList = value;
  }
}
