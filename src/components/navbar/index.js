import React, { useContext } from 'react';
import { Nav, Logo, LogoContainer, Address } from './style';
import logo from '../../../public/assets/small-logo.png';
import { LocationContext } from '../../context/locationContext';
import { Edit } from 'react-feather';
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const { location } = useContext(LocationContext);
  const history = useHistory();

  const redirectHome = () => {
    history.push('/');
  };

  return (
    <div>
      <Nav>
        <LogoContainer>
          <Logo logo={logo} />
        </LogoContainer>
        {/* <Address>
          {location.address}
          {location.address && <Edit onClick={() => redirectHome()} />}
        </Address> */}
      </Nav>
    </div>
  );
};

export default Navbar;
