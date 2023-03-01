// import { ApolloProvider } from '@apollo/client';
// import { Navigation } from './navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
// import { client } from './graphql/client';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
// import SecureStore for retrieving the token value
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import environment configuration
import getEnvVars from './config';
const { API_URI } = getEnvVars();

// configure our API URI & cache
const uri = API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

// return the headers to the context
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await AsyncStorage.getItem('token')) || ''
    }
  };
});

// configure Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

import Login from './screens/Login';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <Login />
        <StatusBar />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
