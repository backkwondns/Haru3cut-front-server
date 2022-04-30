import React, { useContext } from 'react';
import { organismsInterface } from 'interfaces';
import styled from 'styled-components';
import { IconButton } from 'organisms';
import { useNavigate } from 'react-router-dom';
import { MobXProviderContext } from 'mobx-react';

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

const NestedSidebarItemDesktop = styled(SidebarItemDesktop)`
  .sidebar-item-icon {
    margin-right: 40px;
  }
`;

const NestedSidebarItemMobile = styled(SidebarItemMobile)``;

function SidebarItem(props: organismsInterface.sidebarItemInterface) {
  const rootStore = useContext(MobXProviderContext);
  const navigator = useNavigate();
  const {
    icon,
    text,
    mobile = false,
    nested = false,
    target = '',
    onClick = () => {
      navigator(target);
      rootStore.themeStore.toggleSidebar();
    },
  } = props;
  return (
    <div>
      {mobile &&
        (nested ? (
          <NestedSidebarItemMobile icon={icon} text={text} direction="horizontal" onClick={onClick} />
        ) : (
          <SidebarItemMobile icon={icon} text={text} direction="horizontal" onClick={onClick} />
        ))}
      {!mobile &&
        (nested ? (
          <NestedSidebarItemDesktop icon={icon} text={text} direction="horizontal" onClick={onClick} />
        ) : (
          <SidebarItemDesktop icon={icon} text={text} direction="horizontal" onClick={onClick} />
        ))}
    </div>
  );
}

export default SidebarItem;
