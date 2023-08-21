import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React,{useContext} from 'react'
import Background from '../../components/background'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import TabNav from './TabNav';
import Liboralogo from '../../components/assets/Liboralogo';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import SettNav from './Settings/settings';
import ContactScreen from '../Misc/ContactScreen';
import { Logout } from '../../functions/auth';
import { AuthContext } from '../../components/misc/AuthContext';
import { MainHeader } from '../../components/misc/header';
import ClassScreen from '../Misc/ClassScreen';
Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  function handleLogout() {

    console.log('logout');
    Logout();
   setIsLoggedIn(false);

  }
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flexDirection: 'column',justifyContent: 'space-between', height: '97%', backgroundColor: '#FDFFF7'}}>
      <TouchableOpacity style={styles.navProfile} onPress={() => {console.log('profile'); Logout();}}>
        <View style={styles.profileWrap}>
        <Image style={styles.navProfilePic} source={require('../../assets/user.png')} />
        <View style={{marginLeft: 8}}>
        <Text style={{fontFamily: 'MontserratMD', fontSize: 18}}>Aadil Sengupta</Text>
        <Text style={{fontFamily: 'MontserratMD'}}>Class: 11</Text>
        </View>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <DrawerItemList {...props} />
        
      </View>
      <DrawerItem style={{marginBottom: 20}} labelStyle={{marginLeft: -20, fontSize: 20, }} label="Logout" icon={({focused,size}) => <Ionicons name="exit-outline" size={size} />} onPress={handleLogout} />
      <View style={{width: '100%', height: 35, justifyContent: 'center', alignItems: 'center'}}>
        <Liboralogo width='73%' height={35}/>
      </View>
    </DrawerContentScrollView>
  )
  }


const DrawerNav = () => {
  nav = useNavigation();
  return (

    <Background>
      <Drawer.Navigator
        screenOptions={{ 
          drawerActiveBackgroundColor: '#FFE0B2',
          drawerLabelStyle: {
              marginLeft: -18,
              fontSize: 18,
          },
          drawerActiveTintColor: '#D6A04D',
          headerStyle: {
            backgroundColor: '#FFFEF7',
            
          },
          
          headerTitleAlign: 'center',
          
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={TabNav} options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="home" size={size} color={focused ? '#D6A04D' : '#656566'} />
          ),

        }} />
      <Drawer.Screen name="Class" component={ClassScreen} options={{
          headerTitle: 'Contact Us',
          header: (props) => <MainHeader {...props} title={<Text style={{fontSize: 20}} >My Class</Text> } />,
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="group" size={size} color={focused ? '#D6A04D' : '#656566'} />
          ),
        }} />
      <Drawer.Screen name="Leaderboard" component={ClassScreen} options={{
          headerTitle: 'Contact Us',
          header: (props) => <MainHeader {...props} title={<Text style={{fontSize: 20}} >Leaderboard</Text> } />,
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={focused ? '#D6A04D' : '#656566'} />
          ),
        }} />
        <Drawer.Screen name="Settings" component={SettNav} options={{
          headerTitle: 'Settings',
          header: (props) => <MainHeader {...props} title={<Text style={{fontSize: 20}} >Settings</Text> } />,
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="settings" size={size} color={focused ? '#D6A04D' : '#656566'} />
          ),
        }} />
        <Drawer.Screen name="Contact" component={ContactScreen} options={{
          headerTitle: 'Contact Us',
          header: (props) => <MainHeader {...props} title={<Text style={{fontSize: 20}} >Contact Us</Text> } />,
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="call" size={size} color={focused ? '#D6A04D' : '#656566'} />
          ),
        }} />

      </Drawer.Navigator>
    </Background>
  )
}

export default DrawerNav

const styles = StyleSheet.create({
  navProfile: {
    height: 100,
    width: '100%',
    marginBottom: 30,
    justifyContent: 'center'
  },
  navProfilePic:{
    width: 60,
    height: null,
    aspectRatio: 1,

  },
  profileWrap: {
    marginLeft: -8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})