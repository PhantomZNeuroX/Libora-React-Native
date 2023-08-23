import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../components/background'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import CustomSpeedometer from '../../../components/misc/speedometer'

const BookInfo = () => {
    const navigation = useNavigation();
  return (
<Background>
    <ScrollView contentContainerStyle={styles.container} >
        <View style={styles.bookShadow} >
        <Image source={{uri: 'https://m.media-amazon.com/images/I/51Dfqo6jR5L.jpg'}} style={styles.bookCover}  />
        </View>
        <Text style={styles.title} >Harry Potter and the Prisoner of Azkaban</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookView')}>
            <Text style={styles.buttonText} >Continue Reading</Text>
        </TouchableOpacity>
        <Text style={styles.desc} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptate accusantium iure cumque voluptates ipsum nemo libero! Nihil dolor doloribus tempora iusto laboriosam hic, ipsa magni nesciunt architecto facere. Nobis?</Text>

        <Text style={styles.headerText} >Book Statistics</Text>
        <View style={styles.bookStats}>
            <View style={{backgroundColor: '#FFE0B2',borderRadius: 12, marginVertical: 12.5}}>
            <View style={styles.speedometerWrap}>
                    <Text style={styles.timeRead}>77%</Text>
                    <Text style={styles.textSeco}> Completed </Text>
                <CustomSpeedometer style={{marginBottom: -600}}  percent={77} />
            </View>
            </View>

            <View style={{backgroundColor: '#FFE0B2',borderRadius: 12, marginVertical: 12.5, flexDirection: 'row', minHeight: 110}}>
                <View style={styles.subSec}>
                <Text style={styles.subSecTextMain} >03:42</Text>
                <Text style={styles.subSecTextSeco} >Time spent reading</Text>
                </View>
                <View style={[styles.subSec, {borderRightWidth: 0}]}>
                <Text style={styles.subSecTextMain} >60</Text>
                <Text style={styles.subSecTextSeco} >Average Speed</Text>
                </View>
            </View>
        </View>

    </ScrollView>
</Background>
  )
}

export default BookInfo

const styles = StyleSheet.create({
    bookCover:{
        width: '55%',
        aspectRatio: 135/198.4,
        borderRadius: 12,
        marginTop: 20,
        marginBottom: 25,
    },
    bookShadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.59,
        shadowRadius: 9.5,

        elevation: 8,  
    },
    button: {
        backgroundColor: '#E2AD5D',
      
        width: '89%',
        height: 58,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        color: '#fff', 
        fontSize: 24,
        fontFamily: 'MontserratMD'
    },
    container:{
        width: '100%',
        
        alignItems: 'center',
    },
    desc:{
        width: '89%',
        fontSize: 17,
        marginTop: 30,
        textAlign: 'center',
    },
    title:{
        fontSize: 27,
        textAlign: 'center',
        fontFamily: 'MontserratMD',
        
        width: '80%',
        marginBottom: 25
    },
    headerText:{
        fontSize: 26,
        fontFamily: 'MontserratMD',
        paddingBottom: 15,
        paddingHorizontal: 20,
        width: '100%',
        marginTop: 40,
    },
    bookStats:{
        width: '93%',
    },
    textMain: {
        position: 'absolute',
        fontFamily: 'MontserratMD',
        fontSize: 23,
        left: 85,
        top: 90,
        fontWeight: 'bold'
    },
    timeRead: {
        position: 'absolute',
        fontFamily: 'MontserratMD',
        fontSize: 85,
        left: 100,
        top: 74
    },
    textSeco: {
        position: 'absolute',
        fontFamily: 'MontserratMD',
        fontSize: 25,
        left: 102,
        top: 180,
    },
    speedometerWrap:{
        height: 366,
        marginBottom: -130,
    },
    subSec:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#E2AD5D',
    },
    subSecTextMain:{
        fontSize: 34,
        fontFamily: 'MontserratMD',
    },
    subSecTextSeco:{
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'MontserratMD',
        width: '95%',
        textAlign: 'center',
    }
})