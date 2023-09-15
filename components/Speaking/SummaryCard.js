import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const SummaryCard = () => {
  return (  
    <View style={styles.container}>
      <View style={styles.traitWrap}>

        <View style={styles.traitGroup} >
          <Text style={styles.traitHead} >Speech Rate</Text>
          <Text style={styles.traitScore} >76.5</Text>
        </View>

        <View style={styles.traitGroup} >
          <Text style={styles.traitHead} >Pitch</Text>
          <Text style={styles.traitScore} >64.0</Text>
        </View>

        <View style={styles.traitGroup} >
          <Text style={styles.traitHead} >Fluency</Text>
          <Text style={styles.traitScore} >22.5</Text>
        </View>

      </View>

    </View>
  )
}

export default SummaryCard

const styles = StyleSheet.create({
      container: {
        width: '98%',
        height: 210,
        marginLeft: '0.5%',
        backgroundColor: '#FFE0B2',
        borderRadius: 12,
        borderColor: '#D9820060',
        borderWidth: 1.85,
        marginVertical: 25,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 6.84,

elevation: 5,
      },
      traitHead:{
        fontFamily: 'MontserratMD',
        fontSize: 20,
        fontWeight: 500,
      },
      traitScore:{
        fontFamily: 'MontserratMD',
        fontSize: 25,
        fontWeight: 700,
      },
      traitWrap:{
        height: '100%',
        width: '45%',
        minWidth: 160,
        paddingLeft: 12,
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
      },
      chart:{
        
      }
})