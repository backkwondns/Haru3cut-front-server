import { Input } from 'atoms';
import { Avatar, IconButton } from 'organisms';
import { Add24, Dehaze24, Logout24, Search24 } from 'icons';
import React from 'react';
import { layoutInterface } from 'interfaces';
import styled, { keyframes } from 'styled-components';

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

const IDArea = styled.div`
  margin-left: 10px;
  justify-content: center;
  .id.long {
    font-size: 14px;
  }
  .id-number {
    font-size: 13px;
    color: #00000060;
  }
`;

function HeaderMobile(props: layoutInterface.headerMobileInterface) {
  const { nickName, nickNameTag, avatar, searchValue, search, location, onEvent } = props;
  const { onClickSearch, onClickMore, onEnterSearch, onChangeSearch, onClickAdd } = onEvent;
  return (
    <>
      <ContainerHeader className="flex">
        <div className="leftArea flex">
          <Avatar avatar={avatar} />
          <IDArea className="flex-column">
            <span className={`id ${nickName.length >= 7 ? 'long' : ''}`}>{nickName}</span>
            <span className="id-number">#{nickNameTag}</span>
          </IDArea>
        </div>
        <div className="rightArea flex">
          {location === '/friend' || location === '/party' ? (
            <IconButton icon={<Add24 />} onClick={onClickAdd} />
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
