import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSpeedometer from '../misc/speedometer'

const ReadingGoal = (props) => {
  return (
    <View {...props}>
        <Text style={styles.textMain}> Today's Reading </Text>
        <Text style={styles.timeRead}>13:30</Text>
        <Text style={styles.textSeco}> of your 30-minute goal </Text>
    <CustomSpeedometer percent={props.percent} />
    </View>
  )
}

export default ReadingGoal

const styles = StyleSheet.create({
    textMain: {
        position: 'absolute',
        fontFamily: 'MontserratMD',
        fontSize: 23,
        left: 95,
        top: 90,
        fontWeight: 'bold'
    },
    timeRead: {
        position: 'absolute',
        fontFamily: 'MontserratMD',
        fontSize: 60,
        left: 122.5,
        top: 120
    },
    textSeco: {
        position: 'absolute',
        fontFamily: 'MontserratMD',
        fontSize: 20,
        left: 74,
        top: 195,

    },
})