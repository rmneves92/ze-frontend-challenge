import React from 'react';
import * as R from 'ramda';
import Card from '../card';
import {
  List,
  Product,
  Image,
  Details,
  Title,
  Price,
  ActionsContainer,
  ActionButton,
} from './styles';

const ProductsList = ({ list }) => {
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <List>
      {R.isEmpty(list) && <span>Nenhum produto foi encontrado</span>}
      {list.map((product) => {
        return (
          <Card key={product.id} color="#fff">
            <Product>
              <Image src={product.images[0].url} alt={product.title} />

              <Details>
                <div>
                  <Title>{product.title}</Title>
                  <Price>
                    {formatCurrency(product.productVariants[0].price)}
                  </Price>
                </div>

                <ActionsContainer>
                  <ActionButton>Adicionar</ActionButton>
                  <ActionButton>Remover</ActionButton>
                </ActionsContainer>
              </Details>
            </Product>
          </Card>
        );
      })}
    </List>
  );
};

export default ProductsList;
