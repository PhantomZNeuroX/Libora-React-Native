import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Background from '../../components/background'
import Liboralogo from '../../components/assets/Liboralogo'

const LoadingLogo = () => {
  return (
    <Background style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        
        <LiboraLogo width="70%" style={{marginBottom: 80}}/>
        <ActivityIndicator size="large" color = '#E2AD5D' style={{position: 'absolute', bottom: '34%'}} />

        
    </Background>
  )
}

export default LoadingLogo