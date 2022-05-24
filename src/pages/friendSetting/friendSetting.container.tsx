import React, { useContext, useEffect, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { friendInterface } from 'interfaces/index';
import { toast } from 'react-toastify';
import { Button } from 'atoms/index';
import { fetchFunction } from '../../libs';
import FriendSetting from './friendSetting';
import { axiosPost } from '../../libs/fetchFunction';

function FriendSettingContainer() {
  const rootStore = useContext(MobXProviderContext);
  const { width } = rootStore.themeStore.getWindowSize;
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const add = rootStore.themeStore.getAdd;

  const [friendSearch, setFriendSearch] = useState<friendInterface.friendInfoInterface>({
    friendName: '',
    friendNameTag: 0,
  });

  const [searchedFriend, setSearchedFriend] = useState<friendInterface.searchedFriendInterface>({
    nickName: '',
    nickNameTag,
    avatar: '',
    friendStatus: 'None',
    trigger: false,
  });

  const [friendList, setFriendList] = useState<friendInterface.friendInfoInterface[]>([]);
  const [friendWaitList, setFriendWaitList] = useState<friendInterface.friendInfoInterface[]>([]);
  const [friendRequestList, setFriendRequestList] = useState<friendInterface.friendInfoInterface[]>([]);
  const [friendBlackList, setFriendBlackList] = useState<friendInterface.friendInfoInterface[]>([]);

  useEffect(() => {
    rootStore.themeStore.setAddFalse();
    const sendForm = {
      nickName,
      nickNameTag,
    };
    axiosPost<friendInterface.getFriendInterface>('account/getFriend', sendForm).then((value) => {
      if (value.status === 200) {
        setFriendList(value.result.friendList);
        setFriendWaitList(value.result.friendWaitList);
        setFriendRequestList(value.result.friendRequestList);
        setFriendBlackList(value.result.friendBlackList);
      }
    });
  }, []);

  const onChangeFriendSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setFriendSearch({ ...friendSearch, [name]: value });
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

  const onFriendClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const sendForm = {
      nickName,
      nickNameTag,
      friendInfo: { friendName: event.currentTarget.name, friendNameTag: event.currentTarget.id },
    };
    if (event.currentTarget.id === 'reject') {
      axiosPost('account/rejectFriend', sendForm);
    }
  };

  return (
    <div className="flex-column">
      {width > 620 ? (
        <div className="full-width" style={{ marginTop: '10px' }}>
          <Button onClick={onClickAdd}>친구 추가</Button>
        </div>
      ) : null}
      <FriendSetting
        friendList={friendList}
        friendRequestList={friendRequestList}
        friendWaitList={friendWaitList}
        friendBlackList={friendBlackList}
        add={add}
        friendSearch={friendSearch}
        searchedFriend={searchedFriend}
        onSearchFriend={onSearchFriend}
        onRequestFriend={onRequestFriend}
        onChangeFriendSearch={onChangeFriendSearch}
        onPressKeyNameTag={onPressKeyNameTag}
        onFriendClick={onFriendClick}
      />
    </div>
  );
}

export default observer(FriendSettingContainer);
