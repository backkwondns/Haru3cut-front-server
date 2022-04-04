import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import SidebarMobile from './sidebar.mobile';

function SidebarMobileContainer() {
  const rootStore = useContext(MobXProviderContext);
  const sidebar = rootStore.themeStore.getSidebar;
  return <SidebarMobile sidebar={sidebar} />;
}

export default observer(SidebarMobileContainer);
