import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({ uri: process.env.BACKEND_URI });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ messages, locations, path }) => {
      console.log(`[GraphQL Error]: Message: ${messages}, Location: ${locations}, Path: ${path}`);
    })
  }

  if (networkError) {
    console.log(`[Network Error]: ${networkError}`);
  }
})

const authLink = setContext(async (request, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    }
  }
})

const link = authLink.concat(httpLink as any);

const client = new ApolloClient({
  link: from([errorLink, link as any]),
  cache: new InMemoryCache(),
})

export default client;
