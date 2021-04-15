import React from 'react';
import { HomeWrapper } from './style';
import LocationSearchInput from '../../components/locationSearchInput/index';
import { useHistory } from 'react-router-dom';
import Button from '../../components/button/index';

import styled from 'styled-components';

const HomePage = (props) => {
  let history = useHistory();

  const Box = styled.div`
    border-radius: 20px;
    background-color: #fff;
    width: 50%;
    height: 400px;

    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  `;

  return (
    <HomeWrapper>
      <h1>Home</h1>

      <Box>
        <LocationSearchInput></LocationSearchInput>
        <Button
          handleClick={() => {
            history.push('/produtos');
          }}
        >
          Acançar!
        </Button>
      </Box>
    </HomeWrapper>
  );
};

export default HomePage;
