import React from 'react';
import { CardContainer } from './style';
const Card = ({ children, color }) => {
  return (
    <CardContainer data-testid="card" color={color}>
      {children}
    </CardContainer>
  );
};

export default Card;
