import { Avatar, IconButton, SidebarItem } from 'organisms';
import {
  Category24,
  Create24,
  Dehaze24,
  Groups24,
  Logout24,
  MoreHorizon24,
  PhotoCamera24,
  Search24,
  Star24,
} from 'icons';
import { Button, Divider, Input } from 'atoms';
import React from 'react';
import { commonInterface, layoutInterface } from 'interfaces';
import styled, { css, keyframes } from 'styled-components';

const Sidebar = styled.div`
  ${({ open }: { open: commonInterface.booleanType }) => {
    return css`
      top: 0;
      ${open ? `width: 190px` : `width:50px`};
      height: 100vh;
      transition: all 0.2s ease-in-out;

      * {
        background: #6667ab !important;
        color: white !important;
      }
    `;
  }}
`;

const Title = styled.span`
   {
    visibility: hidden;
    transition: 0.2s all ease;
    ${({ open }: { open: boolean }) => (open ? `visibility: visible` : null)};
  }
`;

const TopSidebar = styled.div`
   {
    height: 60px;
    justify-content: space-around;
    align-items: center;
  }
`;

const ListSidebar = styled.div`
   {
    overflow: hidden;
    flex: 1;
  }
`;

const BottomSidebar = styled.div`
   {
    height: 100px;
    overflow: hidden;
  }
`;

const UserInfoSidebar = styled.div`
   {
    align-items: center;
    width: 190px;
    margin-left: 4px;
    margin-bottom: 4px;
  }
`;

const IDArea = styled.div`
   {
    margin-left: 10px;
    .id.long {
      font-size: 14px;
    }

    .id-number {
      font-size: 13px;
      color: #ffffff60 !important;
    }
  }
`;

const Modal = styled.div`
  ${({ search }: { search: commonInterface.booleanType }) => {
    return css`
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      overflow: auto;
      background-color: rgb(0, 0, 0) !important;
      background-color: rgba(0, 0, 0, 0.4) !important;
      ${search ? `display:block` : `display:none`}
    `;
  }}
`;

const slideTop = keyframes`
    from {
    top: -300px;
    opacity: 0;
    }

    to {
      top: 0;
      opacity: 1;
    }`;
const ModalContent = styled.div`
   {
    background-color: #fefefe !important;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 80%;
    position: relative;
    animation-name: ${slideTop};
    animation-duration: 0.2s;
  }
`;

const ModalFooter = styled.div`
   {
    justify-content: flex-end;
    padding-top: 10px;
    .modal-footer {
      background-color: rgba(211, 47, 47, 0.63) !important;
      margin-right: 10px !important;
    }
  }
`;
function SidebarDesktop(props: layoutInterface.sidebarDesktopInterface) {
  const { nickName, searchValue, sidebar, search, onEvent } = props;
  const { onClickMore, onClickSearch, onEnterSearch, onChangeSearch } = onEvent;

  return (
    <>
      <Sidebar className="flex-column" open={sidebar}>
        <TopSidebar className="flex">
          <Title open={sidebar}>하루</Title>
          <IconButton icon={<Dehaze24 fill="white" />} onClick={onClickMore} style={{ width: '10px' }} />
          <Title open={sidebar}>컷</Title>
        </TopSidebar>
        <Divider color="white" height="1.5px" />
        <ListSidebar className="flex-column full-width">
          <div>
            <SidebarItem
              icon={<Search24 fill="white" className="sidebar-item-icon" />}
              text="검색"
              onClick={onClickSearch}
              mobile={false}
            />
          </div>
          <SidebarItem
            icon={<Create24 fill="white" className="sidebar-item-icon" />}
            text="작성"
            mobile={false}
            target="newpost"
          />
          <SidebarItem
            icon={<PhotoCamera24 fill="white" className="sidebar-item-icon" />}
            text="일기"
            mobile={false}
            target="diary"
          />
          <SidebarItem
            icon={<Groups24 fill="white" className="sidebar-item-icon" />}
            text="친구"
            mobile={false}
            target="friend"
          />
          <SidebarItem
            icon={<Category24 fill="white" className="sidebar-item-icon" />}
            text="모임"
            mobile={false}
            target="party"
          />
          <SidebarItem icon={<Star24 fill="white" className="sidebar-item-icon" />} text="보관" mobile={false} />
          <SidebarItem icon={<MoreHorizon24 fill="white" className="sidebar-item-icon" />} text="설정" mobile={false} />
        </ListSidebar>
        <BottomSidebar className="flex-column-reverse full-width">
          <UserInfoSidebar className="flex">
            <Avatar
              className={`avatar ${sidebar ? 'open' : ''}`}
              avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg"
              width={sidebar ? '48px' : '40px'}
              height={sidebar ? '48px' : '40px'}
            />
            <IDArea className="flex-column">
              <span className={`id ${nickName.length >= 7 ? 'long' : ''}`}>{nickName}</span>
              <span className="id-number">#1234</span>
            </IDArea>
          </UserInfoSidebar>
          {sidebar ? (
            <SidebarItem
              icon={<Logout24 fill="white" className="sidebar-item-icon" />}
              text="로그아웃"
              mobile={false}
            />
          ) : null}
        </BottomSidebar>
      </Sidebar>
      {search ? (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
        <Modal className="full-width full-height" onClick={onClickSearch} search={search}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <ModalContent onClick={(event: any) => event.stopPropagation()}>
            <Input
              label="검색"
              helperText={undefined}
              value={searchValue}
              onChange={onChangeSearch}
              onPressEnter={onEnterSearch}
              autoFocus
            />
            <ModalFooter className="footer flex">
              <Button buttonType="filled" width="100px" onClick={onClickSearch}>
                취소
              </Button>
              <Button width="100px">검색</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}

export default SidebarDesktop;
