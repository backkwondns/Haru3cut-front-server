import React from 'react';
import { Button, Input } from 'atoms/index';
import { loginInterface } from 'interfaces';
import styled from 'styled-components';
import NavButton from 'atoms/navButton';

const LayoutContainer = styled.div`
   {
    height: 100vh;
  }
`;
const Container = styled.div`
   {
    width: 50%;
    padding: 16px;
  }
`;
const ButtonContainer = styled.div`
   {
    margin-top: 20px;
  }
`;
const Title = styled.span`
   {
    font-size: 36px;
    margin-top: 56px;
    text-align: center;
  }
`;

function LoginDesktop(props: loginInterface.loginInterface): JSX.Element {
  const { input, onChangeInput, onClickLogin, onEnter } = props;

  return (
    <LayoutContainer className="flex-column center full-width">
      <Title>하루세컷</Title>
      <Container className="flex-column center full-height">
        <Input label="Email" name="email" value={input.email} onChange={onChangeInput} />
        <Input
          label="암호"
          name="passWord"
          value={input.passWord}
          type="password"
          onChange={onChangeInput}
          onPressEnter={onEnter}
        />
        <ButtonContainer className="flex full-width ">
          <NavButton link="/register" buttonType="outlined" text="회원가입" style={{ marginRight: '10px' }} />
          <Button className="button" buttonType="filled" onClick={onClickLogin} style={{ marginLeft: '10px' }}>
            로그인
          </Button>
        </ButtonContainer>
      </Container>
    </LayoutContainer>
  );
}

export default LoginDesktop;
