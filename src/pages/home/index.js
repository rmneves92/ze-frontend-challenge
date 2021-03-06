import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { HomeWrapper, SearchContainer } from './style';
import LocationSearchInput from '../../components/locationSearchInput';
import Spinner from '../../components/spinner';
import Button from '../../components/button';
import Card from '../../components/card';
import { LOAD_POC } from '../../graphql/queries';

const initialCoordinates = {
  lat: null,
  lng: null,
};

const HomePage = (props) => {
  const history = useHistory();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    localStorage.setItem('pocId', '');
  }, []);

  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const [visibleButton, setVisibleButton] = useState(false);

  const setLocalStorage = async (id) => {
    await localStorage.setItem('pocId', id);
    history.push('/produtos');
  };

  const [getDistributor, { error, loading, data }] = useLazyQuery(LOAD_POC);
  if (!loading && data) {
    if (data.pocSearch.length > 0) {
      setLocalStorage(data.pocSearch[0].id);
    }
  }

  const handleSelect = (coordinates) => {
    setCoordinates(coordinates);
    setVisibleButton(true);
  };

  const handleFocus = () => {
    inputRef.current.focus();
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
              Ver produtos dispon??veis
            </Button>
          )}
        </SearchContainer>
      </Card>
    </HomeWrapper>
  );
};

export default HomePage;
