import { IconButton, SidebarItem } from 'organisms';
import React from 'react';
import { commonInterface, layoutInterface } from 'interfaces';
import { Category48, Create48, Groups48, MoreHorizon48, PhotoCamera48, Star48 } from 'icons';
import styled, { css } from 'styled-components';

const Sidebar = styled.div`
  ${({ open }: { open: commonInterface.booleanType }) => {
    return css`
      position: absolute;
      top: 0;
      ${open ? `width:60%` : 'width:0px'};
      background-color: #6667ab;
      border-radius: 0px 5px 5px 0px;
      transition: all 0.2s ease-in-out;
      overflow: hidden;

      * {
        background: #6667ab !important;
        color: white !important;
      }
    `;
  }}
`;

const ListSidebar = styled.div`
   {
    overflow: hidden;
    flex: 1;
  }
`;

function SidebarMobile(props: layoutInterface.sidebarMobileInterface) {
  const { sidebar } = props;
  return (
    <Sidebar className="flex-column full-height" open={sidebar}>
      <ListSidebar>
        <SidebarItem icon={<Create48 fill="white" className="sidebar-item-icon" />} text="작성" />
        <SidebarItem icon={<PhotoCamera48 fill="white" className="sidebar-item-icon" />} text="일기" />
        <SidebarItem icon={<Groups48 fill="white" className="sidebar-item-icon" />} text="친구" />
        <SidebarItem icon={<Category48 fill="white" className="sidebar-item-icon" />} text="모임" />
        <SidebarItem icon={<Star48 fill="white" className="sidebar-item-icon" />} text="보관" />
        <SidebarItem icon={<MoreHorizon48 fill="white" className="sidebar-item-icon" />} text="설정" />
      </ListSidebar>
    </Sidebar>
  );
}
// style={{ paddingLeft: '5px', paddingTop: '5px' }}
export default SidebarMobile;
