import { MobXProviderContext, observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import GlobalStyle from './init.style';
import Router from './router';
import { windowFunction } from './libs';

function App() {
  const rootStore = useContext(MobXProviderContext);
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        rootStore.themeStore.setWindowSize(windowFunction.getWindowSize());
      };
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
    return undefined;
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default observer(App);
