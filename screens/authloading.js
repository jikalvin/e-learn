import React, { useEffect } from 'react';
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loading from '../components/Loading';

const AuthLoading = props => {
  const checkLoginState = async () => {
    // retrieve the value of the token
    // const userToken = await SecureStore.getItemAsync('token');
    const userToken = await AsyncStorage.getItem('token');
    // navigate to the app screen if a token is present
    // else navigate to the auth screen
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // call checkLoginState as soon as the component mounts
  useEffect(() => {
    checkLoginState();
  });

  return <Loading />;
};

export default AuthLoading;
