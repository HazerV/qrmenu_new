import { Text, View, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { stylesCat } from './stylesCat'
import GoodsItem from '../pages/GoodsItem/GoodsItem'
import Footer from '../pages/Footer/Footer'

export default class Category extends Component {
 render() {
 return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        minHeight: 100
    }}>
        <ScrollView style={{
            backgroundColor: 'black',
            minHeight: 100
        }}>
            <View style={{
                    alignItems: 'flex-start'
                }}>
                    <Text style={[stylesCat.salats]}>
                        Салаты
                    </Text>
            </View>
            <View style = {stylesCat.container}>
                        <View style = {stylesCat.viewIm}>            
                        </View>
                        <View style={{
                            width: '90%',
                            margin: '0 auto',
                        }}>
                            <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                            <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                            <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                            <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                            <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
                        </View>
                    <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                        <Footer/>
                    </View>
            </View>
        </ScrollView>
    </SafeAreaView>
 )
 }
}