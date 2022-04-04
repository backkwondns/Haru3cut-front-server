import ThemeStore from './theme.store';

export default class RootStore {
  themeStore: ThemeStore;

  constructor() {
    this.themeStore = new ThemeStore(this);
  }
}
