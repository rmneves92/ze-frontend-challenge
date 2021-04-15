import React from 'react';
import { ProductWrapper } from './style';
import ProductsList from '../../components/productsList/index';

const ProductsPage = (props) => {
  return (
    <ProductWrapper>
      <h1>Produtos</h1>
      <ProductsList></ProductsList>
    </ProductWrapper>
  );
};

export default ProductsPage;
