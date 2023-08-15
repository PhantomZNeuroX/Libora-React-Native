import { View, Text, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import { WebView } from 'react-native-webview';
import WebViewFile from '../../../assets/EpubReader.html'
import Background from '../../../components/background';
import { useNavigation } from '@react-navigation/native';


const BookView = () => {
  const [theme, setTheme] = useState('#fffef7')
  navigation = useNavigation();
  handleMessage = (event) => {
    data = JSON.parse(event.nativeEvent.data)

    console.log(data);

    if (data.type === 'theme') {
      console.log('Changing Theme')
      setTheme(data.theme);
    } else if (data.type === 'back') {
  
      navigation.goBack();
    }
    
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme, marginTop: -13}} >
    <WebView
    injectedJavaScript='window.onload = () => ePubViewer.doBook("https://standardebooks.org/ebooks/bram-stoker/dracula/downloads/bram-stoker_dracula.epub")'
    originWhitelist={['*']}
    source={WebViewFile}
    style={{ marginTop: 0 }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    onMessage={handleMessage}
  />
  </SafeAreaView>
  )
}

export default BookView