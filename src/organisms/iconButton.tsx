import React from 'react';
import { Button } from 'atoms';
import { organismsInterface } from 'interfaces';

function IconButton(props: organismsInterface.iconButtonInterface) {
  const { icon, onClick, id, text, width, direction, buttonType = 'none', color = '#fff', ...buttonProps } = props;
  return (
    <Button
      {...buttonProps}
      buttonType={buttonType}
      id={id}
      color={color}
      onClick={onClick}
      direction={direction}
      width={width}
    >
      {icon}
      {text}
    </Button>
  );
}

export default IconButton;
