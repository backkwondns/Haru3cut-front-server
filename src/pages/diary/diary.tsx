import { diaryInterface } from 'interfaces';
import React from 'react';
import Post from 'organisms/post';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const NonPost = styled.div`
  font-family: KyoboHand;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function Diary(props: diaryInterface.diaryInterface) {
  const { posts, onEdit } = props;
  return (
    <div className="full-height">
      {posts ? (
        posts.map((value) => {
          return <Post key={uuid()} data={value} onEdit={onEdit} />;
        })
      ) : (
        <NonPost>아직 글이 없어요😢</NonPost>
      )}
    </div>
  );
}

export default Diary;
