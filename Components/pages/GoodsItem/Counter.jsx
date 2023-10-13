import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PlusSvg from '../GoodsItem/Plus.svg'
import MinusSvg from '../GoodsItem/Minus.svg'

const Counter = () => {
    return (
        <View style={{ 
            width: 143,
            backgroundColor: 'gray',
            borderRadius: 16,
            marginLeft: 16,
            marginTop: 12,
            height: 40,
            marginBottom: 16,
            flexShrink: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8
            }}>
                

                <View>
                    <MinusSvg />
                </View>

                <Text style = {{
                    color: 'white',
                    fontFamily: 'Gilroy-Regular',
                    fontSize: 16,
                    fontWeight: 400,
                    alignSelf: 'center'
                }}>
                    423 руб
                </Text>

                <View>
                    <PlusSvg />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Counter;
