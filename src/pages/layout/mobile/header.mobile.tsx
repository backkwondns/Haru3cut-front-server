import { Input } from 'atoms';
import { Avatar, IconButton } from 'organisms';
import { Dehaze24, Search24 } from 'icons';
import React from 'react';
import { commonInterface, layoutInterface } from 'interfaces';
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
  width: 70%;
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

const SearchIcon = styled(IconButton)`
  ${({ search }: { search: commonInterface.booleanType }) => {
    return css`
      ${search
        ? `&:before {
        content: '';
        position: absolute;
        top: 20px;
        width: 0;
        height: 0;
        background-color: white;
        border: 20px solid transparent;
        border-right-color: rgba(0, 0, 0, 0.08); /* Black w/ opacity */
        border-left: 0;
        border-bottom: 0;
        margin-top: 30px;
        margin-right: 10px;
        `
        : null}
    `;
  }}
}
`;

const SearchIconAnimation = styled(SearchIcon)`
  animation-name: ${slideTop};
  animation-duration: 0.1s;
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
  const { nickName, searchValue, search, onEvent } = props;
  const { onClickSearch, onClickMore, onEnterSearch, onChangeSearch } = onEvent;
  return (
    <>
      <ContainerHeader className="flex">
        <div className="leftArea flex">
          <Avatar avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg" />
          <IDArea className="flex-column">
            <span className={`id ${nickName.length >= 7 ? 'long' : ''}`}>{nickName}</span>
            <span className="id-number">#1234</span>
          </IDArea>
        </div>
        <div className="rightArea flex">
          <SearchIconAnimation search={search} icon={<Search24 />} onClick={onClickSearch} />
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
