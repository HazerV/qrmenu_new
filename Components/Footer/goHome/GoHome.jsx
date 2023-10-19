import React, { useContext } from 'react';
import {View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../Theme/ThemeSwitcher';
import HomeW from '../HomeW.svg'
import HomeB from '../HomeB.svg'


const GoHome = () => {
    
    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation()

    if (theme == 'dark') {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('chooseZal')}}>
                <HomeB />
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('chooseZal')}}>
                <HomeW />
            </TouchableOpacity>
        )
    }
}

export default GoHome;
