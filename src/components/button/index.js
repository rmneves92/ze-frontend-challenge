import React from 'react';
import { ButtonContainer } from './style';
const Button = ({ handleClick, children, color, width }) => {
  return (
    <ButtonContainer width={width} onClick={handleClick} color={color}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
