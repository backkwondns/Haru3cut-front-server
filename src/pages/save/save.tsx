import React from 'react';
import { diaryInterface } from 'interfaces';
import { Post } from 'organisms/index';
import { v4 as uuid } from 'uuid';

function Save(props: diaryInterface.saveDiaryInterface) {
  const { saveDiary, onSave } = props;
  return (
    <div className="full-height">
      {saveDiary
        ? saveDiary.map((value: diaryInterface.diary) => {
            return <Post key={uuid()} data={value} onSave={onSave} />;
          })
        : null}
    </div>
  );
}

export default Save;
