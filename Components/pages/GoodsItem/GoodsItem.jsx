import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styleGoods from './styleGoods'
import Counter from './Counter'

const GoodsItem = ({ name, imagePath }) => {

    return ( 

        <View style={[styleGoods.container, {
        }]}>
            <View style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <View style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between'
                }}>
                    <TouchableOpacity/>
                        <Text style={styleGoods.text}>
                            {name}
                        </Text>
                    <TouchableOpacity/>
                    <Counter/>
                </View>
                <Image 
                    style={{  
                        width: 144,
                        height: 144,
                        borderTopRightRadius: 16,
                        borderBottomRightRadius: 16
                    }}
                    source={{
                        uri: imagePath
                    }} 
                />
            </View>
        </View> 

    );
}

export default GoodsItem