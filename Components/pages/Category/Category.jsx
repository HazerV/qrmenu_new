import { Text, View, Dimensions, ScrollView, SafeAreaView, StatusBar, useAnimatedValue, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import stylesCat from '../Category/stylesCat'
import GoodsItem from '../GoodsItem/GoodsItem'
import Footer from '../../Footer/Footer'
import { ThemeContext } from '../../Theme/ThemeSwitcher'



const Category = () => {

    const {theme} = useContext(ThemeContext)

    const styles = {
            container: {
                backgroundColor: theme == 'light' ? 'black' : 'white',
                width: '100%',
                minHeight: useWindowDimensions().height
            },
            headName: {
                paddingTop: 32,
                paddingLeft: 16,
                paddingBottom: 16
            },
            nameStyle: {
                color: theme == 'dark' ? 'black' : 'white', 
                fontFamily: 'Gilroy-Regular',
                fontSize: 24
            },
            items: {
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 16,
                width: useWindowDimensions().width
            }
        }

    const catName = 'Салаты'


    return (
            <View style={{
                flex: 1
            }}>
                <SafeAreaView>
                     <ScrollView style={{}}>
                         <View style={styles.container}>
                             <View style = {styles.headName}>
                                 <Text style={styles.nameStyle}>
                                     {catName}
                                 </Text>
                             </View>

                             <View style={styles.items}>
                                 <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                 <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                 <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                 <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                                 <GoodsItem name={'Salat salat salat'} imagePath={'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'} />
                             </View>
                             
                                <View>
                                    <Footer />
                                </View>
                         </View>
                     </ScrollView>
                </SafeAreaView>
            </View>
    )
 }

 export default Category