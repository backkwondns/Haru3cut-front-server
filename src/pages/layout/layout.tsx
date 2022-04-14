import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { Outlet } from 'react-router-dom';
import LayoutDesktop from './layout.desktop';
import LayoutMobile from './layout.mobile';

function layout() {
  const rootStore = useContext(MobXProviderContext);
  const { width } = rootStore.themeStore.getWindowSize;

  return (
    <div>
      {width > 620 ? (
        <LayoutDesktop>
          <Outlet />
        </LayoutDesktop>
      ) : (
        <LayoutMobile>
          <Outlet />
        </LayoutMobile>
      )}
    </div>
  );
}

export default observer(layout);
