import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/react-testing';
import ProductsPage from '../pages/products';
import { CategoryMock, ProductMock } from '../__mocks__/mocks';

describe('Products Page', () => {
  it('should render categories without errors', async () => {
    const { getAllByTestId, debug } = render(
      <MockedProvider mocks={CategoryMock} addTypename={false}>
        <ProductsPage />
      </MockedProvider>
    );

    const categoriesLength = CategoryMock[0].result.data.allCategory.length;
    await new Promise((resolve) => setTimeout(resolve, 0));
    const buttonElement = getAllByTestId('button');
    await waitFor(() => expect(buttonElement.length).toBe(categoriesLength));
  });
  it('should render products without errors', async () => {
    const productsLength = ProductMock[0].result.data.poc.products.length;

    const { getAllByTestId } = render(
      <MockedProvider mocks={ProductMock} addTypename={false}>
        <ProductsPage />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    const cardElement = getAllByTestId('card');
    await waitFor(() => expect(cardElement.length).toBe(productsLength));
  });
});
