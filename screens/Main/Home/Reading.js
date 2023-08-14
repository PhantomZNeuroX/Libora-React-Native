import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Background from '../../../components/background'
import Book from '../../../components/Reading/book'
import ReadingGoal from '../../../components/Reading/ReadingGoal'

const Reading = () => {
  return (
    <Background>
      <ScrollView>
      <View style={styles.shelfWrap}>
        <Text style={styles.headerText} >My Shelf</Text>
        <ScrollView style={styles.shelfContainer} horizontal={true} contentContainerStyle={{alignItems: 'center'}} >
          <Book style={styles.scrollBook} percent='42%' src={'https://online.pubhtml5.com/bqabe/zvmo/files/large/1.jpg'} />
          <Book style={styles.scrollBook} src={'https://m.media-amazon.com/images/I/51Dfqo6jR5L.jpg'} percent='69%'/>
          <Book style={styles.scrollBook} src={'https://images-eu.ssl-images-amazon.com/images/I/81YoazRCtBL._AC_UL750_SR750,750_.jpg'} percent='100%' />
        </ScrollView>
      </View>
      <Text style={[styles.headerText, {marginTop: 24}]}>Reading Goals</Text>
      <ReadingGoal percent={45} style={styles.gaugeGraph} />
      <Text style={[styles.headerText, {marginTop: 30 }]}>Today's Summary</Text>
      </ScrollView>
    </Background>
  )
}

export default Reading

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
    paddingLeft: 20
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
  }
})