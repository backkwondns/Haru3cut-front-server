import { makeAutoObservable } from 'mobx';
import { diaryInterface } from 'interfaces';
import RootStore from './root.store';

export default class DiaryStore {
  rootStore: RootStore;

  selectedImage = { imageFile: {}, preview: '' };

  privateCheck = false;

  tagList: string[] = [];

  selectedTag: diaryInterface.Option[] = [];

  posts: diaryInterface.post[] = [];

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

  setPrivateCheck() {
    this.privateCheck = !this.privateCheck;
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

  get getPosts() {
    return this.posts;
  }

  setPosts(posts: diaryInterface.post[]) {
    this.posts = posts;
  }
}
