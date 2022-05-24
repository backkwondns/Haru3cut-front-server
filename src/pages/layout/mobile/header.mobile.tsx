import { Input } from 'atoms';
import { Avatar, IconButton, UserInfoArea } from 'organisms';
import { Add24, Dehaze24, Search24 } from 'icons';
import React from 'react';
import { layoutInterface } from 'interfaces';
import styled, { css, keyframes } from 'styled-components';

const slideTop = keyframes`
  from {
    top: -100px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`;

const ContainerHeader = styled.div`
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  border-bottom: 1px solid #60606040;
`;

const SearchArea = styled.div`
  position: absolute;
  top: 70px;
  right: 0px;
  width: 100%;
  height: 30px;
  background-color: white;
`;

const SearchAreaAnimation = styled(SearchArea)`
  animation-name: ${slideTop};
  animation-duration: 0.1s;
`;

const SearchInput = styled(Input)`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  height: 70px;
`;

const AddIcon = styled(IconButton)`
  ${({ open }: { open: boolean }) => {
    return css`
      transition: 0.2s all ease;
      transform: rotate(${open ? '45deg' : '0deg'});
    `;
  }}
`;

function HeaderMobile(props: layoutInterface.headerMobileInterface) {
  const { nickName, nickNameTag, avatar, searchValue, search, location, add, onEvent } = props;
  const { onClickSearch, onClickMore, onEnterSearch, onChangeSearch, onClickAdd } = onEvent;
  return (
    <>
      <ContainerHeader className="flex">
        <UserInfoArea nickName={nickName} nickNameTag={nickNameTag} avatar={avatar} />
        <div className="rightArea flex">
          {location === '/friend' ||
          location === '/party' ||
          location === '/friendSetting' ||
          location === 'partySetting' ? (
            <AddIcon open={add} icon={<Add24 />} onClick={onClickAdd} />
          ) : null}
          <IconButton icon={<Search24 />} onClick={onClickSearch} />
          <IconButton icon={<Dehaze24 />} id="more" onClick={onClickMore} />
        </div>
      </ContainerHeader>
      {search ? (
        <SearchAreaAnimation className="flex">
          <SearchInput
            className="search-input"
            helperText={undefined}
            value={searchValue}
            noLabel
            onChange={onChangeSearch}
            onPressEnter={onEnterSearch}
          />
        </SearchAreaAnimation>
      ) : null}
    </>
  );
}

export default HeaderMobile;
