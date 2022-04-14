import React, { CSSProperties } from 'react';

export interface navButtonInterface extends buttonInterface {
  link: string;
  text: string;
}

export interface inputInterface {
  className?: string;
  type?: 'text' | 'password';
  value?: string;
  width?: string;
  label?: string;
  name?: string;
  helperText?: string | false;
  color?: string;
  helperColor?: string;
  autoFocus?: boolean;
  noLabel?: true;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface buttonInterface {
  className?: string;
  width?: string;
  text?: string;
  id?: string;
  content?: JSX.Element;
  style?: CSSProperties;
  buttonType?: 'filled' | 'outlined' | 'none';
  color?: string;
  direction?: 'horizontal' | 'vertical';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface dividerInterface {
  color?: string;
  height?: string;
}

export interface chipInterface {
  color?: string;
  size?: string;
}
