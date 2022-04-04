import React from 'react';
import { Button, Input } from 'atoms/index';
import { registerInterface } from 'interfaces';
import { IconButton } from 'organisms/index';
import { ArrowBack24 } from 'icons';
import styled from 'styled-components';

const Header = styled.div`
   {
    height: 44px;
    border-bottom: 1px solid #60606040;
  }
`;
const Title = styled.span`
  font-size: 36px;
  text-align: center;
`;

const Container = styled.div`
  height: calc(100% - 45px);
  padding: 0px 16px 0px 16px;
`;

const ButtonCopy = styled(Button)`
  .button {
    margin-left: 20px;
  }
`;

function RegisterMobile(props: registerInterface.registerInterface): JSX.Element {
  const { input, helperText, onChangeInput, onClickSubmit, onClickBackIcon } = props;
  return (
    <>
      <Header className="flex-column center full-width">
        <IconButton
          icon={<ArrowBack24 />}
          onClick={onClickBackIcon}
          style={{ position: 'absolute', top: 0, left: 0, width: '40px' }}
        />
        <Title>회원가입</Title>
      </Header>

      <Container className="flex-column center">
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
        <ButtonCopy className="full-width" buttonType="filled" onClick={onClickSubmit}>
          가입
        </ButtonCopy>
      </Container>
    </>
  );
}

export default RegisterMobile;
