import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer } from './style';

const Card = ({ children, color }) => {
  return (
    <CardContainer data-testid="card" color={color}>
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Card;
