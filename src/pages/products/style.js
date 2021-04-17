import styled from 'styled-components';

export const ProductWrapper = styled.div`
  height: 100%;
  padding: 100px 80px;
`;

export const List = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
`;

export const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  height: 100px;
  width: 100px;
`;
