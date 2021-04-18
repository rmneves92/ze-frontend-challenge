import React from 'react';
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

export default Categories;
