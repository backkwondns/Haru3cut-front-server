import React from 'react';
import { commonInterface, organismsInterface } from 'interfaces';
import { Person48 } from 'icons';
import styled, { css } from 'styled-components';

const AvatarButton = styled.button`
  ${({ width, height }: { width: commonInterface.widthType; height: commonInterface.heightType }) => {
    return css`
      width: ${width};
      height: ${height};
      background-color: white;
      border: none;
      border-radius: 100%;
      margin: 0px;
      padding: 0px;
    `;
  }}
`;

const AvatarDefaultImage = styled(Person48)`
  ${({
    width,
    height,
    fill,
  }: {
    width: commonInterface.widthType;
    height: commonInterface.heightType;
    fill: string;
  }) => {
    return css`
      width: ${width};
      height: ${height};
      border-radius: 100%;
      border: 1px solid ${fill};
      fill: ${fill};
    `;
  }}
`;

const AvatarImage = styled.img`
  ${({ width, height }: { width: commonInterface.widthType; height: commonInterface.heightType }) => {
    return css`
      width: ${width};
      height: ${height};
      border-radius: 100%;
      border: 1px solid #80808060;
    `;
  }}
`;

function Avatar(props: organismsInterface.avatarInterface) {
  const { avatar, className, width = '48px', height = '48px', fill = 'gray', onClick } = props;
  return (
    <AvatarButton className={`${className}`} onClick={onClick} width={width} height={height}>
      {avatar ? (
        <AvatarImage src={avatar} alt="Avatar" width={width} height={height} />
      ) : (
        <AvatarDefaultImage width={width} height={height} fill={fill} />
      )}
    </AvatarButton>
  );
}
export default Avatar;
