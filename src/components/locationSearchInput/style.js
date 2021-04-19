import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 3px;
  padding: 15px;
  font-size: 16px;
  width: 100%;
  border: none;

  &:disabled {
    background-color: #fff;
  }
`;

export const Field = styled.div`
  background-color: #fff;
  margin-top: 3px;
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
`;
