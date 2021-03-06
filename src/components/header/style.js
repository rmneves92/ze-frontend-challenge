import styled from 'styled-components';
import logo from '../../../public/assets/small-logo.png';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  min-height: 100px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
`;

export const NavContainer = styled.header`
  max-width: 1600px;
  width: 100%;
  padding: 0px 80px;

  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.figure`
  width: 50px;
  height: 50px;
`;

export const Logo = styled.img`
  background-image: url(${logo});
  background-size: contain;
  box-shadow: none;
  box-sizing: content-box;
  padding: 24px;
  cursor: pointer;
`;
