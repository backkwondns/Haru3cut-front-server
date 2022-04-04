import { themeInterface } from 'interfaces';
import { makeAutoObservable } from 'mobx';
// eslint-disable-next-line import/no-cycle
import RootStore from './root.store';

export default class ThemeStore {
  rootStore: RootStore;

  windowSize: themeInterface.sizeInterface = { width: 0, height: 0 };

  search = '';

  sidebar = false;

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
}
