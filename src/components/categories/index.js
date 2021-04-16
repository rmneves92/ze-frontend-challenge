import React from 'react';
import Button from '../button/index';
import { List, Product, Image, Details, Title, Price } from './styles';
const Categories = ({ list }) => {
  return (
    <List>
      {list.map((category) => {
        return (
          <Button
            key={category.id}
            color="primary"
            handleClick={() => {
              setSelectedCategory(category.id);
              getProducts();
            }}
          >
            {category.title}
          </Button>
        );
      })}
    </List>
  );
};

export default Categories;
