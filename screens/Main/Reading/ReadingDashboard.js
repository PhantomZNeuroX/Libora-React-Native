import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../components/background'
import Book from '../../../components/Reading/book'
import ReadingGoal from '../../../components/Reading/ReadingGoal'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainHeader } from '../../../components/misc/header'
const ReadingDashboard = () => {
  const navigation = useNavigation();
  return (
    <Background>
        <MainHeader  />
      <ScrollView>
      <View style={styles.shelfWrap}>
        <View style={styles.headerTextWrap} >
        <Text style={[styles.headerText, {paddingBottom: 0, paddingLeft: 0}]} >My Shelf</Text>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('My Books')} >
        <Ionicons name='grid-outline' color={'#E2AD5D'} style={{fontSize: 25}} />
        {/* <Ionicons name='add' color={'#E2AD5D'} style={{fontSize: 29}} /> */}
        </TouchableOpacity>
        </View>
        <ScrollView style={styles.shelfContainer} horizontal={true} contentContainerStyle={{alignItems: 'center'}} >
          <Book style={styles.scrollBook} percent='42%' src={'https://online.pubhtml5.com/bqabe/zvmo/files/large/1.jpg'} />
          <Book style={styles.scrollBook} src={'https://m.media-amazon.com/images/I/51Dfqo6jR5L.jpg'} percent='69%'/>
          <Book style={styles.scrollBook} src={'https://images-eu.ssl-images-amazon.com/images/I/81YoazRCtBL._AC_UL750_SR750,750_.jpg'} percent='100%' />
          <TouchableOpacity style={styles.lastBook}  onPress={() => navigation.navigate('My Books')}>
              <Ionicons name='grid-outline' color={'#E2AD5D'} style={{fontSize: 55}} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Text style={[styles.headerText, {marginTop: 24}]}>Reading Goals</Text>
      <ReadingGoal percent={45} style={styles.gaugeGraph} />
      <Text style={[styles.headerText, {marginTop: 30 }]}>Today's Summary</Text>
      </ScrollView>
    </Background>
  )
}

export default ReadingDashboard

const styles = StyleSheet.create({
  shelfContainer:{
    height: 260,
    paddingLeft: 7,
    paddingTop: 4,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFE0B2'
  },
  shelfWrap:{
    width: '100%',
    marginTop: 20,
  },
  headerText:{
    fontSize: 24,
    fontFamily: 'MontserratMD',
    paddingBottom: 15,
    paddingHorizontal: 20
  },
  scrollBook:{
    marginHorizontal: 10,
  },
  gaugeGraph:{
    marginTop: -5,
    position: 'relative',
    width: '100%',
    height: 392,
    marginBottom: -150
  },
  headerTextWrap:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  linkText:{
    fontSize: 18,
    fontFamily: 'MontserratMD',
    color: '#E2AD5D',
    textDecorationLine: 'underline',
  },
  lastBook: {
    width: 135,
    height: 198.4,
    marginHorizontal: 12.5,
    marginRight: 25,
    marginBottom: 32.6,
    backgroundColor: '#fccf8b',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
},
})