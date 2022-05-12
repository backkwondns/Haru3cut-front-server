import React from 'react';
import { commonInterface, diaryInterface, friendInterface } from 'interfaces';
import { IconButton, Post, UserInfoArea } from 'organisms';
import { v4 as uuid } from 'uuid';
import styled, { css } from 'styled-components';
import { Button, Input } from 'atoms';
import { Add24 } from 'icons';

const AddContainer = styled.div`
  ${({ open }: { open: commonInterface.booleanType }) => {
    return css`
      transition: 0.2s all ease;
      transform: translateY(${open ? '30px' : '-1000px'});
    `;
  }}
  display: flex;
  width: calc(100% - 20px);
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  z-index: 10000;
  background: white;
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

const AddInput = styled(Input)`
  color: #6667ab;
`;

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 5px;
`;

const AddSearchButton = styled(Button)`
  display: flex;
  flex: 1;
`;

const SearchedFriendContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 10px 0 10px 0;
  justify-content: space-between;
  align-items: center;
`;

const AddFriendButtonContainer = styled.div`
  align-items: end;
  stroke: gray;
  stroke-linejoin: round;
`;
function Friend(props: friendInterface.friendInterface) {
  const {
    friendDiary,
    add,
    friendSearch,
    searchedFriend,
    onSave,
    onChangeFriendSearch,
    onSearchFriend,
    onRequestFriend,
    onPressKeyNameTag,
  } = props;
  return (
    <div className="full-height">
      <AddContainer open={add}>
        <InputContainer>
          <AddInput
            label="NickName"
            name="friendName"
            value={friendSearch.friendName}
            helperColor="#6667ab"
            helperText={false}
            onChange={onChangeFriendSearch}
          />
          <AddInput
            label="NickNameTag"
            name="friendNameTag"
            value={friendSearch.friendNameTag}
            helperColor="#6667ab"
            helperText={false}
            onChange={onChangeFriendSearch}
            onPressEnter={onPressKeyNameTag}
          />
        </InputContainer>
        <AddSearchButton onClick={onSearchFriend}>검색</AddSearchButton>
        {searchedFriend.trigger &&
          (searchedFriend.trigger === 'None' ? (
            <SearchedFriendContainer style={{ justifyContent: 'center' }}>
              해당 사용자가 없습니다
            </SearchedFriendContainer>
          ) : (
            <SearchedFriendContainer>
              <UserInfoArea
                nickName={searchedFriend.nickName}
                nickNameTag={searchedFriend.nickNameTag}
                avatar={searchedFriend.avatar}
              />
              <span>{searchedFriend.friendStatus === 'None' ? '' : '이미 등록되거나 요청한 친구입니다.'}</span>
              <AddFriendButtonContainer>
                <IconButton
                  icon={<Add24 fill={searchedFriend.friendStatus !== 'None' ? '#80808060' : ''} />}
                  disabled={searchedFriend.friendStatus !== 'None'}
                  onClick={onRequestFriend}
                />
              </AddFriendButtonContainer>
            </SearchedFriendContainer>
          ))}
      </AddContainer>
      {friendDiary
        ? friendDiary.map((value: diaryInterface.diary) => {
            return <Post key={uuid()} data={value} onSave={onSave} />;
          })
        : null}
    </div>
  );
}

export default Friend;
