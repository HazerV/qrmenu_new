import { Text, View, Dimensions, ScrollView, SafeAreaView, StatusBar, useAnimatedValue, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import stylesCat from '../Category/stylesCat'
import GoodsItem from '../GoodsItem/GoodsItem'
import Footer from '../../Footer/Footer'
import { ThemeContext } from '../../Theme/ThemeSwitcher'



const Category = () => {

    const {theme} = useContext(ThemeContext)

    return (
            <SafeAreaView style={{
                backgroundColor: theme == 'dark' ? "black" : 'white',
                height: '100%',
            }}>
                <ScrollView>
                    <View style={{
                        backgroundColor: theme == 'light' ? 'white' : 'black',
                        height: '100%',
                    }}>
                        <Text style={{
                            color: theme == 'light' ? 'black' : 'white',
                            fontFamily: 'Gilroy-Regular',
                            fontSize: 24,
                            paddingLeft: 24,
                            paddingTop: 16
                        }}>
                            Салады
                        </Text>
                            <View style={{
                                alignItems: 'flex-start',
                                paddingLeft: 16,
                                paddingTop: 32,
                                width: '100%',
                            }}>
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                <GoodsItem name={'Зеленый салатик'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                            </View>
                    </View>
                </ScrollView>
                <View>
                    <Footer />
                </View> 
            </SafeAreaView>
    )
}
 export default Category




//     const styles = {
//             container: {
//                 backgroundColor: theme == 'light' ? 'black' : 'white',
//                 width: '100%',
//                 height: '100%',
//                 minHeight: useWindowDimensions().height,
//                 flex: 1
//             },
//             headName: {
//                 paddingTop: 32,
//                 paddingLeft: 16,
//                 paddingBottom: 16
//             },
//             nameStyle: {
//                 color: theme == 'dark' ? 'black' : 'white', 
//                 fontFamily: 'Gilroy-Regular',
//                 fontSize: 24
//             },
//             items: {
//                 justifyContent: 'flex-start',
//                 alignItems: 'flex-start',
//                 paddingLeft: 16,
//                 width: useWindowDimensions().width
//             }
//         }

//     const catName = 'Салаты'


//     return (
//             <View style={{
//                 flex: 1
//             }}>
//                 <SafeAreaView style={{height: '100%'}}>
//                      <ScrollView style={{height: '100%'}}>
//                          <View style={styles.container}>
//                              <View style = {styles.headName}>
//                                  <Text style={styles.nameStyle}>
//                                      {catName}
//                                  </Text>
//                              </View>

//                              <View style={styles.items}>
//                                  <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
//                                  <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
//                                  <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
//                                  <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
//                                  <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
//                              </View>
//                         </View>     
                         
//                      </ScrollView>
//                     <View>
//                         <Footer />
//                     </View>
//                 </SafeAreaView>
//             </View>
//     )
//  }