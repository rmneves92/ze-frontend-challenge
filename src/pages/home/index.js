import React from 'react';
import { HomeWrapper } from './style';
import LocationSearchInput from '../../components/locationSearchInput/index';

const HomePage = (props) => {
  return (
    <HomeWrapper>
      <h1>Home</h1>
      <LocationSearchInput></LocationSearchInput>
    </HomeWrapper>
  );
};

export default HomePage;
