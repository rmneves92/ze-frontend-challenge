import React, { useEffect, useState, useRef } from 'react';
import { HomeWrapper, SearchContainer } from './style';
import LocationSearchInput from '../../components/locationSearchInput';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button';
import Card from '../../components/card';
import { LocationContext } from '../../context/locationContext';
import { useLazyQuery } from '@apollo/client';
import { LOAD_POC } from '../../graphql/queries';
import Spinner from '../../components/spinner';
const initialCoordinates = {
  lat: null,
  lng: null,
};

const HomePage = (props) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const [visibleButton, setVisibleButton] = useState(false);

  // const { setLocation } = useContext(LocationContext);

  const history = useHistory();

  const inputRef = useRef();

  useEffect(() => {
    // localStorage.setItem('pocId', '');
  }, []);

  const [getDistributor, { error, loading, data }] = useLazyQuery(LOAD_POC);
  if (!loading && data) {
    console.log(data);

    if (data.pocSearch.length > 0) {
      localStorage.setItem('pocId', data.pocSearch[0].id);
    }
  }

  const handleSelect = (coordinates) => {
    setCoordinates(coordinates);
    setVisibleButton(true);
  };

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.disabled = false;
    setVisibleButton(false);
  };

  return (
    <HomeWrapper>
      <Card color="rgb(247,247,247)">
        <SearchContainer>
          <LocationSearchInput
            handleSelect={handleSelect}
            handleFocus={handleFocus}
            ref={inputRef}
          ></LocationSearchInput>

          {loading && <Spinner />}
          {!loading && visibleButton && (
            <Button
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
              Ver produtos disponíveis
            </Button>
          )}
        </SearchContainer>
      </Card>
    </HomeWrapper>
  );
};

export default HomePage;
