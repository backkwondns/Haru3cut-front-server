import React from 'react';
import { CheckItem, ImageSelector } from 'organisms';
import { diaryInterface } from 'interfaces';

function NewPost(props: diaryInterface.newPostInterface) {
  const { preview, imageRef, checked, toggleItem, onEvent } = props;

  return (
    <>
      <ImageSelector preview={preview} imageRef={imageRef} onEvent={onEvent} text="파일선택" />{' '}
      <CheckItem value="공개" checked={checked} toggleItem={toggleItem} />
    </>
  );
}

export default NewPost;
