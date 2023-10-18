import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Platform, Image } from "react-native";
import { ThemeContext } from "../Theme/ThemeSwitcher";
import { SvgUri } from "react-native-svg";
import HeaderBlack from '../Header/HeaderBlack.svg' 
import HeaderLight from '../Header/HeaderLight.svg' 


const Header = ( ) => {

    const {theme, setTheme} = useContext(ThemeContext)

    const style = {
        header: {alignSelf: 'center',
            justifyContent: 'center',  
            marginBottom: 16,
            marginTop: -40,}
    }

    console.log('change theme', theme)

    if (theme == 'dark') {
        return (
        <View stlye={style.header}>
            <HeaderBlack />
        </View> ) 
    } else {
        return (
        <View style={style.header}>
            <HeaderLight />
        </View> )
    }
}

export default Header