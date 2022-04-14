import { atomsInterface } from 'interfaces';
import styled, { css } from 'styled-components';

const Button = styled.button`
  ${(props: atomsInterface.buttonInterface) => {
    const { width, buttonType = 'outlined', direction = 'vertical', color = '#6667ab' } = props;
    return css`
      width: 100%;
      width: ${width};
      padding: 8px;
      border-radius: 5px;
      background-color: ${buttonType === 'outlined' ? 'rgba(255, 255, 255, 0)' : color};
      border: 1px solid ${buttonType === 'outlined' ? color : 'rgba(255, 255, 255, 0)'};
      color: ${buttonType === 'outlined' ? 'gray' : 'white'};
      color: ${buttonType === 'none' ? 'black' : ''};
      font-size: 14px;
      margin: 0px;
      transition: 0.1s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: ${direction === 'vertical' ? 'center' : 'flex-start'};
      flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
      & :active {
        background-color: ${buttonType === 'outlined' ? color : 'rgba(255, 255, 255, 10)'};
        color: ${buttonType === 'outlined' ? 'rgba(255, 255, 255, 50)' : 'gray'};
        color: ${buttonType === 'none' ? 'gray' : ''};
      }

      & :hover {
        box-shadow: ${buttonType === 'none' ? '' : '0 0 0.5rem rgba(0, 0, 0, 0.3)'};
      }
    `;
  }}
`;

export default Button;
