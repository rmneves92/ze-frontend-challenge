import styled from 'styled-components';

export const Nav = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  min-height: 6vh;

  background-color: transparent !important;

  border: 2px dashed darkblue;
`;

export const LogoContainer = styled.figure`
  width: 50px;
  height: 50px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ logo }) => `url(${logo}) center no-repeat `};
  background-size: contain;
  background-size: 30px;
`;
