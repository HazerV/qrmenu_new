import React, { Component, useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { ThemeContext } from './Theme/ThemeSwitcher';
import TrueShopLight from '../Components/img/TrueShopLight.svg'
import TrueShopDark from '../Components/img/TrueShopDark.svg'

const TrueShop = () => {


        const {theme} = useContext(ThemeContext)

        console.log(theme)

        const styles = StyleSheet.create({
            logo: {
                alignSelf: 'center'
            }
        })

        if (theme == 'dark') {
            return (
                <View style = {styles.logo}>
                    <TrueShopDark />
                </View>
            )
        } else {
            return (
                <View style = {styles.logo}>
                    <TrueShopLight />
                </View>
            )
        }

}




export default TrueShop;
