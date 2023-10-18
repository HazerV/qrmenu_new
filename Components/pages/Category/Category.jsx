import { Text, View, Image, ScrollView, SafeAreaView, StatusBar, useAnimatedValue } from 'react-native'
import React, { useContext } from 'react'
import stylesCat from '../Category/stylesCat'
import GoodsItem from '../GoodsItem/GoodsItem'
import Footer from '../../Footer/Footer'
import { ThemeContext } from '../../Theme/ThemeSwitcher'


const Category = () => {

    const theme = useContext(ThemeContext)

    const styles = {
        container: {
            flex: 1,
            backgroundColor: theme == 'light' ? lightTheme : '#fff',
            alignSelf: 'center',
            justifyContent: 'center'
          },
        }

    return (
            <SafeAreaView style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
                minHeight: 100,
                // backgroundColor: theme == 'light' ? 'white' : 'black'
            }}>
                <ScrollView style={{
                    backgroundColor: theme == 'light' ? 'white' : 'black',
                    minHeight: 100
                }}>

                    <View style = {styles.container}>
                                <View style = {[{       
                                     justifyContent: 'space-between',
                                     flexDirection: 'column',
                                     marginLeft: 10,
                                     marginRight: 15,
                                     width: '100%',
                                     marginStart: "5%",
                                     marginEnd: '10%',
                                     justifyContent: 'center',}, {
                                        backgroundColor: theme == 'light' ? 'white' : 'black'
                                            }]}>            
                                </View>
                                <View style={{
                                    width: '100%',
                                    // margin: '0 auto',
                                    backgroundColor: theme == 'light' ? 'white' : 'black',
                                    paddingBottom: 100,
                                }}>
                                    <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                                    <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                                    <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                                    <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                                    <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                                </View>
                            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, marginLeft: 0 }}>
                                <Footer/>
                            </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
    )
 }

 export default Category