import React, { useContext, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import HeaderMobile from './header.mobile';

function HeaderMobileContainer() {
  const rootStore = useContext(MobXProviderContext);
  const searchValue = rootStore.themeStore.getSearch;
  const [search, setSearch] = useState(false);
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const avatar = rootStore.themeStore.getAvatar;
  const location = rootStore.themeStore.getLocation;

  const onClickSearch = () => {
    setSearch((prevState) => !prevState);
  };
  const onEnterSearch = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearch(false);
    }
  };

  const onClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === 'more') {
      event.stopPropagation();
    }
    rootStore.themeStore.toggleSidebar();
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    rootStore.themeStore.setSearch(event.currentTarget.value);
  };

  const onClickAdd = () => {
    console.log('asdf');
  };
  const onEvent = {
    onClickSearch,
    onClickMore,
    onEnterSearch,
    onChangeSearch,
    onClickAdd,
  };
  return (
    <HeaderMobile
      nickName={nickName}
      nickNameTag={nickNameTag}
      avatar={avatar}
      search={search}
      searchValue={searchValue}
      location={location}
      onEvent={onEvent}
    />
  );
}

export default observer(HeaderMobileContainer);
