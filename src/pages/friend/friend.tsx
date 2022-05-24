import React from 'react';
import { diaryInterface, friendInterface } from 'interfaces';
import { FriendAddContainer, Post } from 'organisms';
import { v4 as uuid } from 'uuid';

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
      <FriendAddContainer
        add={add}
        friendSearch={friendSearch}
        searchedFriend={searchedFriend}
        onSearchFriend={onSearchFriend}
        onRequestFriend={onRequestFriend}
        onChangeFriendSearch={onChangeFriendSearch}
        onPressKeyNameTag={onPressKeyNameTag}
      />
      {friendDiary
        ? friendDiary.map((value: diaryInterface.diary) => {
            return <Post key={uuid()} data={value} onSave={onSave} />;
          })
        : null}
    </div>
  );
}

export default Friend;
