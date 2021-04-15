import React from 'react';
import { Nav, Logo, LogoContainer } from './style';
import logo from '../../../public/assets/small-logo.png';

const Navbar = (props) => {
  return (
    <div>
      <Nav>
        {' '}
        <LogoContainer>
          <Logo logo={logo} />
        </LogoContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
