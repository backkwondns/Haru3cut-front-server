import { atomsInterface } from 'interfaces';
import styled, { css } from 'styled-components';

const Chip = styled.span`
  ${(props: atomsInterface.chipInterface) => {
    const { color = '#6667ab', size = 'large' } = props;
    return css`
      font-size: ${size};
      color: ${color};
      border: 1px solid ${color};
      border-radius: 10px;
      margin: 2px;
      padding: 3px;
    `;
  }};
`;

export default Chip;
