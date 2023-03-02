import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from '../navigation/tabs';
import ScreenTwo from './auth/sn2';
import ScreenThree from './auth/sn3';
import CoursePage from '../components/CoursePage';
// import Tabs from './navigation/tabs';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer
        independent={true}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Course" component={CoursePage} />
        <Stack.Screen name="Restaurant" component={ScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;