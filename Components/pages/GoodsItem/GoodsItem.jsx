import { Text, View, Image } from 'react-native'
import React from 'react'
import styleGoods from './styleGoods'
import Counter from './Counter'

const GoodsItem = ({ name, imagePath }) => {

    return ( 

        <View style={styleGoods.container}>
            <View style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <View>
                    <Text style={{
                        fontFamily: 'Gilroy-Regular',
                        fontSize: 14,
                        color: 'white',
                        maxHeight: 400,
                        maxWidth: 230,
                        marginLeft: 16,
                        marginTop: 16,
                        marginRight: 16
                    }}>
                        {name}
                    </Text>

                    <Counter/>

                    
                    {/* Counter here!!! */}

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