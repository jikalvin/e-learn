import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import ScreenTwo from '../screens/auth/sn2';
import ScreenThree from '../screens/auth/sn3';
import ScreenFour from '../screens/auth/sn4';
import CourseHome from './course/CourseHome';
import Quiz from './course/quiz';
import References from './course/references';

const Stack = createStackNavigator()

const CoursePage = () => {
    return(
        <NavigationContainer
        independent={true}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="CourseHome"
      >
        <Stack.Screen name="CourseHome" component={CourseHome} />
        <Stack.Screen name="Quizzes" component={Quiz} />
        <Stack.Screen name="References" component={References} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default CoursePage;