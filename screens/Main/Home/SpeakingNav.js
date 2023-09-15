import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../../components/background'
import { createStackNavigator } from '@react-navigation/stack'
import SpeakingDashboard from '../Speaking/SpeakingDashboard'



const SpeakingNav = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={SpeakingDashboard} options={{headerShown: false}} />
      
    </Stack.Navigator>
  )
}

export default SpeakingNav

const styles = StyleSheet.create({})