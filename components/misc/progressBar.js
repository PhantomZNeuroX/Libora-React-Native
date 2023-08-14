import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgressBar = ({percent='0%'}) => {
  return (
    <View>

    <View style={styles.container}>
    <View style={[styles.bar, {width: percent}]}></View>
    </View>

    <View style={styles.numContainer}><Text style={styles.percentText}>{percent}</Text></View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    container:{
        width: '97%',
        marginHorizontal: '1.5%',
        
        backgroundColor: 'white',
        height: 8,
        borderRadius: 10,
    },
    bar:{
        
        height: '100%',
        backgroundColor: '#E2AD5D',
        borderRadius: 10,

    },
    numContainer:{
        marginTop: 4,
        width: '100%',
        height: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    percentText:{
        fontSize: 15,
        fontFamily: 'MontserratMD',
        marginHorizontal: 5,
    }
})