import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="SigIn" component={SignIn} />
        <AppStack.Screen name="SigUp" component={SignUp} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

