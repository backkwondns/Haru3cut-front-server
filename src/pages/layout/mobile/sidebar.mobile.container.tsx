import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import SidebarMobile from './sidebar.mobile';

function SidebarMobileContainer() {
  const rootStore = useContext(MobXProviderContext);
  const sidebar = rootStore.themeStore.getSidebar;
  const moreSetting = rootStore.themeStore.getMoreSetting;
  const onMoreSetting = () => {
    rootStore.themeStore.toggleMoreSetting();
  };
  return <SidebarMobile sidebar={sidebar} moreSetting={moreSetting} onMoreSetting={onMoreSetting} />;
}

export default observer(SidebarMobileContainer);
