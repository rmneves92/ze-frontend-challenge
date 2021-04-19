import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderContainer, Logo, LogoContainer, NavContainer } from './style';
import logo from '../../../public/assets/small-logo.png';

const Header = (props) => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContainer>
          <Logo logo={logo} onClick={() => history.push('/')} />
        </LogoContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
