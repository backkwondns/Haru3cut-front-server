import React, { useContext, useEffect } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import LayoutDesktop from './layout.desktop';
import LayoutMobile from './layout.mobile';

function layout() {
  const rootStore = useContext(MobXProviderContext);
  const { width } = rootStore.themeStore.getWindowSize;

  if (!rootStore.accountStore.getNickName) {
    return <Navigate to="/login" />;
  }

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
