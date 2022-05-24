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
  const [saveDiary, setSaveDiary] = useState<diaryInterface.diary[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>();

  useEffect(() => {
    const sendForm = {
      nickName,
      nickNameTag,
    };
    fetchFunction.axiosPost<diaryInterface.diary[]>('diary/savedDiary', sendForm).then((value) => {
      if (value.status === 200) {
        setSaveDiary(() => [...value.result]);
      } else if (value.status === 404) {
        setStatusMessage('볼 수 있는 일기가 없어요😢');
      } else {
        toast.error(value.message);
      }
    });
  }, [saveDiary.length]);

  const onSave = (event: React.MouseEvent<SVGElement>) => {
    const diaryID = event.currentTarget.id;
    const sendForm = {
      nickName,
      nickNameTag,
      diaryID,
    };
    fetchFunction.axiosPost<string>('diary/saveDiary', sendForm).then((value) => {
      if (value.status === 200) {
        setSaveDiary((prevState) => prevState.filter((value: diaryInterface.diary) => value.id !== diaryID));
      } else {
        toast.error(value.message);
      }
    });
  };

  return saveDiary.length ? <Save saveDiary={saveDiary} onSave={onSave} /> : <NonDiary>{statusMessage}</NonDiary>;
}

export default observer(SaveContainer);
