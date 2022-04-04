import React, { useContext, useEffect, useRef, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { useHotkeys } from 'react-hotkeys-hook';
import SidebarDesktop from './sidebar.desktop';

function SidebarDesktopContainer() {
  const rootStore = useContext(MobXProviderContext);
  const searchValue = rootStore.themeStore.getSearch;
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  const onClickMore = () => setSidebar((prevState) => !prevState);
  const onClickSearch = () => {
    setSearch((prevState) => !prevState);
  };
  const onEnterSearch = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearch(false);
    }
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    rootStore.themeStore.setSearch(event.currentTarget.value);
  };

  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [search]);

  useHotkeys('command+k', () => setSearch(true));

  const nickName = '아이디는최대10자리';

  const onEvent = {
    onClickMore,
    onClickSearch,
    onEnterSearch,
    onChangeSearch,
  };
  return (
    <SidebarDesktop nickName={nickName} searchValue={searchValue} sidebar={sidebar} search={search} onEvent={onEvent} />
  );
}

export default observer(SidebarDesktopContainer);
