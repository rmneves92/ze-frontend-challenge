import React, { useContext, useEffect } from 'react';
import { HomeWrapper } from './style';
import LocationSearchInput from '../../components/locationSearchInput/index';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/index';
import Card from '../../components/card/index';
import { LocationContext } from '../../context/locationContext';

const HomePage = (props) => {
  const history = useHistory();
  const { location, setLocation } = useContext(LocationContext);

  useEffect(() => {
    setLocation({
      ...location,
      coordinates: { lat: null, lng: null },
      address: '',
    });
  }, []);

  const redirectProductsPage = () => {
    history.push('/produtos');
  };

  return (
    <HomeWrapper>
      <Card>
        <LocationSearchInput></LocationSearchInput>
        <Button
          disabled={!location.coordinates.lat && !location.coordinates.lng}
          color="primary"
          handleClick={() => redirectProductsPage()}
        >
          Ir
        </Button>
      </Card>
    </HomeWrapper>
  );
};

export default HomePage;
