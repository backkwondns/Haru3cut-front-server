import React, { useContext, useEffect } from 'react';
import { fetchFunction } from 'libs';
import { MobXProviderContext, observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { diaryInterface } from 'interfaces';
import Diary from './diary';

function DiaryContainer() {
  const rootStore = useContext(MobXProviderContext);
  const navigator = useNavigate();
  const nickName = rootStore.accountStore.getNickName;
  const nickNameTag = rootStore.accountStore.getNickNameTag;
  const posts = rootStore.diaryStore.getPosts;
  useEffect(() => {
    (async () => {
      const result = await fetchFunction.axiosPost<diaryInterface.post[]>('post/getMyDiary', { nickName, nickNameTag });
      rootStore.diaryStore.setPosts(result.result);
    })();
  }, []);

  const onEdit = (event: React.MouseEvent<SVGElement>) => {
    navigator(`/writepost/${event.currentTarget.id}`);
  };
  return <Diary posts={posts} onEdit={onEdit} />;
}

export default observer(DiaryContainer);
