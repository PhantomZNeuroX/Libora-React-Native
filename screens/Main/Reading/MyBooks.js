import { StyleSheet, Text, ScrollView, FlatList, View } from 'react-native'
import React from 'react'
import Background from '../../../components/background'
import Book from '../../../components/Reading/book'

const MyBooks = () => {

  const [books, setBooks] = React.useState([{id: 1, src: 'https://images-eu.ssl-images-amazon.com/images/I/81YoazRCtBL._AC_UL750_SR750,750_.jpg', percent: '100%'},{id: 2, src: 'https://m.media-amazon.com/images/I/51Dfqo6jR5L.jpg', percent: '69%'},{id: 3, src: 'https://online.pubhtml5.com/bqabe/zvmo/files/large/1.jpg', percent: '30%'}, {id: 1, src: 'https://covers.openlibrary.org/b/id/10202515-L.jpg', percent: '100%'},{id: 2, src: 'https://covers.openlibrary.org/b/id/10202515-L.jpg', percent: '30%'} ])

  return (
  <Background>
    <ScrollView>
    <Text style={styles.headerText}>My Books</Text>
    <FlatList
    contentContainerStyle={styles.flatList}
    data={books}
    renderItem={({item}) => <Book style={{width: '41%', marginHorizontal: '4%', marginVertical: 7 }}  src={item.src} percent={item.percent} />}
    numColumns={2}
    keyExtractor={(item, index) => index}
    >

    </FlatList>
    </ScrollView>
  </Background>
  )
}

export default MyBooks

const styles = StyleSheet.create({
  headerText:{
    fontSize: 24,
    fontFamily: 'MontserratMD',
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginTop: 10
  },
  flatList:{
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    flexDirection: 'column',
    marginHorizontal: '3%',
    marginBottom: 25
  }
})