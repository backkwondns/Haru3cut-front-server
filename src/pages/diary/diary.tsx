import { diaryInterface } from 'interfaces';
import React from 'react';
import Post from 'organisms/post';
import { v4 as uuid } from 'uuid';

function Diary(props: diaryInterface.diaryInterface) {
  const { posts, onEdit } = props;
  return (
    <div>
      {posts.map((value) => {
        return <Post key={uuid()} data={value} onEdit={onEdit} />;
      })}
    </div>
  );
}

export default Diary;
