import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Erro no GraphQL: ${message}`);
    });
  }
});
const link = from([
  errorLink, // catch errors
  new HttpLink({
    uri: 'https://api.code-challenge.ze.delivery/public/graphql',
  }),
]);
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
