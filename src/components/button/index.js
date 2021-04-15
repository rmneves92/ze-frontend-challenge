import React from 'react';
import { ButtonContainer } from './style';
const Button = ({ handleClick, children, color, disabled }) => {
  const handleColorType = (color) => {
    switch (color) {
      case 'primary':
        return 'blue';
      case 'secondary':
        return 'yellow';
      default:
        return 'grey';
    }
  };
  return (
    <ButtonContainer
      onClick={handleClick}
      color={color}
      handleColorType={handleColorType}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
