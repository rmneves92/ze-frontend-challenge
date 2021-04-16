import React, { useEffect, useState } from 'react';
import Card from '../card/index';
import Button from '../button/index';
import { List, Product, Image, Details, Title, Price } from './styles';

const ProductsList = ({ list }) => {
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <List>
      {list.map((product) => {
        return (
          <Card key={product.id}>
            <Product>
              <Image
                // src={product.images[0].url}
                alt={product.title}
              />

              <Details>
                <div>
                  <Title>{product.title}</Title>
                  <Price>
                    {formatCurrency(product.productVariants[0].price)}
                  </Price>
                </div>

                <div>
                  <a>Adicionar</a>
                  <a>Remover</a>
                </div>
              </Details>
            </Product>
          </Card>
        );
      })}
    </List>
  );
};

export default ProductsList;
