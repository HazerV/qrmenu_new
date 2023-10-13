import React from 'react';
import {View, StyleSheet} from 'react-native';
import PlusSvg from '../GoodsItem/Plus.svg'

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
            flexShrink: 0 
            }}>
                
                <View style={{
                    width: 34,
                    height: 40,
                    alignSelf: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <PlusSvg />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Counter;
