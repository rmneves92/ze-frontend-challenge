import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import apolloClient from './services/apollo';
import { ApolloProvider } from '@apollo/client';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import GlobalStyle from './styles/global';
import { Content, Background } from './styles/global';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Background>
          <Header />
          <Content>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/produtos" component={ProductsPage} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Content>
          <Footer />
          <GlobalStyle />
        </Background>
      </BrowserRouter>
    </ApolloProvider>
  );
}
export default App;
