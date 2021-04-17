import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo';
import GlobalStyle from './styles/global';
import { LocationProvider } from './context/locationContext';
import bg from '../public/assets/background.png';

import styled from 'styled-components';

const Content = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  border: 2px red;
`;

const Background = styled.div`
  background: url(${bg}) no-repeat center bottom;
  background-size: 102% 172px;
`;

function App() {
  return (
    <LocationProvider>
      <ApolloProvider client={apolloClient}>
        <Background>
          <Header />

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
