import { organismsInterface } from 'interfaces';
import React from 'react';
import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

function CheckItem(props: organismsInterface.checkItemInterface) {
  const { value, checked, toggleItem } = props;
  return (
    <CheckBoxContainer id={value} className="selected" key={value} onClick={toggleItem}>
      <input
        id={value}
        type="checkbox"
        value={value}
        checked={checked}
        readOnly
        style={{ width: '20px', height: '30px' }}
      />
      <span>{`${value}`}</span>
    </CheckBoxContainer>
  );
}

export default CheckItem;
