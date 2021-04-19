import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { CategoryList } from './styles';

const Categories = ({ list, handleClick }) => {
  return (
    <CategoryList data-testid="category-list">
      {list &&
        list.map((category) => {
          return (
            <Button
              width="170px"
              key={category.id}
              handleClick={() => {
                handleClick(category.id);
              }}
            >
              {category.title}
            </Button>
          );
        })}
    </CategoryList>
  );
};

Categories.propTypes = {
  list: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
