import React from 'react';
import { HomeWrapper } from './style';
import LocationSearchInput from '../../components/locationSearchInput/index';
import { useHistory } from 'react-router-dom';

const HomePage = (props) => {
  let history = useHistory();

  return (
    <HomeWrapper>
      <h1>Home</h1>
      <LocationSearchInput></LocationSearchInput>

      <button
        onClick={() => {
          history.push('/produtos');
        }}
      >
        Ver produtos
      </button>
    </HomeWrapper>
  );
};

export default HomePage;
