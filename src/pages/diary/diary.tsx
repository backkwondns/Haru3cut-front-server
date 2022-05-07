import { diaryInterface } from 'interfaces';
import React from 'react';
import Post from 'organisms/post';
import { v4 as uuid } from 'uuid';

function Diary(props: diaryInterface.diaryInterface) {
  const { diary, onEdit } = props;
  return (
    <div className="full-height">
      {diary
        ? diary.map((value) => {
            return <Post key={uuid()} data={value} onEdit={onEdit} />;
          })
        : null}
    </div>
  );
}

export default Diary;
