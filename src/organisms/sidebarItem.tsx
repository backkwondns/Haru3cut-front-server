import React from 'react';
import { organismsInterface } from 'interfaces';
import styled from 'styled-components';
import { IconButton } from 'organisms';

const SidebarItemDesktop = styled(IconButton)`
   {
    width: 190px;
    overflow: hidden;
    transition: 0.4s ease;
    font-size: 17px;
    &:hover {
      padding-left: 20px;
    }

    .sidebar-item-icon {
      margin-right: 30px;
    }
  }
`;

const SidebarItemMobile = styled(IconButton)`
  min-width: 190px;
  font-size: 20px;
  overflow: hidden;
  .sidebar-item-icon {
    margin-left: 20px;
    margin-right: 30px;
    height: 36px;
    width: 36px;
  }
`;

function SidebarItem(props: organismsInterface.sidebarItemInterface) {
  const { icon, text, mobile = true, onClick } = props;
  return (
    <div>
      {mobile ? (
        <SidebarItemMobile icon={icon} text={text} direction="horizontal" onClick={onClick} />
      ) : (
        <SidebarItemDesktop icon={icon} text={text} direction="horizontal" onClick={onClick} />
      )}
    </div>
  );
}

export default SidebarItem;