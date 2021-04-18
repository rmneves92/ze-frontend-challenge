import React from 'react';
import ProductsList from '../components/productsList';
import { getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const productsMock = [
  {
    id: '8868',
    title: 'Skol 269ml - Unidade',
    images: [
      {
        url:
          'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg',
      },
    ],
    productVariants: [
      {
        price: 2.09,
      },
    ],
  },
  {
    id: '8869',
    title: 'Skol 269ml - Pack com 15 Unidades',
    images: [
      {
        url:
          'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/products/8503.png',
      },
    ],
    productVariants: [
      {
        price: 31.35,
      },
    ],
  },
  {
    id: '8877',
    title: 'Brahma 269ml - Unidade',
    rgb: false,
    images: [
      {
        url:
          'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008877_02c7ebe9-c23a-405c-8af8-8f0988f276c7.jpg',
      },
    ],
    productVariants: [
      {
        price: 1.99,
      },
    ],
  },
];

describe('Products List', () => {
  it('should display empty message', () => {
    render(<ProductsList list={[]} />);
    expect(
      screen.getByText('Nenhum produto foi encontrado')
    ).toBeInTheDocument();
  });

  it('should render all products correctly', () => {
    render(<ProductsList list={productsMock} />);
    expect(screen.getAllByTestId('card').length).toBe(3);
  });
});
