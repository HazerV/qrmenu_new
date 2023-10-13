import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import Cat1 from '../../Components/pages/img/Cat1.png'
import Cat2 from '../../Components/pages/img/Cat2.png'
import { stylesCat } from './stylesCat'
import Product from '../../Components/pages/img/Product.png'


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
            <Image source={Product}/>            
            <Image source={Product}/>
            <Image source={Product}/>
            <Image source={Product}/>
            <Image source={Product}/>
        </View>
    </View>
 )
 }
}