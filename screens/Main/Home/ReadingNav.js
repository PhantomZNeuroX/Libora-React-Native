import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ReadingDashboard from '../Reading/ReadingDashboard'
import MyBooks from '../Reading/MyBooks'
import { MainHeader } from '../../../components/misc/header'
import BookInfo from '../Reading/BookInfo'

const ReadingNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={ReadingDashboard} options={{headerShown: false}} />
      <Stack.Screen name="My Books" component={MyBooks} options={{header: () => <MainHeader type={'back'} title={<Text style={{fontSize: 20}} >My Books</Text> } />}} />
      <Stack.Screen name="BookInfo" component={BookInfo} options={{header: () => <MainHeader type={'back'} title={<Text style={{fontSize: 20}} >Book Info</Text> } />}} />
    </Stack.Navigator>

  )
}

export default ReadingNav