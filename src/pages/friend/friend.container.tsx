import React, { useContext, useEffect, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { fetchFunction } from 'libs';
import { diaryInterface } from 'interfaces';
import { toast } from 'react-toastify';
import { NonDiary } from 'atoms';
import Friend from './friend';

function FriendContainer() {
  const rootStore = useContext(MobXProviderContext);
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const [statusMessage, setStatusMessage] = useState<string>();

  const friendDiary = rootStore.diaryStore.getFriendDiary;

  useEffect(() => {
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

  return friendDiary.length ? (
    <Friend friendDiary={friendDiary} onSave={onSave} />
  ) : (
    <NonDiary>{statusMessage}</NonDiary>
  );
}

export default observer(FriendContainer);
