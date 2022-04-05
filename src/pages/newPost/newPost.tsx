import React, { useState } from 'react';
import { ImageSelector } from 'organisms';
import { diaryInterface } from 'interfaces';

function NewPost(props: diaryInterface.newPostInterface) {
  const { preview, imageRef, onEvent } = props;
  return <ImageSelector preview={preview} imageRef={imageRef} onEvent={onEvent} text="파일선택" />;
}

export default NewPost;
