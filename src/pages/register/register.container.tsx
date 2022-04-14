import React, { useContext, useEffect, useState } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { fetchFunction, stringFunction } from 'libs';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { commonInterface } from 'interfaces';
import RegisterDesktop from './register.desktop';
import RegisterMobile from './register.mobile';

const Container = styled.div`
  ${({ height }: { height: commonInterface.heightType }) => {
    return css`
      height: ${height}px;
    `;
  }}
`;

function RegisterContainer() {
  const rootStore = useContext(MobXProviderContext);
  const { width, height } = rootStore.themeStore.getWindowSize;
  const navigate = useNavigate();

  const [input, setInput] = useState({
    nickName: '',
    email: '',
    passWord: '',
    passWordCheck: '',
    phoneNumber: '',
  });

  const [helperText, setHelperText] = useState({
    nickName: '_',
    email: '_',
    passWord: '_',
    passWordCheck: '_',
    phoneNumber: '_',
  });

  useEffect(() => {
    if (
      Object.values(helperText)
        .map((value: string) => value === '')
        .every((bool) => bool === true)
    ) {
      const result = fetchFunction.axiosPost('register', input);
      console.log(result);
    }
  }, [helperText]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setInput({ ...input, [name]: value });
  };

  const onClickSubmit = async () => {
    const result = stringFunction.validateInput({
      nickName: input.nickName,
      email: input.email,
      passWord: input.passWord,
      passWordCheck: input.passWordCheck,
      phoneNumber: input.phoneNumber,
    });
    await setHelperText({
      nickName: result.nickName === 'ok' ? '' : result.nickName,
      email: result.email === 'ok' ? '' : result.email,
      passWord: result.passWord === 'ok' ? '' : result.passWord,
      passWordCheck: result.passWordCheck === 'ok' ? '' : result.passWordCheck,
      phoneNumber: result.phoneNumber === 'ok' ? '' : result.phoneNumber,
    });
  };

  const onClickBackIcon = () => {
    navigate('/login');
  };

  return (
    <Container height={height}>
      {width > 620 ? (
        <RegisterDesktop
          input={input}
          helperText={helperText}
          onChangeInput={onChangeInput}
          onClickSubmit={onClickSubmit}
        />
      ) : (
        <RegisterMobile
          input={input}
          helperText={helperText}
          onChangeInput={onChangeInput}
          onClickSubmit={onClickSubmit}
          onClickBackIcon={onClickBackIcon}
        />
      )}
    </Container>
  );
}

export default observer(RegisterContainer);
