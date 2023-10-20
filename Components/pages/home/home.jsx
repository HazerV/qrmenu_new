import React, {useContext} from 'react';
import {View, Image, Dimensions, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Brusket from '../../img/Bruskett.png'
import Desert from '../../img/Desert.png'
import Footer from '../../Footer/Footer';
import { ThemeContext } from '../../Theme/ThemeSwitcher';
import { lightTheme } from './lightTheme';
import Header from '../../Header/Header';
import TrueShop from '../../TrueShop';
import GoodsItem from '../GoodsItem/GoodsItem';
import { darkTheme } from './darkTheme';
import { useWindowDimensions } from 'react-native';

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

  const {theme} = useContext(ThemeContext)  
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const styles = StyleSheet.create({
    container: {
      width: windowWidth > 600 ? '60%' : '90%',
      height: windowHeight > 600 ? '60%' : '90%',
      flex: 1
    },
    text: {
      fontSize: windowWidth > 500 ? 50 : 24
    }
  })
  const stylesThemes = StyleSheet.create(theme === 'dark' ? darkTheme : lightTheme)

  return (
    <SafeAreaView style={{
      backgroundColor: theme == 'dark' ? "black" : 'white',
      height: '100%'
    }}>
      <ScrollView>
        <View style={styles.container}> 
          <Header />
            <View>
                <Text style={stylesThemes.menu}>
                    Меню
                </Text>
            </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Category') }}>
                        <View style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                          columnGap: 16,
                          width: Dimensions.get('window').width
                        }} >
                            <Image source={Desert} />
                            <Image source={Brusket} />
                        </View>
                </TouchableOpacity>
                <Text style = {stylesThemes.attention}>
                    Уважаемые гости, если у Вас есть аллергия на какой-либо продукт, 
                    пожалуйста, предупредите об этом Вашего официанта. 
                    Меню является рекламной продукцией нашего ресторана. 
                    Утвержденное контрольное меню с выходами блюд и сведениями 
                    о пищевой ценности готовой продукции: калорийности, 
                    содержании белков, жиров, углеводов находится в уголке потребителя 
                    и предоставляется по первому Вашему требованию.
                </Text>
                  <View style={{paddingTop: 32}}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Oferta')}}>
                    <Text style={stylesThemes.oferta}>
                      Политика конфиденциальности
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Oferta') }}>
                      <Text style = {stylesThemes.oferta}>
                        Оферта
                      </Text>
                    </TouchableOpacity>
                  </View>
            </View>
          </ScrollView>
          <View style={{paddingLeft: 16}}>
              <Footer />
          </View>
      </SafeAreaView>
    
  )
}

  export default HomeScreen;