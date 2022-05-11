import { themeInterface } from 'interfaces';
import { makeAutoObservable } from 'mobx';
// eslint-disable-next-line import/no-cycle
import RootStore from './root.store';

export default class ThemeStore {
  rootStore: RootStore;

  windowSize: themeInterface.sizeInterface = { width: 0, height: 0 };

  location!: string;

  search!: string;

  sidebar = false;

  moreSetting = false;

  language!: string;

  mode!: 'dark' | 'light' | 'system';

  avatar!: string;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getWindowSize() {
    return this.windowSize;
  }

  setWindowSize(size: themeInterface.sizeInterface) {
    this.windowSize = size;
  }

  get getLocation() {
    return this.location;
  }

  setLocation(location: string) {
    this.location = location;
  }

  get getSearch() {
    return this.search;
  }

  setSearch(value: string) {
    this.search = value;
  }

  get getSidebar() {
    return this.sidebar;
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

  get getMoreSetting() {
    return this.moreSetting;
  }

  toggleMoreSetting() {
    this.moreSetting = !this.moreSetting;
  }

  get getLanguage(): string {
    return this.language;
  }

  setLanguage(value: string) {
    this.language = value;
  }

  get getMode(): 'dark' | 'light' | 'system' {
    return this.mode;
  }

  setMode(value: 'dark' | 'light' | 'system') {
    this.mode = value;
  }

  get getAvatar(): string {
    return this.avatar;
  }

  setAvatar(value: string) {
    this.avatar = value;
  }
}
