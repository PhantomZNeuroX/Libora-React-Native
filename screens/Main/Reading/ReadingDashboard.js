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
        <View style={{flexDirection: 'row'}} >
          <TouchableOpacity onPress={() => navigation.navigate('My Books')} >
          <Ionicons name='grid-outline' color={'#E2AD5D'} style={{fontSize: 25}} />
          {/* <Ionicons name='add' color={'#E2AD5D'} style={{fontSize: 29}} /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('My Books')} >
          <Ionicons name='add' color={'#E2AD5D'} style={{fontSize: 29, paddingLeft: 15}} />
          </TouchableOpacity>
        </View>
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
      <Text style={[styles.headerText, {marginTop: 24}]}>Reading Goal</Text>
      <ReadingGoal percent={45} style={styles.gaugeGraph} />
      <Text style={[styles.headerText, {marginTop: 30 }]}>Word Bag Recap</Text>
      <View style={styles.DictionaryWrap} >
          <View style={styles.wordWrap} >
            <View style={styles.leftDicWrap} >
                <Text style={{fontFamily: 'MontserratMD', fontSize: 24,}} >1</Text>
            </View>
            <View style={styles.rightDicWrap}>
              <Text style={styles.wordDic}>Beautiful</Text>
              <Text style={styles.wordDesc}>Pleasing the senses or mind aesthetically.</Text>
            </View>
          </View>
          <View style={styles.wordWrap} >
            <View style={styles.leftDicWrap} >
                <Text style={{fontFamily: 'MontserratMD', fontSize: 24,}} >2</Text>
            </View>
            <View style={styles.rightDicWrap}>
              <Text style={styles.wordDic}>Aesthetic</Text>
              <Text style={styles.wordDesc}>In a way that gives pleasure through beauty.</Text>
            </View>
          </View>
          <View style={styles.wordWrap} >
            <View style={styles.leftDicWrap} >
                <Text style={{fontFamily: 'MontserratMD', fontSize: 24,}} >3</Text>
            </View>
            <View style={styles.rightDicWrap}>
              <Text style={styles.wordDic}>Glorius</Text>
              <Text style={styles.wordDesc}>Having, worthy of, or bringing fame or admiration.</Text>
            </View>
          </View>
      </View>
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
DictionaryWrap:{
  width: '95%',
  marginHorizontal: '2.5%',
  borderRadius: 12,
  height: 'auto',
  minHeight: 100,
  backgroundColor: '#FFE0B2',

  paddingVertical: 8.5,
  paddingHorizontal: '3%',
  marginBottom: 40
},
wordWrap:{
  width: '100%',
  minHeight: 50,
  backgroundColor: '#FCCF8B',
  borderRadius: 12,
  flexDirection: 'row',
  
  marginVertical: 6,
},
wordDic:{
  fontSize: 20,
  fontFamily: 'MontserratMD',
  paddingHorizontal: 10,
  fontWeight: 'bold',
  paddingTop: 10,
},
wordDesc:{
  fontSize: 16,
  fontFamily: 'Futura',
  paddingHorizontal: 10,
  paddingTop: 7,
  paddingBottom: 14,
},
leftDicWrap:{
  width: '13%',
  height: '100%',
  minHeight: 50,
  backgroundColor: '#E2AD5D',
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,

  justifyContent: 'center',
  alignItems: 'center',
},
rightDicWrap:{
  width: '87%',
  height: 'auto',
  backgroundColor: '#FCCF8B',
  borderTopRightRadius: 12,
  borderBottomRightRadius: 12,
}

})