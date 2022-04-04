import React from 'react';
import { atomsInterface } from 'interfaces';
import styled, { css } from 'styled-components';

const DividerStyle = styled.div`
  ${(props: atomsInterface.dividerInterface) => {
    const { height, color } = props;
    return css`
      border-bottom: ${height} solid ${color};
    `;
  }}
`;

function Divider(props: atomsInterface.dividerInterface) {
  const { color = 'rgba(128, 128, 128, 0.4)', height = '1px' } = props;
  return <DividerStyle className="flex" color={color} height={height} />;
}
export default Divider;
