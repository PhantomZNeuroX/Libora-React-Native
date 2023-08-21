import { View, Text, Platform } from 'react-native'
import React from 'react'
import Background from '../../components/background'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ReadingNav from './Home/ReadingNav'
import Writing from './Home/Writing'
import Speaking from './Home/Speaking'
import { ReadingIcon, WritingIcon, SpeakingIcon } from '../../components/assets/icons'
import { MainHeader } from '../../components/misc/header'
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Background>
      
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E2AD5D',
        tabBarStyle: {
          backgroundColor: '#FDFFF7',
          paddingBottom: Platform.OS === 'ios' ? 0 : 10,
          height: Platform.OS === 'ios' ? 50 : 60,
        }
      }
      }>
        <Tab.Screen name="Reading" component={ReadingNav} options={{tabBarIcon: ({size ,color}) => <ReadingIcon width='29' height='29' style={{marginVertical: 5}} fill={color} /> }} />
        <Tab.Screen name="Speaking" component={Speaking} options={{tabBarIcon: ({size ,color}) => <SpeakingIcon width='29' height='29' style={{marginVertical: 5}} fill={color} />}} />
        <Tab.Screen name="Writing" component={Writing} options={{tabBarIcon: ({size ,color}) => <WritingIcon width='29' height='29' style={{marginVertical: 5}} fill={color} />}} />
      </Tab.Navigator>
      
    </Background>
  )
}

export default TabNav