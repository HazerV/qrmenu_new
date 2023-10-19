import React, { useContext } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SunSvg from '../../img/icons/Sun.svg'
import { ThemeContext } from '../../Theme/ThemeSwitcher';
import SunSvgW from '../themeSwitcher/Sun.svg'

const ThemeSwitcher = () => {

        const {theme, setTheme} = useContext(ThemeContext)

        if (theme == 'dark') {
            return (
            <TouchableOpacity onPress={() => theme == 'light' ? setTheme('dark') : setTheme('light')}>
                <View>
                    <SunSvg />
                </View>
            </TouchableOpacity> 
                ) 
        } else {
            return (
            <TouchableOpacity onPress={() => theme == 'light' ? setTheme('dark') : setTheme('light')}>
                <View>
                    <SunSvgW />
                </View>
            </TouchableOpacity>
                 )
        }
    }


const styles = StyleSheet.create({})

export default ThemeSwitcher;
