import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Platform, Image } from "react-native";
import HeaderBlack from '../pages/img/HeaderBlack.png'
import HeaderLight from '../pages/img/HeaderLight.png'
import { ThemeContext } from "../Theme/ThemeSwitcher";
import HeaderBlackSvg from '../pages/img/HeaderBlack.svg'

const Header = ( ) => {

    const theme = useContext(ThemeContext)

    const style = {
        header: {alignSelf: 'center',
            justifyContent: 'center',  
            marginBottom: 16,
            marginTop: -40}
    }

    if (theme == 'dark') {
        return (
        <View stlye={style.header}>
            <HeaderBlack />
        </View> ) 
    } else {
        return (
        <View style={style.header}>
            <Image source={HeaderLight} />
        </View> )
    }
}

export default Header