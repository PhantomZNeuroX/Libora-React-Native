import { View, Text, SafeAreaView, Platform } from 'react-native'
import React,{useState, useEffect} from 'react'
import { WebView } from 'react-native-webview';
import WebViewFile from '../../../assets/EpubReader.html'
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from "expo-file-system";


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

 const htmlInline = ``

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme, marginTop: Platform.OS == 'ios' ? -13 : 0, paddingTop: Platform.OS == 'ios' ? 0 : 40,}} >
    <WebView
    injectedJavaScript='window.onload = setTimeout(() => ePubViewer.doBook("https://standardebooks.org/ebooks/bram-stoker/dracula/downloads/bram-stoker_dracula.epub", 0))'
    originWhitelist={['*']}
    source={ Platform.OS == 'ios' ? WebViewFile : {uri: 'https://phantomzneurox.github.io/Libora-Epub-Reader'} }
    style={{ marginTop: 0 }}
    startInLoadingState={true}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    onMessage={handleMessage}
  />
  </SafeAreaView>
  )
}

export default BookView