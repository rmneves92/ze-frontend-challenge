import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px 24px;
  border: 2px solid #ffcd00;
  background-color: #fff;
  color: #333333;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  min-width: ${({ width }) => width};
  box-sizing: border-box;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 4px;
  flex: 1 1 0%;
  align-items: center;

  &:hover {
    background-color: #ffcd00;
  }
`;
