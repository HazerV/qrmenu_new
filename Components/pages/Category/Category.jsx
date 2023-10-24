import { Text, View, Dimensions, ScrollView, SafeAreaView, StatusBar, useAnimatedValue, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import stylesCat from '../Category/stylesCat'
import GoodsItem from '../GoodsItem/GoodsItem'
import Footer from '../../Footer/Footer'
import { ThemeContext } from '../../Theme/ThemeSwitcher'
import { Button } from 'react-native'
import {addProd, Store} from '../../store/store'



const Category = () => {

    

    const addProd = () => {
        setItems( [...items, {
            id: 3,
            name: 'salad2',
            imagePath: 'https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg'
        }])
    }

    


    

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
                        <Button onPress={addProd} title={'213'} > click </Button>
                            <View style={{
                                alignItems: 'flex-start',
                                paddingLeft: 16,
                                paddingTop: 32,
                                width: '100%',
                            }}>
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