import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Platform, Pressable, Button } from 'react-native';
import React from 'react';
//import { Button } from '@rneui/themed';
import { useState, useRef } from 'react';
import Liboralogo from '../../components/assets/Liboralogo';
import BookPile from '../../components/assets/BookPile';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');
  const Scroll = useRef()
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / (width-1));
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage } = sliderState;
  const pageIndex = Math.round(currentPage);
  

  const nav = useNavigation();

  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#FFFEF7', flex: 1 }}>
        <ScrollView
          ref={Scroll}
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height: '100%', alignItems: 'center' }}>
            <Liboralogo width='73%'/>
          </View>
          <View style={[{ height: '100%', width}, styles.slide]}>
            <BookPile height='80%' style={styles.svg}/>
            <Text style={styles.btmText} >Form reading habits!</Text>
          </View>

          <View style={{ width, height }}>
            <View style={styles.wrapper}>
              <Text style={styles.header}>Top Notch Artists</Text>
              <Text style={styles.paragraph}>... all in one place</Text>
            </View>
          </View>

          <View style={{ width, height }}>
            <View style={styles.wrapper}>
              <Text style={styles.header}>Top Notch Artists</Text>
              <Text style={styles.paragraph}>... all in one place</Text>
            </View>
          </View>

          <View style={{ width, height: '100%', justifyContent: 'center', alignItems:'center'}}>
              <Liboralogo width='73%' height='20%' style={{ marginVertical: 120 }} />
              <Pressable onPress={() => nav.navigate('Login')}  style={{ borderColor: '#E2AD5D', borderWidth: 1, backgroundColor: 'white', borderRadius: 7, width: '54%', height: 45, justifyContent: 'center'}}  >
                <Text style={{color: '#E2AD5D', fontSize: 22, textAlign: 'center', width: '100%'}}> Get Started! </Text>
              </Pressable>
          </View>
        </ScrollView>
        <View style={{flex: 0.3}}>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map((key, index) => (
            <View style={[styles.paginationDots, { opacity: pageIndex === index ? 1 : 0.2 }]} key={index} />
          ))}
        </View>
          <Pressable onPress={() => Scroll.current.scrollToEnd()} style={{width: '100%'}}>
          <Text  style={{color: '#E2AD5D', fontSize: 18, width: '100%', textAlign: 'center'}} >Skip</Text>
          </Pressable> 
        </View>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    marginVertical: 50,
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 11,
    width: 11,
    borderRadius: 10 / 2,
    backgroundColor: '#EBB86B',
    marginHorizontal: 5,
  },
  btmText:{
    color: '#E2AD5D',
    fontSize: 26,
    justifyContent: 'center',
    alignItems: 'flex-end',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: -55,
    fontFamily: 'MontserratMD',
    fontWeight: 700
  },
  svg:{

  },
  slide:{
    justifyContent: 'center',
  }
});

export default Welcome;