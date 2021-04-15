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
  min-height: 100vh;
  padding: 50px 0;
  background-image: linear-gradient(45deg, #ffc500 20%, #00d7ff 100%);
`;

function App() {
  return (
    <LocationProvider>
      <ApolloProvider client={apolloClient}>
        <div>
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
        </div>
      </ApolloProvider>
    </LocationProvider>
  );
}

export default App;
