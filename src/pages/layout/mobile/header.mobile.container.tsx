import React, { useContext, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import HeaderMobile from './header.mobile';

function HeaderMobileContainer() {
  const rootStore = useContext(MobXProviderContext);
  const searchValue = rootStore.themeStore.getSearch;
  const [search, setSearch] = useState(false);
  const nickName = '아이디는최대10자리';

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

  const onEvent = {
    onClickSearch,
    onClickMore,
    onEnterSearch,
    onChangeSearch,
  };
  return <HeaderMobile nickName={nickName} search={search} searchValue={searchValue} onEvent={onEvent} />;
}

export default observer(HeaderMobileContainer);
