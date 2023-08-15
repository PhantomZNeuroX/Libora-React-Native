import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProgressBar from '../misc/progressBar'
import { useNavigation } from '@react-navigation/native'

const Book = ({percent = '0%',src }) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BookView') }>
        <Image style={styles.bookCover} source={{uri:src}} />
        <ProgressBar percent={percent}/>
    </TouchableOpacity>
  )
}

export default Book

styles = StyleSheet.create({
    container: {
        width: 135,
        height: 248,
        marginHorizontal: 12.5,
        flexDirection: 'column',
        justifyContent: 'space-evenly',

    },
    bookCover:{
        width: '100%',
        height: '80%',
        borderRadius: 12
    }
})