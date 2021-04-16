import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import HomePage from './pages/home/index';
import ProductsPage from './pages/products/index';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo';
import GlobalStyle from './styles/global';
import { LocationProvider } from './context/locationContext';

import styled from 'styled-components';

const Content = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding-top: 50px;
  border: 2px dashed black;
`;

const Background = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(45deg, #ffc500 20%, #00d7ff 100%);
`;

function App() {
  return (
    <LocationProvider>
      <ApolloProvider client={apolloClient}>
        <Background>
          <Navbar />

          <Content>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/produtos" component={ProductsPage} />
              </Switch>
            </BrowserRouter>
          </Content>

          <Footer />
          <GlobalStyle />
        </Background>
      </ApolloProvider>
    </LocationProvider>
  );
}

export default App;
