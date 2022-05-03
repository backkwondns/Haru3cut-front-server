import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

export default class AccountStore {
  rootStore: RootStore;

  nickName!: string | undefined;

  nickNameTag!: number | undefined;

  email!: string;

  phoneNumber!: string;

  friendList!: string[];

  savedPost!: string[];

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

  get getFriendList(): string[] {
    return this.friendList;
  }

  setFriendList(value: string[]) {
    this.friendList = value;
  }

  get getSavedPost(): string[] {
    return this.savedPost;
  }

  setSavedPost(value: string[]) {
    this.savedPost = value;
  }
}
