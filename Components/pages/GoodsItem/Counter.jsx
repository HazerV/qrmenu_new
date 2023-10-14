import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PlusSvg from '../GoodsItem/Plus.svg'
import MinusSvg from '../GoodsItem/Minus.svg'


const Counter = () => {

    const num = 450

    const [count, setCount] = useState(0)

    
    // const amount = 1

    
    return (
        <View style={styles.container}>
             <View style={styles.mainPM}>
                     
                    <TouchableOpacity onPress={() => {if (count != 0)
                        
                        setCount(count-1)}}>
                        <View>
                            <MinusSvg />
                        </View>
                    </TouchableOpacity>

                    {/* <Text>{num}</Text> */}

                     <Text style = {styles.text}>
                         {count ? num * count : num} 
                     </Text>

                    <TouchableOpacity onPress={() => setCount(count+1)}>
                         <View>
                             <PlusSvg />
                         </View>
                    </TouchableOpacity>
             </View>

            {
                count ? 
                    <View style={[styles.counter]} >
                        <Text style = {styles.textInCounter}> {count} </Text>
                    </View>
                : <></>
            }
             
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
        padding: 8,
        
    },
    text: {
        color: 'white',
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        alignSelf: 'center'
    },
    counter: {
        width: 38,
        backgroundColor: 'gray',
        borderRadius: 16,
        marginLeft: 16,
        marginTop: 12,
        height: 40,
        alignItems: 'center',
        padding: 8,
        borderColor: '#FF7A00',
        borderWidth: 2,
    },
    textInCounter: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 16,
        marginTop: 2,
        color: 'white',
        alignSelf: 'center',
    }
}
)

export default Counter;
