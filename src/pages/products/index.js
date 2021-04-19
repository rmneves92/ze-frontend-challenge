import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { ProductWrapper } from './style';
import ProductsList from '../../components/productsList';
import Categories from '../../components/categories';
import Spinner from '../../components/spinner';
import { LOAD_PRODUCTS, LOAD_CATEGORIES } from '../../graphql/queries';

const ProductsPage = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [getProducts, { loading, data }] = useLazyQuery(LOAD_PRODUCTS, {
    variables: {
      id: localStorage.getItem('pocId'),
      search: '',
      categoryId: selectedCategory,
    },
  });

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (data) {
      setProductsList(data.poc.products);
    }
  }, [data]);

  const categoriesQuery = useQuery(LOAD_CATEGORIES, {
    variables: {
      id: localStorage.getItem('pocId'),
      search: '',
      categoryId: null,
    },
  });

  useEffect(() => {
    if (categoriesQuery.data) {
      setCategoriesList(categoriesQuery.data.allCategory);
    }
  }, [categoriesQuery.data]);

  return (
    <ProductWrapper>
      {!categoriesList.loading && (
        <Categories
          handleClick={(id) => setSelectedCategory(id)}
          list={categoriesList}
        />
      )}

      {!loading && productsList && <ProductsList list={productsList} />}

      {(loading || categoriesList.loading) && <Spinner />}
    </ProductWrapper>
  );
};

export default ProductsPage;
