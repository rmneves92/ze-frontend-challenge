import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import {
  LOAD_POC,
  LOAD_PRODUCTS,
  LOAD_CATEGORIES,
} from '../../graphql/queries';

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const { error, loading, data } = useQuery(LOAD_POC, {
    variables: {
      algorithm: 'NEAREST',
      lat: '-23.632919',
      long: '-46.699453',
      now: '2017-08-01T20:00:00.000Z',
    },
  }); // passando os parametros  em variables

  // executa apos data ser alterado
  useEffect(() => {
    console.log('data: ', data, error, loading);
  }, [data]);

  return (
    <div>
      <p>Lista de produtos</p>
    </div>
  );
};

export default ProductsList;
