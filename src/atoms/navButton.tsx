import React from 'react';
import { atomsInterface } from 'interfaces';
import { Button } from 'atoms';
import { useNavigate } from 'react-router-dom';

function NavButton(props: atomsInterface.navButtonInterface): JSX.Element {
  const { link, text, ...others } = props;
  const navigator = useNavigate();

  const onClick = () => {
    navigator(link);
  };
  return (
    <Button onClick={onClick} {...others}>
      {text}
    </Button>
  );
}

export default NavButton;
