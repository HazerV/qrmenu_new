import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CartFoot = () => {
    
    const styles = StyleSheet.create({
        
        container: {
            backgroundColor: '#555',
            minHeight: 48,
            minWidth: 112,
            marginBottom: 16,
            borderColor: '#FF7A00',
            borderWidth: 2,
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: 16
        },
        summa: {
            marginTop: 5,
            color: 'white',
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            alignItems: 'center',
            alignSelf: 'center'
        },
        count: {
            color: 'white',
            fontFamily: 'Gilroy-Regular',
            fontSize: 10,
            alignItems: 'center',
            alignSelf: 'center'
        }
    })

    const sum = 'Корзина'
    const count = 'Пусто'
    
        return (
            <View style={styles.container}>
                <View>
                    <Text style = {styles.summa}>
                        {sum}
                    </Text>
                    <Text style = {styles.count}>
                        {count} 
                    </Text>
                </View>
            </View>
        );

    }

export default CartFoot;
