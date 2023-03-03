import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CourseHome from './course/CourseHome';
import Quiz from './course/quiz';
import References from './course/references';
import ModulePage from './course/ModulePage';
import QuizHome from './course/QuizHome';
import QuizPage from './course/QuizPage';

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
        <Stack.Screen name="Module" component={ModulePage} />
        <Stack.Screen name="QuizHome" component={QuizHome} />
        <Stack.Screen name="QuizPage" component={QuizPage} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default CoursePage;