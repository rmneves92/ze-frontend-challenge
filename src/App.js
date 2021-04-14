import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/index';
import Footer from './components/footer/index';
import HomePage from './pages/home/index';
import ProductsPage from './pages/products/index';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './services/apollo';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <Header></Header>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/produtos" component={ProductsPage} />
          </Switch>
        </BrowserRouter>

        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
