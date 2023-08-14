import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MainHeader = ({ navigation, title }) => {
  
  const insets = useSafeAreaInsets();


  const handleBackPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={[styles.container, {marginTop: Platform.OS === 'ios' ? 0 : insets.top-4 }]}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="menu-outline" style={{fontSize: 30, color: 'black', marginLeft: -8}} />
      </TouchableOpacity>
      
        {title}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#FDFFF7',
    marginTop: Platform.OS === 'ios' ? -8: 0 
  },
  backButton: {
    position: 'absolute',
    left: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});


