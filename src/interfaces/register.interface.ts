import React from 'react';

export interface registerInterface {
  input: {
    nickName: string;
    email: string;
    passWord: string;
    passWordCheck: string;
    phoneNumber: string;
  };
  helperText: {
    nickName: string;
    email: string;
    passWord: string;
    passWordCheck: string;
    phoneNumber: string;
  };
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickBackIcon?: () => void;
}
