import React, { useContext, useEffect, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { fetchFunction } from 'libs';
import { diaryInterface, friendInterface } from 'interfaces';
import { toast } from 'react-toastify';
import { Button, NonDiary } from 'atoms';
import Friend from './friend';

function FriendContainer() {
  const rootStore = useContext(MobXProviderContext);
  const { width } = rootStore.themeStore.getWindowSize;
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const add = rootStore.themeStore.getAdd;
  const friendDiary = rootStore.diaryStore.getFriendDiary;
  const [statusMessage, setStatusMessage] = useState<string>();

  const [friendSearch, setFriendSearch] = useState<friendInterface.friendSearchStateInterface>({
    friendName: '',
    friendNameTag: '',
  });

  const [searchedFriend, setSearchedFriend] = useState<friendInterface.searchedFriendInterface>({
    nickName: '',
    nickNameTag,
    avatar: '',
    friendStatus: 'None',
    trigger: false,
  });

  useEffect(() => {
    rootStore.themeStore.setAddFalse();
    const sendForm = {
      nickName,
      nickNameTag,
      friendList: rootStore.accountStore.getFriendList,
    };
    fetchFunction.axiosPost<diaryInterface.diary[]>('diary/friendDiary', sendForm).then((value) => {
      if (value.status === 200) {
        rootStore.diaryStore.setFriendDiary(value.result);
      } else if (value.status === 300) {
        setStatusMessage('아직 등록된 친구가 없어요😢');
      } else if (value.status === 404) {
        setStatusMessage('볼 수 있는 일기가 없어요😢');
      } else {
        toast.error(value.message);
      }
    });
  }, []);

  const onChangeFriendSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setFriendSearch({ ...friendSearch, [name]: value });
  };

  const onSave = (event: React.MouseEvent<SVGElement>) => {
    const sendForm = {
      nickName,
      nickNameTag,
      diaryID: event.currentTarget.id,
    };
    fetchFunction.axiosPost<string>('diary/saveDiary', sendForm).then((value) => {
      if (value.status === 200) {
        rootStore.diaryStore.toggleSavedFriendDiary(value.result);
      } else {
        toast.error(value.message);
      }
    });
  };
  const onClickAdd = () => {
    rootStore.themeStore.toggleAdd();
  };

  const onSearchFriend = () => {
    const sendForm = {
      nickName,
      nickNameTag,
      friendInfo: friendSearch,
    };
    fetchFunction
      .axiosPost<friendInterface.friendSearchResponseInterface>('account/searchFriend', sendForm)
      .then((value) => {
        if (value.status === 200) {
          setSearchedFriend({ ...value.result, trigger: true });
        } else if (value.status === 404) {
          setSearchedFriend({ ...searchedFriend, trigger: 'None' });
        } else {
          toast.error(value.message);
        }
      });
  };

  const onRequestFriend = () => {
    const sendForm = {
      nickName,
      nickNameTag,
      friendInfo: friendSearch,
    };
    setSearchedFriend({ ...searchedFriend, friendStatus: 'Requested' });
    fetchFunction.axiosPost('account/requestFriend', sendForm).then((value) => {
      if (value.status === 200) {
        toast.info('친구 요청 완료');
      } else {
        toast.error(value.message);
      }
    });
  };

  const onPressKeyNameTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
    if (event.key === 'Enter') {
      onSearchFriend();
    }
  };

  return (
    <div className="flex-column">
      {width > 620 ? (
        <div className="full-width" style={{ marginTop: '10px' }}>
          <Button onClick={onClickAdd}>친구 추가</Button>
        </div>
      ) : null}
      {friendDiary.length ? (
        <Friend
          friendDiary={friendDiary}
          add={add}
          friendSearch={friendSearch}
          searchedFriend={searchedFriend}
          onSave={onSave}
          onChangeFriendSearch={onChangeFriendSearch}
          onSearchFriend={onSearchFriend}
          onRequestFriend={onRequestFriend}
          onPressKeyNameTag={onPressKeyNameTag}
        />
      ) : (
        <NonDiary>{statusMessage}</NonDiary>
      )}
    </div>
  );
}

export default observer(FriendContainer);
