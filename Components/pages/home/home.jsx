import React, {useEffect, useState, Context} from 'react';
import {View, Image, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView, useColorScheme, TouchableOpacity} from 'react-native';
import { homeStyles } from './homeStyle';
import Header from '../img/Header.png'
import Brusket from '../img/Bruskett.png'
import Desert from '../img/Desert.png'
import TrueShopSvg from '../img/TrueShop.svg'
import Footer from '../Footer/Footer';
import ThemeSwitcher from '../../Theme/ThemeSwitcher';
import ThemedButton from '../Theme/themed-button';
import Switcher from '../Theme/themeSw';

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

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
          <ScrollView style={styles.scrollView}>
            <StatusBar backgroundColor='black' animated={true} />
              <View style={homeStyles.container}>
                  <View>
                      <View style={homeStyles.head}>  
                        <Image source={Header} />
                      </View>          
                      <View>
                        <Text style={homeStyles.menu}>
                          Меню
                        </Text>
                      </View>
                      <TouchableOpacity onPress={() => { navigation.navigate('Category') }}>
                        <View style={homeStyles.buttons}>
                          <Image source={Desert} />
                          <Image source={Brusket} />
                        </View>
                      </TouchableOpacity>
                        <Text style={ homeStyles.attention }>
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
                        <Text style={homeStyles.oferta}>
                          Политика конфиденциальности
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignSelf: 'center'
                      }} onPress={() => { navigation.navigate('Oferta')}}>
                        <Text style={homeStyles.oferta}>
                            Оферта 
                        </Text>
                      </TouchableOpacity>
                    </View>
                  <View style={{alignSelf: 'center'}}>
                    <TrueShopSvg/>
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