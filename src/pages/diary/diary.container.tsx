import React, { useContext, useEffect } from 'react';
import { fetchFunction } from 'libs';
import { MobXProviderContext, observer } from 'mobx-react';
import Diary from './diary';

function DiaryContainer() {
  const rootStore = useContext(MobXProviderContext);
  const posts = rootStore.diaryStore.getPosts;
  useEffect(() => {
    (async () => {
      const result = await fetchFunction.axiosGet('postmockup');
      rootStore.diaryStore.setPosts(result.result);
    })();
  }, []);

  const onEdit = (event: React.MouseEvent<SVGElement>) => {
    console.log(event.currentTarget.id);
  };
  return <Diary posts={posts} onEdit={onEdit} />;
}

export default observer(DiaryContainer);
