import React from 'react';
import { CheckItem, ImageSelector } from 'organisms';
import { diaryInterface } from 'interfaces';
import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function NewPost(props: diaryInterface.newPostInterface) {
  const { preview, imageRef, checked, toggleItem, tagList, onChange, onEvent } = props;

  return (
    <Container className="full-width full-height">
      <ImageSelector preview={preview} imageRef={imageRef} onEvent={onEvent} text="파일선택" />
      <CheckItem value="공개" checked={checked} toggleItem={toggleItem} />
      <CreatableSelect options={tagList} isMulti closeMenuOnSelect={false} isSearchable onChange={onChange} />
    </Container>
  );
}

export default NewPost;
