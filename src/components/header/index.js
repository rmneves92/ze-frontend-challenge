import React, { useContext } from 'react';
import { HeaderContainer, Logo, LogoContainer, NavContainer } from './style';
import logo from '../../../public/assets/small-logo.png';
import { LocationContext } from '../../context/locationContext';

const Header = (props) => {
  const { location } = useContext(LocationContext);
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Logo logo={logo} />
        </LogoContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
