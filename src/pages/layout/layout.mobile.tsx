import React, { useContext } from 'react';
import { commonInterface, themeInterface } from 'interfaces';
import { MobXProviderContext, observer } from 'mobx-react';
import styled, { css } from 'styled-components';
import HeaderMobileContainer from './mobile/header.mobile.container';
import SidebarMobileContainer from './mobile/sidebar.mobile.container';

const LayoutContainer = styled.div`
  ${({ height }: { height: commonInterface.heightType }) => {
    return css`
      height: ${height};
      width: 100vw;
    `;
  }}
`;

const BodyContainer = styled.div`
  ${({ height }: { height: commonInterface.heightType }) => {
    return css`
      height: calc(${height}px - 60px);
      overflow: auto;
    `;
  }}
`;

function LayoutMobile(props: themeInterface.childrenOnly) {
  const { children } = props;
  const rootStore = useContext(MobXProviderContext);
  const { height } = rootStore.themeStore.getWindowSize;
  const sidebar = rootStore.themeStore.getSidebar;

  const onClickSidebar = () => {
    if (sidebar) rootStore.themeStore.toggleSidebar();
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <LayoutContainer onClick={onClickSidebar} height={height}>
        <HeaderMobileContainer />
        <BodyContainer height={height}>{children}</BodyContainer>
      </LayoutContainer>
      <SidebarMobileContainer />
    </>
  );
}

export default observer(LayoutMobile);
