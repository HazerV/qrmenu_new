import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PlusSvg from '../GoodsItem/Plus.svg'
import MinusSvg from '../GoodsItem/Minus.svg'


const Counter = () => {
    return (
        <View style={styles.container}>
             <View style={styles.mainPM}>
                     <View>
                         <MinusSvg />
                     </View>
             
                     <Text style = {styles.text}>
                         455 руб 
                     </Text>
                 
                     <View>
                         <PlusSvg />
                     </View>
                 
             </View>

             <View style={styles.counter} >
                
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 8
    },
    mainPM: { 
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
    },
    text: {
        color: 'white',
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        // fontWeight: 400,
        alignSelf: 'center'
    },
    counter: {
        width: 38,
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
}
})

export default Counter;
