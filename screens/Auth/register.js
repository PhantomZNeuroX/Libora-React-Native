import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native'
import React,{useState,useEffect, useRef} from 'react'
import Background from '../../components/background'
import { Input, Button } from '@rneui/themed'
import Liboralogo from '../../components/assets/Liboralogo'
import { useNavigation } from '@react-navigation/native'
import DatePicker from 'react-native-date-picker'


const RegisterScreen = () => {
  nav = useNavigation();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const pageRef1 = useRef();
  const pageRef2 = useRef();
  
  const handleNext = () => {
    pageRef1.current.setNativeProps({display: 'none'});
    pageRef2.current.setNativeProps({display: 'flex'});
  }
  const handleBack = () => {
    pageRef1.current.setNativeProps({display: 'flex'});
    pageRef2.current.setNativeProps({display: 'none'});
  }

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
        <View ref={pageRef1} style={{width: '100%', alignItems: 'center'}} >
        <View style={{width: '92%', marginBottom: 50 }}>
            <Input
              placeholder="Full Name"
              leftIcon={{ type: 'font-awesome', name: 'user', color: '#E2AD5D' }}
              style={styles.input}
              onChangeText={() => {}}
              inputContainerStyle={{borderColor: 'transparent',backgroundColor: '#fff', borderRadius: 7, borderWidth: 1, borderColor: '#E2AD5D', paddingLeft: 15 }}
              containerStyle={{}}
            />
        <TouchableOpacity onPress={() => setOpen(true)} >
          <Input
            secureTextEntry={true}
            placeholder="Date of Birth"
            value={date.toDateString()}
            
            leftIcon={{ type: 'font-awesome', name: 'birthday-cake', color: '#E2AD5D' }}
            style={styles.input}
            onChangeText={() => {}}
            inputContainerStyle={{borderColor: 'transparent',backgroundColor: '#fff', borderRadius: 7, borderWidth: 1, borderColor: '#E2AD5D', paddingLeft: 15 }}
            editable={false}
            containerStyle={{}}
          />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleNext()}  style={{ borderColor: '#E2AD5D', borderWidth: 1, backgroundColor: 'white', borderRadius: 7, width: '54%', height: 45, justifyContent: 'center'}}  >
                <Text style={{color: '#E2AD5D', fontSize: 22, textAlign: 'center', width: '100%'}}> Next </Text>
        </TouchableOpacity>
        </View>

        <View ref={pageRef2} style={{width: '100%', alignItems: 'center', display: 'none'}} >
        <View style={{width: '92%', marginBottom: 50, marginTop: 15}}>
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
        <TouchableOpacity onPress={() => login()}  style={{ borderColor: '#E2AD5D', borderWidth: 1, backgroundColor: 'white', borderRadius: 7, width: '54%', height: 45, justifyContent: 'center', backgroundColor: '#E2AD5D'}}  >
                <Text style={{color: '#fff', fontSize: 22, textAlign: 'center', width: '100%'}}> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBack()}  style={{ marginTop: 15, borderColor: '#E2AD5D', borderWidth: 1, backgroundColor: 'white', borderRadius: 7, width: '54%', height: 45, justifyContent: 'center'}}  >
                <Text style={{color: '#E2AD5D', fontSize: 22, textAlign: 'center', width: '100%'}}> Back </Text>
        </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity style={{position: 'absolute', bottom: 42.5, width: '100%', opacity: 1 }} onPress={()=> nav.navigate('Login')}>
        {keyboardOpen ? null :
        <Text style={{color: '#E2AD5D', width: '100%', textAlign: 'center', fontSize: 17}}>
        Already have an account?{"\n"} Click here to <Text style={{fontWeight: 'bold', color: '#d19e52', fontSize: 17}}>Login</Text>!
        </Text>
        }
      </TouchableOpacity>

      <DatePicker
        title={'Date of Birth'}
        modal
        mode='date'
        open={open}
        date={date}
        value={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        onChangeText={(selectedDate) => console.log(selectedDate)}
      />
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