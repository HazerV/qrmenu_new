import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ThemeContext } from '../../Theme/ThemeSwitcher';


const CartFoot = () => {
    
    const {theme} = useContext(ThemeContext)

    const styles = StyleSheet.create({
        
        container: {
            // backgroundColor: '#555',
            minHeight: 48,
            minWidth: 112,
            marginBottom: 16,
            borderColor: '#BBBBBB',
            borderWidth: 2,
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 16
        },
        summa: {
            marginTop: 5,
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            alignItems: 'center',
            alignSelf: 'center'
        },
        count: {
            // color: 'white',
            fontFamily: 'Gilroy-Regular',
            fontSize: 10,
            alignItems: 'center',
            alignSelf: 'center'
        }
    })

    const sum = 'Корзина'
    const count = 'Пусто'

        return (
            <View style={[styles.container, {
                backgroundColor: theme == 'light' ? 'white' : '#555555'
            }]}>
                <View>
                    <Text style = {[styles.summa, {
                        color: theme == 'light' ? 'black' : 'white'
                    }]}>
                        {sum}
                    </Text>
                    <Text style = {[styles.count, {
                        color: theme == 'light' ? 'black' : 'white'
                    }]}>
                        {count} 
                    </Text>
                </View>
            </View>
        );

    }

export default CartFoot;
