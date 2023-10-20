import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Platform, Image } from "react-native";
import { ThemeContext } from "../Theme/ThemeSwitcher";
import { SvgUri } from "react-native-svg";
import HeaderBlack from '../Header/HeaderBlack.svg' 
import HeaderLight from '../Header/HeaderLight.svg' 


const Header = ( ) => {

    const {theme} = useContext(ThemeContext)

    const style = {
        header: {
            alignSelf: 'center',
            justifyContent: 'center',  
            // marginBottom: 16,
            // marginTop: -40,
            paddingLeft: 25
        }
    }

    console.log(theme)

    if (theme === 'dark') {
        return (
        <View stlye={[style.header, {paddingLeft: 25}]}>
            <HeaderBlack />
        </View> ) 
    } else {
        return (
        <View stlye={[style.header, {paddingLeft: 25}]}>
            <HeaderLight />
        </View> )
    }
}

export default Header