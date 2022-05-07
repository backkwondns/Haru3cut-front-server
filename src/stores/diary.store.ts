import { makeAutoObservable, toJS } from 'mobx';
import { diaryInterface } from 'interfaces';
import RootStore from './root.store';

export default class DiaryStore {
  rootStore: RootStore;

  selectedImage = { imageFile: {}, preview: '' };

  privateCheck = false;

  tagList: string[] = [];

  selectedTag: diaryInterface.Option[] = [];

  diary: diaryInterface.diary[] = [];

  friendDiary: diaryInterface.diary[] = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getSelectedImage() {
    return this.selectedImage;
  }

  setSelectedImage(imageFile: object, preview: string) {
    this.selectedImage = { imageFile, preview };
  }

  get getPrivateCheck() {
    return this.privateCheck;
  }

  togglePrivateCheck() {
    this.privateCheck = !this.privateCheck;
  }

  setPrivateCheck(privateDiary: boolean) {
    this.privateCheck = privateDiary;
  }

  get getTagList() {
    return this.tagList;
  }

  setTagList(tagList: string[]) {
    this.tagList = tagList;
  }

  get getSelectedTag() {
    return this.selectedTag;
  }

  setSelectedTag(selectedTag: diaryInterface.Option[]) {
    this.selectedTag = selectedTag;
  }

  get getDiary() {
    return this.diary;
  }

  setDiary(diary: diaryInterface.diary[]) {
    this.diary = diary;
  }

  get getFriendDiary() {
    return this.friendDiary;
  }

  setFriendDiary(friendDiary: diaryInterface.diary[]) {
    this.friendDiary = friendDiary;
  }

  toggleSavedFriendDiary(diaryID: string) {
    const targetDiary = this.friendDiary.findIndex((value: diaryInterface.diary) => value.id === diaryID);
    this.friendDiary[targetDiary] = {
      ...this.friendDiary[targetDiary],
      isSaved: !this.friendDiary[targetDiary].isSaved,
    };
  }
}
