import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import Cat1 from '../../Components/pages/img/Cat1.png'
import Cat2 from '../../Components/pages/img/Cat2.png'
import { stylesCat } from './stylesCat'
import Product from '../../Components/pages/img/Product.png'
import GoodsItem from '../pages/GoodsItem/GoodsItem'

export default class Category extends Component {
 render() {
 return (
    <View style = {stylesCat.container}>
        <View>
            <Text style={stylesCat.salats}>
                Салаты
            </Text>
        </View>
            <View style = {stylesCat.buttons}>
                <Image source={Cat1} />
                <Image source={Cat2} />
            </View>
        
        <View style = {{
                justifyContent: 'space-between',
                flexDirection: 'column',
                marginBottom: 16,
                marginLeft: 10,
                marginRight: 15,
                width: '100%',
                marginStart: "5%",
                marginEnd: '10%',
                justifyContent: 'center',
        }}>            
        </View>
        <View style={{
            width: '90%',
            margin: '0 auto',
        }}>
            <GoodsItem name={"Салат из телятины, зелёной редьки и жареного лука («Ташкент»)"} imagePath={"https://api.menu.true-false.ru/storage/photos/zmcdR90pburp3Ywexh6yY77Ol4McLNrccYaWuA1X_2x.jpg"}/>
            <GoodsItem/>
            <GoodsItem/>
            <GoodsItem/>

        </View>
        
        {/* <View style={{
        }}>
            
        </View> */}
    </View>
 )
 }
}