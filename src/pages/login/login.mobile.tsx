import React from 'react';
import { Button, Input } from 'atoms/index';
import { loginInterface } from 'interfaces';
import styled from 'styled-components';
import NavButton from 'atoms/navButton';

const LayoutContainer = styled.div`
  height: 100%;
`;
const Container = styled.div`
  height: 100%;
  width: 80%;
  padding: 16px;
`;
const Title = styled.span`
  font-size: 36px;
  margin-top: 56px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  margin-top: 20px;
`;

function LoginMobile(props: loginInterface.loginInterface): JSX.Element {
  const { input, onChangeInput, onClickLogin } = props;

  return (
    <LayoutContainer className="flex-column center full-width">
      <Title>하루세컷</Title>
      <Container className="flex-column center">
        <Input label="Email" width="100%" name="email" value={input.email} onChange={onChangeInput} />
        <Input
          label="암호"
          width="100%"
          name="passWord"
          value={input.passWord}
          type="password"
          onChange={onChangeInput}
        />
        <ButtonContainer className="flex-column full-width">
          <NavButton link="/register" buttonType="filled" text="회원가입" />
          <Button
            className="navButton"
            buttonType="none"
            color="#fff"
            style={{ marginTop: '30px' }}
            onClick={onClickLogin}
          >
            로그인
          </Button>
        </ButtonContainer>
      </Container>
    </LayoutContainer>
  );
}

export default LoginMobile;
