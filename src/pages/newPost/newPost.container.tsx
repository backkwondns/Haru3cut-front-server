import React, { useContext, useRef } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import NewPost from './newPost';

function NewPostContainer() {
  const rootStore = useContext(MobXProviderContext);
  const selectedImage = rootStore.diaryStore.getSelectedImage;
  const privateCheck = rootStore.diaryStore.getPrivateCheck;

  const imageRef = useRef<HTMLInputElement>(null);

  const onFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.currentTarget.files) {
      const image = event.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        if (reader.result) {
          const result = reader.result as string;
          rootStore.diaryStore.setSelectedImage(image, result);
        }
      };
    }
  };

  const onClickFile = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const toggleItem = () => {
    rootStore.diaryStore.setPrivateCheck();
  };

  const onEvent = {
    onFileUpload,
    onClickFile,
  };
  return (
    <NewPost
      preview={selectedImage.preview}
      imageRef={imageRef}
      checked={privateCheck}
      toggleItem={toggleItem}
      onEvent={onEvent}
    />
  );
}

export default observer(NewPostContainer);
