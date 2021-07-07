import React, { Component } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";

import Home from 'components/Home';

const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
  headers: {
    'X-CSRF-Token': csrfToken
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default class App extends Component {
  static propTypes = {
    // ...
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}
