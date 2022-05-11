export interface loginInterface {
  input: {
    email: string;
    passWord: string;
  };
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onEnter: (event: React.KeyboardEvent) => void;
}
