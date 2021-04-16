import styled from 'styled-components';

export const ProductWrapper = styled.div`
  height: 100%;
  padding-top: 80px;
`;

export const List = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-column-gap: 30px;
  grid-template-rows: 1fr;
  grid-template-areas:
    'figure title'
    'figure content';
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  border: 1px dashed red;
`;

export const Title = styled.span`
  margin-bottom: 8px;
  display: block;
  text-align: left;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 16px;
  max-height: 32px;
  font-size: 14px;
  font-weight: 400;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
