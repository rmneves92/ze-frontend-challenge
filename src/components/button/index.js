import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './style';

const Button = ({ handleClick, children, width }) => {
  return (
    <ButtonContainer width={width} onClick={handleClick} data-testid="button">
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default Button;
