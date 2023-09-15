import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useRef, useState } from 'react'
import Background from '../../../components/background'
import { MainHeader } from '../../../components/misc/header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel'
import SummaryCard from '../../../components/Speaking/SummaryCard';

const SpeakingDashboard = () => {
    // const carouselRef = useRef();
    // const [scrollPage, setScrollPage] = useState(0);

    // const handleScroll = () =>{

    // }

  return (
    <Background>
        <MainHeader />
        <View style={styles.summaryWrap} >
            <View style={styles.headerTextWrap}>
                <Text style={[styles.headerText, {paddingBottom: 0, paddingLeft: 0}]} >Summary</Text>
                <View style={{flexDirection: 'row'}} >
                    <TouchableOpacity><Ionicons name='grid-outline' color={'#E2AD5D'} style={{fontSize: 25}} /></TouchableOpacity>
                    <TouchableOpacity><Ionicons name='add-outline' color={'#E2AD5D'} style={{fontSize: 25, paddingLeft: 15}} /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.carouselWrap} >
                <Carousel
                data={[{id: 1, rate: 33},{id: 1, rate: 33}]}
                
                renderItem={({item, index}) => {
                    return(
                        <SummaryCard />
                    )
                }}
                sliderWidth={Dimensions.get('screen').width - 26}
                itemWidth={Dimensions.get('screen').width - 23}
                // ref={carouselRef}
                >

                </Carousel>

            </View>

        </View>
    </Background>
  )
}

export default SpeakingDashboard

const styles = StyleSheet.create({
    summaryWrap:{
        width: '100%',
        marginTop: 20,

    },
    headerText:{
        fontSize: 24,
        fontFamily: 'MontserratMD',
        paddingBottom: 15,
        paddingHorizontal: 20
      },
      headerTextWrap:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      carouselWrap:{
        width: '100%',
        alignItems: 'center',
      }
})