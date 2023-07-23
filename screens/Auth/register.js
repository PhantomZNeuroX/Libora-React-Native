import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native'
import React,{useState,useEffect} from 'react'
import Background from '../../components/background'
import { Input, Button } from '@rneui/themed'
import Liboralogo from '../../components/assets/Liboralogo'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  nav = useNavigation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardOpen(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardOpen(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Background>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Liboralogo width='60%' height='80' style={{marginBottom: 69}} />
        <View style={{width: '92%', marginBottom: 50}}>
            <Input
              placeholder="Email"
              leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#E2AD5D' }}
              style={styles.input}
              onChangeText={() => {}}
              inputContainerStyle={{borderColor: 'transparent',backgroundColor: '#fff', borderRadius: 7, borderWidth: 1, borderColor: '#E2AD5D', paddingLeft: 15 }}
              containerStyle={{}}
            />
          <Input
            secureTextEntry={true}
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: '#E2AD5D' }}
            style={styles.input}
            onChangeText={() => {}}
            inputContainerStyle={{borderColor: 'transparent',backgroundColor: '#fff', borderRadius: 7, borderWidth: 1, borderColor: '#E2AD5D', paddingLeft: 15 }}
            containerStyle={{}}
          />
        </View>

        <Button type='outline' title="Next" titleStyle={{color: '#fff', fontSize: 22, textAlign: 'center', width: '100%'}} buttonStyle={{ backgroundColor: '#E2AD5D', borderRadius: 7, borderColor: 'transparent', width: '45%'}} />
      </View>
      <TouchableOpacity style={{position: 'absolute', bottom: 42.5, width: '100%', opacity: 1 }} onPress={()=> nav.navigate('Login')}>
        {keyboardOpen ? null :
        <Text style={{color: '#E2AD5D', width: '100%', textAlign: 'center', fontSize: 17}}>
        Already have an account?{"\n"} Click here to <Text style={{fontWeight: 'bold', color: '#d19e52', fontSize: 17}}>Login</Text>!
        </Text>
        }
      </TouchableOpacity>
    </Background>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({

  input: {
    marginLeft: 8,
    borderBottomColor: '#E2AD5D',
    
  }
})