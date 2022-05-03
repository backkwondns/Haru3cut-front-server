import React, { useContext, useEffect, useRef, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useNavigate } from 'react-router-dom';
import SidebarDesktop from './sidebar.desktop';

function SidebarDesktopContainer() {
  const rootStore = useContext(MobXProviderContext);
  const navigator = useNavigate();
  const searchValue = rootStore.themeStore.getSearch;
  const moreSetting = rootStore.themeStore.getMoreSetting;
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const avatar = rootStore.themeStore.getAvatar;
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

  const onMoreSetting = () => {
    rootStore.themeStore.toggleMoreSetting();
  };

  const onLogout = () => {
    rootStore.accountStore.setNickName(undefined);
    rootStore.accountStore.setNickNameTag(undefined);
  };

  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [search]);

  useHotkeys('command+k', () => setSearch(true));

  const onEvent = {
    onClickMore,
    onClickSearch,
    onEnterSearch,
    onChangeSearch,
    onMoreSetting,
    onLogout,
  };
  return (
    <SidebarDesktop
      nickName={nickName}
      nickNameTag={nickNameTag}
      avatar={avatar}
      searchValue={searchValue}
      sidebar={sidebar}
      moreSetting={moreSetting}
      search={search}
      onEvent={onEvent}
    />
  );
}

export default observer(SidebarDesktopContainer);
