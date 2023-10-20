import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useContext, useState, useReducer } from 'react'
import Footer from '../../Footer/Footer'
import { ThemeContext } from '../../Theme/ThemeSwitcher'
import Header from '../../Header/Header'
import GoodsItem from '../GoodsItem/GoodsItem'
import { cartDark } from './cartDark'
import { cartLight } from './cartLight'

const initialState = {
    cartItems: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART' : 
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
        }
        case 'REMOVE_FROM_CART' :
        return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        }
        default: return state
    }
}


const CartPage = () => {
 

    const  [state, dispatch] = useReducer(reducer, initialState)
    const {theme} = useContext(ThemeContext) 
    
    const stylesThemes = StyleSheet.create(theme === 'dark' ? cartDark : cartLight)

    const sum = 4400

    return (
        <SafeAreaView style={stylesThemes.areaView}>
            <ScrollView style={{ height: '100%' }}>
                <View style={stylesThemes.viewF}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={stylesThemes.cartName}>
                            Корзина
                        </Text>
                        <Text style={stylesThemes.underName}>
                            {`Итого на ${sum} руб`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

export default CartPage

