import ThemeStore from './theme.store';
import DiaryStore from './diary.store';

export default class RootStore {
  themeStore: ThemeStore;

  diaryStore: DiaryStore;

  constructor() {
    this.themeStore = new ThemeStore(this);
    this.diaryStore = new DiaryStore(this);
  }
}
