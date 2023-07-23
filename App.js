import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';

import LoadingLogo from './screens/Misc/LoadingSceen';
import { AuthStack, MainStack } from './screens/Navigators';
import { Check } from './functions/auth';
import { AuthProvider, AuthContext } from './components/misc/AuthContext';
import useFonts from './functions/useFonts';

const Stack = createStackNavigator();



function AppContainer() {

  //const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const LoadFonts = async () => {
    await useFonts();
  };

  useEffect(() => {

    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await useFonts();
        Check().then((res) => {
          console.log(res);
          setIsLoggedIn(res);
        });
          

      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
  }
  prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);
  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView} >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
              <Stack.Screen name="Main" component={MainStack} />
            ) : (
              <Stack.Screen name="Auth" component={AuthStack} />
            )}
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContainer />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
