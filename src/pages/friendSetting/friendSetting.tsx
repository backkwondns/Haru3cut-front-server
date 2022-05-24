import React from 'react';
import { friendInterface } from 'interfaces';
import { FriendAddContainer, UserInfoArea } from 'organisms';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ label }: { label: string }) => {
    return css`
      &:before {
        content: '${label}';
        position: relative;
        left: 0px;
        top: 0px;
      }
    `;
  }}
  display:flex;
  flex: 1;
  flex-direction: column;
  min-height: 60px;
  padding: 10px 10px 10px 10px{;
  border: 1px solid #80808060;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
`;
const ListContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
`;
function FriendSetting(props: friendInterface.friendSettingInterface) {
  const {
    friendList,
    friendRequestList,
    friendWaitList,
    friendBlackList,
    add,
    friendSearch,
    searchedFriend,
    onSearchFriend,
    onRequestFriend,
    onChangeFriendSearch,
    onPressKeyNameTag,
    onFriendClick,
  } = props;
  return (
    <div className="full-height">
      <FriendAddContainer
        add={add}
        friendSearch={friendSearch}
        searchedFriend={searchedFriend}
        onSearchFriend={onSearchFriend}
        onRequestFriend={onRequestFriend}
        onChangeFriendSearch={onChangeFriendSearch}
        onPressKeyNameTag={onPressKeyNameTag}
      />
      <Container label="친구 요청 목록">
        {friendRequestList.length !== 0 ? (
          friendRequestList.map((value) => {
            return (
              <ListContainer className="full-width">
                <UserInfoArea nickName={value.friendName} nickNameTag={value.friendNameTag} avatar={value.avatar!} />
              </ListContainer>
            );
          })
        ) : (
          <span>요청한 친구가 없습니다.</span>
        )}
      </Container>
      <Container label="친구 목록">
        {friendList.map((value) => {
          return (
            <ListContainer className="full-width">
              <UserInfoArea nickName={value.friendName} nickNameTag={value.friendNameTag} avatar={value.avatar!} />
            </ListContainer>
          );
        })}
      </Container>
    </div>
  );
}

export default FriendSetting;
