export type booleanType = boolean;
export type widthType = string;
export type heightType = string;

export type loginResponse = {
  nickName: string;
  nickNameTag: number;
  email: string;
  phoneNumber: string;
  setting: {
    language: string;
    mode: 'dark' | 'light' | 'system';
    avatar: string;
  };
  friendList: string[];
  savedPost: string[];
};

export interface axiosResponseInterface<responseType> {
  message: string;
  status: number;
  result: responseType;
}
