import React, { useContext, useEffect, useRef } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { diaryInterface } from 'interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFunction } from 'libs';
import { toast } from 'react-toastify';
import WriteDiary from './writeDiary';

function WriteDiaryContainer() {
  const rootStore = useContext(MobXProviderContext);
  const updateTarget = useParams().diaryID;
  const selectedImage = rootStore.diaryStore.getSelectedImage;
  const privateCheck = rootStore.diaryStore.getPrivateCheck;
  const tagList = rootStore.diaryStore.getTagList;
  const selectedTag = rootStore.diaryStore.getSelectedTag;
  const imageRef = useRef<HTMLInputElement>(null);
  const navigator = useNavigate();

  useEffect(() => {
    rootStore.diaryStore.setTagList(['기본태그1', '기본태그2', '기본태그3', '기본태그4', 'test1', 'test2', 'test3']);
    rootStore.diaryStore.setSelectedImage({}, '');
    rootStore.diaryStore.setSelectedTag([]);
    rootStore.diaryStore.setPrivateCheck(false);
  }, [updateTarget]);

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
    rootStore.diaryStore.togglePrivateCheck();
  };

  const onChange: diaryInterface.creatableSelectorOnChangeType = (inputValue, action) => {
    rootStore.diaryStore.setSelectedTag(inputValue);
    if (action.action === 'create-option') {
      rootStore.diaryStore.setTagList([...tagList, action.option.label]);
    }
  };

  const onSubmit = () => {
    if (!selectedImage.imageFile.name) {
      toast.error('이미지를 선택해주세요');
      return;
    }
    const sendTag: string[] = [];
    selectedTag.forEach((value: diaryInterface.Option) => sendTag.push(value.value));

    const formData = new FormData();
    formData.append('nickName', rootStore.accountStore.getNickName);
    formData.append('nickNameTag', rootStore.accountStore.getNickNameTag);
    formData.append('image', selectedImage.imageFile);
    formData.append('tag', JSON.stringify(sendTag));
    formData.append('privateDiary', privateCheck);

    fetchFunction.axiosPost('diary/newDiary', formData, true).then((response) => {
      if (response.status === 200) {
        toast.success('일기 작성 완료');
        navigator('/diary');
      } else {
        toast.error(response.message);
      }
    });
  };

  const onEvent = {
    onFileUpload,
    onClickFile,
  };

  return (
    <WriteDiary
      preview={selectedImage.preview}
      imageRef={imageRef}
      checked={privateCheck}
      toggleItem={toggleItem}
      tagList={tagOption}
      selectedTag={selectedTag}
      onChange={onChange}
      onSubmit={onSubmit}
      onEvent={onEvent}
    />
  );
}

export default observer(WriteDiaryContainer);
