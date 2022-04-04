import React from 'react';
import { themeInterface } from 'interfaces';
import styled from 'styled-components';
import SidebarDesktopContainer from './desktop/sidebar.desktop.container';

const LayoutContainer = styled.div`
   {
    max-height: 100vh;
    width: 100%;
  }
`;

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const BodyContainer = styled.div`
   {
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: auto;
  }
`;

function LayoutDesktop(props: themeInterface.childrenOnly) {
  const { children } = props;

  return (
    <LayoutContainer className="flex">
      <SidebarDesktopContainer />
      <OuterContainer>
        <BodyContainer>{children}</BodyContainer>
      </OuterContainer>
    </LayoutContainer>
  );
}

export default LayoutDesktop;
