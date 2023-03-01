import { NavigationContainer } from '@react-navigation/native';
// import { Private } from './Private';
// import { Public } from './Public';
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const BottomTab = createStackNavigator();

import ScreenFour from './auth/sn4';
import ScreenOne from './auth/sn1';
import ScreenThree from './auth/sn3';
import ScreenTwo from './auth/sn2';
import Home from './home';
import SignIn from './signin';
// import { Private } from './Private';

const Login = () => (
  <NavigationContainer>
    <BottomTab.Navigator
      initialRouteName="public"
      screenOptions={{ 
        headerShown: false,
        headerStyle: { 
          backgroundColor: '#2196F3',
        },
        tintColor: '#FFFFFF'
      }}
    >
      <BottomTab.Screen
        name="Login"
        component={SignIn}
      />
      <BottomTab.Screen
        name="Register - Role"
        component={ScreenTwo}
      />
      <BottomTab.Screen
        name="Register - Details"
        component={ScreenThree}
      />
      <BottomTab.Screen
        name="Credentials"
        component={ScreenFour}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
      />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default Login;