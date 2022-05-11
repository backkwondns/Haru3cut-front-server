import React, { useContext, useEffect, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { fetchFunction } from 'libs';
import { diaryInterface } from 'interfaces';
import { toast } from 'react-toastify';
import { NonDiary } from 'atoms';
import Save from './save';

function SaveContainer() {
  const rootStore = useContext(MobXProviderContext);
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const saveDiary = rootStore.diaryStore.getSaveDiary;
  const [statusMessage, setStatusMessage] = useState<string>();

  useEffect(() => {
    const sendForm = {
      nickName,
      nickNameTag,
    };
    fetchFunction.axiosPost<diaryInterface.diary[]>('diary/savedDiary', sendForm).then((value) => {
      if (value.status === 200) {
        rootStore.diaryStore.setSaveDiary(value.result);
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
        rootStore.diaryStore.toggleSavedDiary(value.result);
      } else {
        toast.error(value.message);
      }
    });
  };

  return saveDiary.length ? <Save saveDiary={saveDiary} onSave={onSave} /> : <NonDiary>{statusMessage}</NonDiary>;
}

export default observer(SaveContainer);
