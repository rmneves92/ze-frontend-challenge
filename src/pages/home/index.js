import React, { useContext, useEffect, useState } from 'react';
import { HomeWrapper } from './style';
import LocationSearchInput from '../../components/locationSearchInput/index';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/index';
import Card from '../../components/card/index';
import { LocationContext } from '../../context/locationContext';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { LOAD_POC } from '../../graphql/queries';

const initialCoordinates = {
  lat: null,
  lng: null,
};

const HomePage = (props) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates);

  useEffect(() => {
    localStorage.setItem('pocId', '');
  }, []);

  const [getDistributor, { error, loading, data }] = useLazyQuery(LOAD_POC);
  if (!loading && data) {
    localStorage.setItem('pocId', data.pocSearch[0].id);
  }

  const handleSelect = (data) => {
    setCoordinates(data);
  };

  return (
    <HomeWrapper>
      <Card>
        <LocationSearchInput handleSelect={handleSelect}></LocationSearchInput>
        <Button
          // disabled={!location.coordinates.lat && !location.coordinates.lng}
          disabled={false}
          color="primary"
          handleClick={() =>
            getDistributor({
              variables: {
                algorithm: 'NEAREST',
                lat: coordinates.lat,
                long: coordinates.lng,
                now: new Date().toISOString(),
              },
            })
          }
        >
          {loading ? <span>Carregando...</span> : <span>Ir</span>}
        </Button>
      </Card>
    </HomeWrapper>
  );
};

export default HomePage;
