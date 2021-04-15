import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: inline-block;
  margin: 0;
  padding: 10px 16px;
  border: 0;
  border-radius: 6px;
  background-color: ${({ color, handleColorType }) => handleColorType(color)};
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    opacity: 0.5;
  }
`;
