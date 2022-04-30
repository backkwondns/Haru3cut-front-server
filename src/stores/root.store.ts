import ThemeStore from './theme.store';
import DiaryStore from './diary.store';
import AccountStore from './account.store';

export default class RootStore {
  themeStore: ThemeStore;

  diaryStore: DiaryStore;

  accountStore: AccountStore;

  constructor() {
    this.themeStore = new ThemeStore(this);
    this.diaryStore = new DiaryStore(this);
    this.accountStore = new AccountStore(this);
  }
}
