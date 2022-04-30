import React, { useContext, useEffect, useRef } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { diaryInterface } from 'interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFunction } from 'libs';
import { toast } from 'react-toastify';
import WritePost from './writePost';

function UpdatePostContainer() {
  const rootStore = useContext(MobXProviderContext);
  const updateTarget = useParams().postID;
  const selectedImage = rootStore.diaryStore.getSelectedImage;
  const privateCheck = rootStore.diaryStore.getPrivateCheck;
  const tagList = rootStore.diaryStore.getTagList;
  const selectedTag = rootStore.diaryStore.getSelectedTag;
  const imageRef = useRef<HTMLInputElement>(null);
  const navigator = useNavigate();

  useEffect(() => {
    rootStore.diaryStore.setTagList(['기본태그1', '기본태그2', '기본태그3', '기본태그4', 'test1', 'test2', 'test3']);
    const sendForm = {
      nickName: rootStore.accountStore.getNickName,
      nickNameTag: rootStore.accountStore.getNickNameTag,
      postID: updateTarget,
    };
    fetchFunction.axiosPost<diaryInterface.post>(`post/getOneDiary`, sendForm).then((value) => {
      if (value.status !== 200) {
        toast.error('잘못된 접근입니다.');
        navigator('/diary');
      }
      const tagTmp: { label: string; value: string }[] = [];
      value.result.tag.forEach((value: string) => tagTmp.push({ value, label: value }));
      rootStore.diaryStore.setSelectedImage({}, value.result.image);
      rootStore.diaryStore.setSelectedTag(tagTmp);
      rootStore.diaryStore.setPrivateCheck(value.result.privatePost);
    });
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
    const sendTag: string[] = [];
    selectedTag.forEach((value: diaryInterface.Option) => sendTag.push(value.value));

    const formData = new FormData();
    formData.append('postID', updateTarget!);
    formData.append('nickName', rootStore.accountStore.getNickName);
    formData.append('nickNameTag', rootStore.accountStore.getNickNameTag);
    if (selectedImage.imageFile.name) {
      formData.append('image', selectedImage.imageFile);
    }
    formData.append('tag', JSON.stringify(sendTag));
    formData.append('privatePost', privateCheck);

    fetchFunction.axiosPost('post/updateDiary', formData, true).then((response) => {
      if (response.status === 200) {
        toast.success('일기 수정 완료', { autoClose: 300 });
        navigator('/diary');
      } else {
        toast.error(response.message);
      }
    });
  };

  const onDelete = () => {
    const formData = {
      postID: updateTarget,
      nickName: rootStore.accountStore.getNickName,
      nickNameTag: rootStore.accountStore.getNickNameTag,
    };
    fetchFunction.axiosPost('post/deleteDiary', formData).then((response) => {
      if (response.status === 200) {
        toast.success('일기 삭제 완료');
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
    <WritePost
      preview={selectedImage.preview}
      imageRef={imageRef}
      checked={privateCheck}
      toggleItem={toggleItem}
      tagList={tagOption}
      selectedTag={selectedTag}
      updateTarget={updateTarget}
      onChange={onChange}
      onSubmit={onSubmit}
      onDelete={onDelete}
      onEvent={onEvent}
    />
  );
}

export default observer(UpdatePostContainer);
