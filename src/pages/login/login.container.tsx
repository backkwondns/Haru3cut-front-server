import React, { useContext, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import styled, { css } from 'styled-components';
import { commonInterface } from 'interfaces';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosPost } from 'libs/fetchFunction';
import LoginDesktop from './login.desktop';
import LoginMobile from './login.mobile';

const Container = styled.div`
  ${({ height }: { height: commonInterface.heightType }) => {
    return css`
      height: ${height}px;
    `;
  }}
`;

function LoginContainer() {
  const rootStore = useContext(MobXProviderContext);
  const { width, height } = rootStore.themeStore.getWindowSize;
  const navigator = useNavigate();

  const [input, setInput] = useState({
    email: '',
    passWord: '',
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setInput({ ...input, [name]: value });
  };

  const onClickLogin = async () => {
    const result = await axiosPost<commonInterface.loginResponse>('account/login', input);
    if (result.status === 200) {
      rootStore.accountStore.setNickName(result.result.nickName);
      rootStore.accountStore.setNickNameTag(result.result.nickNameTag);
      rootStore.accountStore.setEmail(result.result.email);
      rootStore.accountStore.setPhoneNumber(result.result.phoneNumber);
      rootStore.accountStore.setFriendList(result.result.friendList);
      rootStore.accountStore.setFriendRequestList(result.result.friendRequestList);
      rootStore.accountStore.setFriendWaitList(result.result.friendWaitList);
      rootStore.accountStore.setFriendBlackList(result.result.friendBlackList);
      rootStore.themeStore.setLanguage(result.result.setting.language);
      rootStore.themeStore.setMode(result.result.setting.mode);
      rootStore.themeStore.setAvatar(result.result.setting.avatar);
      toast.success(result.message);
      navigator('/diary');
    } else {
      toast.error(result.message);
    }
  };

  const onEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClickLogin();
    }
  };

  return (
    <Container height={height}>
      {width > 620 ? (
        <LoginDesktop input={input} onChangeInput={onChangeInput} onClickLogin={onClickLogin} onEnter={onEnter} />
      ) : (
        <LoginMobile input={input} onChangeInput={onChangeInput} onClickLogin={onClickLogin} onEnter={onEnter} />
      )}
    </Container>
  );
}

export default observer(LoginContainer);
