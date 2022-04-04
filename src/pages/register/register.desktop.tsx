import React from 'react';
import { Button, Input } from 'atoms/index';
import { registerInterface } from 'interfaces';
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

const Title = styled.span`
   {
    font-size: 36px;
    margin-top: 56px;
    text-align: center;
  }
`;

function RegisterDesktop(props: registerInterface.registerInterface): JSX.Element {
  const { input, helperText, onChangeInput, onClickSubmit } = props;
  return (
    <LayoutContainer className="flex-column center full-width">
      <Title>회원가입</Title>
      <Container className=" flex-column center full-height">
        <Input
          label="별명"
          name="nickName"
          value={input.nickName}
          helperText={helperText.nickName}
          onChange={onChangeInput}
        />
        <Input label="Email" name="email" value={input.email} helperText={helperText.email} onChange={onChangeInput} />
        <Input
          label="암호"
          name="passWord"
          value={input.passWord}
          helperText={helperText.passWord}
          type="password"
          onChange={onChangeInput}
        />
        <Input
          label="암호 재입력"
          name="passWordCheck"
          value={input.passWordCheck}
          helperText={helperText.passWordCheck}
          type="password"
          onChange={onChangeInput}
        />
        <Input
          label="전화번호"
          name="phoneNumber"
          value={input.phoneNumber}
          helperText={helperText.phoneNumber}
          onChange={onChangeInput}
        />
        <div className="flex full-width">
          <NavButton link="/login" text="뒤로가기" buttonType="outlined" style={{ marginRight: '10px' }} />
          <Button className="button" buttonType="filled" onClick={onClickSubmit} style={{ marginLeft: '10px' }}>
            가입
          </Button>
        </div>
      </Container>
    </LayoutContainer>
  );
}

export default RegisterDesktop;
