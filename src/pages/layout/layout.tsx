import React, { useContext } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import LayoutDesktop from './layout.desktop';
import LayoutMobile from './layout.mobile';

function layout() {
  const rootStore = useContext(MobXProviderContext);
  const location = useLocation();
  const history = useLocation();
  const { width } = rootStore.themeStore.getWindowSize;
  rootStore.themeStore.setLocation(location.pathname);

  if (!rootStore.accountStore.getNickName) {
    if (history.pathname !== '/') {
      toast.info('로그아웃 되었습니다');
    }
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
