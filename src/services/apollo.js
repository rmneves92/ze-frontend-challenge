import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import fetch from 'cross-fetch';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Erro no GraphQL: ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://api.code-challenge.ze.delivery/public/graphql',
    fetch,
  }),
]);
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
