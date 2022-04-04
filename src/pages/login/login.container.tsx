import React, { useContext, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import styled, { css } from 'styled-components';
import { commonInterface } from 'interfaces/index';
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

  const [input, setInput] = useState({
    email: '',
    passWord: '',
  });

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setInput({ ...input, [name]: value });
  };

  const onClickLogin = () => {
    console.log('login process');
  };

  return (
    <Container height={height}>
      {width > 620 ? (
        <LoginDesktop input={input} onChangeInput={onChangeInput} onClickLogin={onClickLogin} />
      ) : (
        <LoginMobile input={input} onChangeInput={onChangeInput} onClickLogin={onClickLogin} />
      )}
    </Container>
  );
}

export default observer(LoginContainer);
