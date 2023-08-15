import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './Auth/Welcome';
import LoginScreen from './Auth/login';
import RegisterScreen from './Auth/register';
import DrawerNav from './Main/DrawerNav';
import { createStackNavigator } from '@react-navigation/stack';
import BookView from './Main/Reading/BookView';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export const MainStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="DrawerNav" component={DrawerNav} />

        <Stack.Screen name="BookView" component={BookView} />
      </Stack.Navigator>
    )
  }