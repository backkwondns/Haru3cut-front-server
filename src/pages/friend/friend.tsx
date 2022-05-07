import React from 'react';
import { diaryInterface } from 'interfaces';
import { Post } from 'organisms';
import { v4 as uuid } from 'uuid';

function Friend(props: diaryInterface.friendInterface) {
  const { friendDiary, onSave } = props;
  return (
    <div className="full-height">
      {friendDiary
        ? friendDiary.map((value: diaryInterface.diary) => {
            return <Post key={uuid()} data={value} onSave={onSave} />;
          })
        : null}
    </div>
  );
}

export default Friend;
