import React from 'react';
import Button from '../button';
import { CategoryList } from './styles';
const Categories = ({ list, handleSelect }) => {
  return (
    <CategoryList>
      {list.map((category) => {
        return (
          <Button
            width="170px"
            key={category.id}
            color="primary"
            handleClick={() => {
              handleSelect(category.id);
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
