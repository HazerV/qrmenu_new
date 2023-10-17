import React, {useEffect, useState, useContext} from 'react';
import {View, Image, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView, useColorScheme, TouchableOpacity, Button} from 'react-native';
import { homeStyles, stylez } from './homeStyle';
import HeaderBlack from '../img/HeaderBlack.png'
import Brusket from '../img/Bruskett.png'
import Desert from '../img/Desert.png'
import TrueShopSvg from '../img/TrueShop.svg'
import Footer from '../Footer/Footer';
import { ThemeContext } from '../../Theme/ThemeSwitcher';
import { lightTheme } from './lightTheme';
import TrueLight from '../img/TrueLight.svg'
import Header from '../../Header/Header';
import TrueShop from '../../TrueShop';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    minHeight: 100
  },
  scrollView: {
    backgroundColor: "black",
    minHeight: 100,
  }
})

const HomeScreen = ({navigation}) => {

  const {theme, setTheme} = useContext(ThemeContext)
  console.log(theme)

  const stylez = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme == 'light' ? lightTheme : '#fff',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    container: {
      backgroundColor: theme == "light" ? 'white' : 'black',
      minHeight: 100,
      display: "flex",
      flex: 1,
      width: '100%',
      height: '100%',
      paddingBottom: 100
    },
    attention: {
      textAlign: 'justify',
      color: theme == 'light' ? 'black' : 'white',
      fontSize: 14,
      fontFamily: "Gilroy-Regular",
      alignSelf: 'center',
      marginLeft: 10,
      marginRight: 15,
      marginBottom: 52,
      width: '90%'
    },
    menu: {
      textAlign: 'left',
      color: theme == 'light' ? 'black' : "white",
      fontSize: 24,
      fontFamily: "Gilroy-Regular",
      marginBottom: 25,
      marginLeft:16 
    },
    oferta: {
      color: theme == 'light' ? 'black' : 'white', 
      textDecorationLine: 'underline', 
      height: 22, 
      fontFamily: 'Gilroy-Regular', 
      marginBottom: 8}
  })



  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
          <ScrollView style={styles.scrollView}>
            <StatusBar backgroundColor='black' animated={true} />
              <View style={stylez.container}>
                  <View>
                      <Header />     
                      <View>
                        <Text style={stylez.menu}>
                          Меню
                        </Text>
                      </View>
                      <TouchableOpacity onPress={() => { navigation.navigate('Category') }}>
                        <View style={homeStyles.buttons}>
                          <Image source={Desert} />
                          <Image source={Brusket} />
                        </View>
                      </TouchableOpacity>
                        <Text style={ stylez.attention }>
                          Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, 
                          пожалуйста, предупредите об этом Вашего официанта. 
                          Меню является рекламной продукцией нашего ресторана. 
                          Утвержденное контрольное меню с выходам
                          и блюд и сведениями о пищевой ценности готовой продукции: 
                          калорийности, содержании белков, 
                          жиров, углеводов находится в уголке потребителя 
                          и предоставляется по первому Вашему требованию.
                      </Text>
                      <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }} onPress={() => { navigation.navigate('Confidience') }}>
                        <Text style={stylez.oferta}>
                          Политика конфиденциальности
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignSelf: 'center'
                      }} onPress={() => { navigation.navigate('Oferta')}}>
                        <Text style={stylez.oferta}>
                            Оферта 
                        </Text>
                      </TouchableOpacity>
                    </View>
                  <View style={{alignSelf: 'center'}}>
                    <TrueShop />
                  </View>
                  <View>
                      <View>
                        <Footer/>
                    </View>
                  </View>
              </View>    
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};


export default HomeScreen;