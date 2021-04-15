import styled from 'styled-components';

export const Nav = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  min-height: 100px;

  background-color: #fff !important;

  opacity: 0.7;
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

export const Address = styled.div`
  font-size: 18px;
`;
