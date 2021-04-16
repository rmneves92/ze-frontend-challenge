import React, { useEffect, useContext, useState } from 'react';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import {
  ProductWrapper,
  List,
  ProductDetails,
  ProductImage,
  Product,
} from './style';
import ProductsList from '../../components/productsList/index';
import Categories from '../../components/categories/index';
import Card from '../../components/card';
import Button from '../../components/button';

import { LocationContext } from '../../context/locationContext';

import { LOAD_PRODUCTS, LOAD_CATEGORIES } from '../../graphql/queries';

const ProductsPage = (props) => {
  const { location } = useContext(LocationContext);

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

  const renderCategories = () => {
    return (
      <List>
        {categoriesList.map((category) => {
          return (
            <Button
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

  const renderProducts = () => {
    return (
      <List>
        {productsList.map((product) => {
          return (
            <Card>
              <Product>
                <ProductImage src={product.images[0].url} alt={product.title} />

                <ProductDetails>
                  <span>{product.title}</span>
                  <span>{product.productVariants[0].price}</span>
                </ProductDetails>
              </Product>
            </Card>
          );
        })}
      </List>
    );
  };

  return (
    <ProductWrapper>
      <h1>Produtos</h1>
      {loading && <span>Carregando produtos...</span>}

      {categoriesList && <Categories list={categoriesList} />}
      {productsList && <ProductsList list={productsList} />}
    </ProductWrapper>
  );
};

export default ProductsPage;
