import React, { useContext, useEffect } from 'react';
import { fetchFunction } from 'libs';
import { MobXProviderContext, observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { diaryInterface } from 'interfaces';
import { NonDiary } from 'atoms';
import { toast } from 'react-toastify';
import Diary from './diary';

function DiaryContainer() {
  const rootStore = useContext(MobXProviderContext);
  const navigator = useNavigate();
  const diary = rootStore.diaryStore.getDiary;

  useEffect(() => {
    const sendForm = {
      nickName: rootStore.accountStore.getNickName,
      nickNameTag: rootStore.accountStore.getNickNameTag,
    };
    fetchFunction.axiosPost<diaryInterface.diary[]>('diary/getMyDiary', sendForm).then((value) => {
      if (value.status === 200) {
        rootStore.diaryStore.setDiary(value.result);
      } else if (value.status === 500) {
        toast.error(value.message);
      }
    });
  }, []);

  const onEdit = (event: React.MouseEvent<SVGElement>) => {
    navigator(`/writediary/${event.currentTarget.id}`);
  };
  return diary.length ? <Diary diary={diary} onEdit={onEdit} /> : <NonDiary>아직 글이 없어요😢</NonDiary>;
}

export default observer(DiaryContainer);
