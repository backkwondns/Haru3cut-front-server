import { organismsInterface } from 'interfaces';
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  border: 1px solid #80808060;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
`;

const Image = styled.input`
  display: none;
`;

function ImageSelector(props: organismsInterface.imageSelectorInterface) {
  const { preview, imageRef, text, onEvent } = props;
  const { onFileUpload, onClickFile } = onEvent;

  return (
    <ImageContainer onClick={onClickFile}>
      <Image
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        id="image"
        alt="사진 선택"
        ref={imageRef}
        onChange={onFileUpload}
      />
      {preview ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <img src={preview} width="100%" height="100%" alt="preview" />
      ) : (
        <label htmlFor="image">{text}</label>
      )}
    </ImageContainer>
  );
}

export default ImageSelector;
