import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { clearTokens, hasValidTokens } from '../util/tokens';

import { Login } from '../components/Login';
import { Profile } from '../components/Profile';
import ScreenOne from './auth/sn1';

export const Private = (props) => {
  const [isLoggedIn, setLogin] = useState(false);
  useEffect(() => {
    hasValidTokens().then((ht) => setLogin(ht));
  }, []);

  const onPress = () => {
    props.navigation.navigate('Register - Role');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Profile />
          <Button
            title="Logout"
            onPress={() => {
              clearTokens();
              setLogin(false);
            }}
          />
        </>
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <ScreenOne 
            setLoggedIn={setLogin}
            onPress={onPress}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  centered: {
    display: 'flex',
    textAlign: 'center',
  },
});
