import React, { useContext } from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import { ThemeContext } from '../../Theme/ThemeSwitcher';
import GoodsItem from '../GoodsItem/GoodsItem';


const Cart = () => {

    const {theme} = useContext(ThemeContext)


    const styles = {
        container: {
            backgroundColor: theme == 'light' ? 'white' : 'black',
            height: '100%',
            weight: '100%'
        },
        scrollView:{

        },
        headText: {
            color: theme == 'light' ? 'black' : 'white',
            fontFamily: 'Gilroy-Regular',
            fontSize: 24,
            alignSelf: 'center',
            marginTop: 16
        },
        headMini: {
            color: theme == 'light' ? 'black' : 'white',
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            alignSelf: 'center'
        }
    }


        return (
            <ScrollView style={{
                width: '100%',
                height: '100%'
            }}>
                <SafeAreaView style={{
                    width: '100%',
                    height: '100%'
                }}>
                    <View style={styles.container}>             
                        <Text style={styles.headText}>          {/*  HEADER  */}
                            Корзина
                        </Text>
                        <Text style={styles.headMini}>Итого на 4 400 руб</Text>       {/*  COUNT SUN UNDER HEAD  */}
                    </View>
                    <View style={{
                        width: '100%',
                        backgroundColor: theme == 'light' ? 'white' : 'black',
                        paddingBottom: 100
                    }}>
                        <GoodsItem name='Салааат'/>                  {/*  ITEM IN CART  */}
                    </View>
                </SafeAreaView>
            </ScrollView>                                       
        );
}

export default Cart;
