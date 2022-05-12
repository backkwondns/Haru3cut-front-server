/* eslint-disable */
import React from 'react';
import { atomsInterface } from 'interfaces';
import styled, { css } from 'styled-components';

const Form = styled.div`
  ${(props: atomsInterface.inputInterface) => {
    const { width } = props;
    return css`
      width: ${width};
      position: relative;
      height: 70px;
      overflow: hidden;
    `;
  }}
`;

const InputContainer = styled.div`
  ${(props: atomsInterface.inputInterface) => {
    const { width } = props;
    return css`
    width: ${width};
  }
`;
  }}
`;

const Label = styled.label`
  ${(props: atomsInterface.inputInterface) => {
    const { color } = props;
    return css`
      position: absolute;
      bottom: 1px;
      left: 0px;
      pointer-events: none;
      border-bottom: 1px solid #b5b3b3;
      &::after {
        border-bottom: 3px solid ${color};
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
        transition: transform 0.1s ease;
      }
    `;
  }}
`;
const ContentName = styled.span`
  ${(props: atomsInterface.inputInterface) => {
    const { color } = props;
    return css`
      color: ${color};
    `;
  }}
  position: absolute;
  bottom: 5px;
  left: 0;
  transition: all 0.3s ease;
`;

const HelperText = styled.span`
  height: 18px;
  width: 100%;
  font-size: small;
  color: #d32f2f;
`;

const InputStyle = styled.input`
  ${(props: atomsInterface.inputInterface) => {
    const { color } = props;
    return css`
      color: ${color};
      border: none;
      padding-top: 20px;
      display: inline;
      font-size: 16px;
      outline: none;

      &:focus + ${Label} ${ContentName}, &:valid + ${Label} ${ContentName} {
        color: ${color};
        transform: translateY(-150%);
        font-size: 14px;
      }
      &:focus + ${Label}:after, &:valid + ${Label}:after {
        transform: translateX(0%);
      }
    `;
  }}
`;

function Input(props: atomsInterface.inputInterface): JSX.Element {
  const {
    className,
    type = 'text',
    width = '100%',
    name = '',
    label,
    value,
    helperText,
    color = '#6667ab',
    helperColor = '#d32f2f',
    autoFocus = false,
    noLabel = false,
    onChange,
    onPressEnter,
  } = props;

  const currentColor = ((helperText === '_' || helperText === '' || helperText === undefined) && color) || helperColor;
  return (
    <>
      <InputContainer className={'flex-column'} width={width}>
        <Form width={width}>
          <InputStyle
            autoFocus={autoFocus}
            className={`${className} full-width full-height `}
            type={type}
            name={name}
            value={value}
            autoComplete="off"
            color={currentColor}
            required
            onChange={onChange}
            onKeyPress={onPressEnter}
          />
          {noLabel ? null : (
            <Label className="full-width full-height" htmlFor={name} color={currentColor}>
              <ContentName color={currentColor}>{label}</ContentName>
            </Label>
          )}
        </Form>
        {helperText === false ? null : (
          <HelperText className={'full-width'} color={currentColor}>
            {helperText === '_' ? '' : helperText}
          </HelperText>
        )}
      </InputContainer>
    </>
  );
}

export default Input;
