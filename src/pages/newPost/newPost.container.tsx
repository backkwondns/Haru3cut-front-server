import React, { useContext, useEffect, useRef } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { diaryInterface } from 'interfaces';
import NewPost from './newPost';

function NewPostContainer() {
  const rootStore = useContext(MobXProviderContext);
  const selectedImage = rootStore.diaryStore.getSelectedImage;
  const privateCheck = rootStore.diaryStore.getPrivateCheck;
  const tagList = rootStore.diaryStore.getTagList;
  // const selectedTag = rootStore.diaryStore.getSelectedTag;
  const imageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    rootStore.diaryStore.setTagList(['기본태그1', '기본태그2', '기본태그3', '기본태그4', 'test1', 'test2', 'test3']);
  }, []);

  const tagOption: { label: string; value: string }[] = [];
  tagList.forEach((value: string) => tagOption.push({ value, label: value }));

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

  const onChange: diaryInterface.creatableSelectorOnChangeType = (inputValue, action) => {
    rootStore.diaryStore.setSelectedTag(inputValue);
    if (action.action === 'create-option') {
      rootStore.diaryStore.setTagList([...tagList, action.option.label]);
    }
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
      tagList={tagOption}
      onChange={onChange}
      onEvent={onEvent}
    />
  );
}

export default observer(NewPostContainer);
