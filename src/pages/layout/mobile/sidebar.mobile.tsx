import { SidebarItem } from 'organisms';
import React from 'react';
import { commonInterface, layoutInterface } from 'interfaces';
import {
  AccountCircle24,
  Category48,
  CategoryFilled24,
  CheckList24,
  Create48,
  Groups48,
  Info24,
  ManageAccounts24,
  MoreHorizon48,
  PhotoCamera48,
  Setting24,
  Star48,
  Tag24,
} from 'icons';
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

const NestedSidebar = styled.div`
  ${({ moreSetting }: { moreSetting: boolean }) => {
    return css`
      ${moreSetting ? `height:100%` : `height:0px`};
      ${moreSetting ? `` : `overflow-y:hidden`};
    `;
  }}
  transition: 0.3s all ease-in-out;
`;
function SidebarMobile(props: layoutInterface.sidebarMobileInterface) {
  const { sidebar, moreSetting, onMoreSetting } = props;
  return (
    <Sidebar className="flex-column full-height" open={sidebar}>
      <ListSidebar>
        <SidebarItem
          icon={<Create48 fill="white" className="sidebar-item-icon" />}
          text="작성"
          target="writeDiary"
          mobile
        />
        <SidebarItem
          icon={<PhotoCamera48 fill="white" className="sidebar-item-icon" />}
          text="일기"
          target="diary"
          mobile
        />
        <SidebarItem
          icon={<Groups48 fill="white" className="sidebar-item-icon" />}
          text="친구"
          target="friend"
          mobile
        />
        <SidebarItem
          icon={<Category48 fill="white" className="sidebar-item-icon" />}
          text="모임"
          target="party"
          mobile
        />
        <SidebarItem icon={<Star48 fill="white" className="sidebar-item-icon" />} text="보관" mobile />
        <SidebarItem
          icon={<MoreHorizon48 fill="white" className="sidebar-item-icon" />}
          text="설정"
          onClick={onMoreSetting}
          mobile
        />
        <NestedSidebar moreSetting={moreSetting}>
          <SidebarItem text="계정설정" icon={<Setting24 fill="white" className="sidebar-item-icon" />} mobile nested />
          <SidebarItem
            text="일반설정"
            icon={<AccountCircle24 fill="white" className="sidebar-item-icon" />}
            mobile
            nested
          />
          <SidebarItem
            text="친구설정"
            icon={<ManageAccounts24 fill="white" className="sidebar-item-icon" />}
            mobile
            nested
          />
          <SidebarItem
            text="모임설정"
            icon={<CategoryFilled24 fill="white" className="sidebar-item-icon" />}
            mobile
            nested
          />
          <SidebarItem text="태그설정" icon={<Tag24 fill="white" className="sidebar-item-icon" />} mobile nested />
          <SidebarItem
            text="목표설정"
            icon={<CheckList24 fill="white" className="sidebar-item-icon" />}
            mobile
            nested
          />
          <SidebarItem text="정보" icon={<Info24 fill="white" className="sidebar-item-icon" />} mobile nested />
        </NestedSidebar>
      </ListSidebar>
    </Sidebar>
  );
}
export default SidebarMobile;
