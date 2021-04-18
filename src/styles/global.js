import styled, { createGlobalStyle } from 'styled-components';
import background from '../../public/assets/background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  border: 2px red;
`;

export const Background = styled.div`
  background: url(${background}) no-repeat center bottom;
  background-size: 102% 172px;
`;
