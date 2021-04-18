import React from 'react';
import { SpinnerContainer, SpinnerElement } from './styles';

const Spinner = (props) => {
  return (
    <SpinnerContainer data-testid="spinner">
      <SpinnerElement />
    </SpinnerContainer>
  );
};

export default Spinner;
