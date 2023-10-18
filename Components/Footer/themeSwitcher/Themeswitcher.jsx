import React, { useContext } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SunSvg from '../../img/icons/Sun.svg'
import { ThemeContext } from '../../Theme/ThemeSwitcher';


const ThemeSwitcher = () => {

        const {theme, setTheme} = useContext(ThemeContext)

        return (
            <View>
                <TouchableOpacity onPress={() => theme == 'light' ? setTheme('dark') : setTheme('light')}>
                    <SunSvg />
                </TouchableOpacity>
            </View>
        );
    }


const styles = StyleSheet.create({})

export default ThemeSwitcher;
