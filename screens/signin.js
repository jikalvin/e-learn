import React from 'react';
import { View, Button, Text } from 'react-native';
// import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreenOne from './auth/sn1';
import Loading from '../components/Loading';
import Home from './home'

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = props => {
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: data => {
      // store the token with a key value of `token`
      // after the token is stored navigate to the app's main screen
      AsyncStorage.setItem('token', data.signIn).then(
        props.navigation.navigate('Home')
      );
    }
  });

  const onPress = () => {
    props.navigation.navigate('Register - Role');
  };

  // if loading, return a loading indicator
  if (loading) return <Loading />;
  return (
    <React.Fragment>
      {error && <Text>Error signing in!</Text>}
      {error && console.log(error.message)}
      <ScreenOne
        action={signIn}
        formType="signIn"
        navigation={props.navigation}
        onPress={onPress}
        mutation={SIGNIN_USER}
      />
    </React.Fragment>
  );
};

export default SignIn;
