import React from 'react';
import { ButtonContainer } from './style';
const Button = ({ handleClick, children, width }) => {
  return (
    <ButtonContainer width={width} onClick={handleClick} data-testid="button">
      {children}
    </ButtonContainer>
  );
};

export default Button;
