import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ color }) => color};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
  border-radius: 8px;
  padding: 30px;
  flex: 0 0 auto;
`;
