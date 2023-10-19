import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Counter from './Counter'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'

const GoodsItem = ({name, imagePath}) => {

    return ( 

        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.view2}>
                    <TouchableOpacity />
                        <Text style={styles.text}>
                            {name}
                        </Text>
                    <TouchableOpacity/>
                    <Counter/>
                </View> 
                    <View>
                        <Image style={styles.image} source={{ uri: imagePath }} />
                    </View>
            </View>
        </View> 

    );
}

const styles = {
    view1: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    view2: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    image: {  
        width: 144,
        height: 144,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    },
    text: {
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        color: 'white',
        maxHeight: 400,
        maxWidth: 230,
        marginLeft: 16,
        marginTop: 16,
        marginRight: 16,
        width: '80%',
    },
    container: {
        width: '100%',
        backgroundColor: '#222',
        borderRadius: 16,
        minHeight: 144,
        marginBottom: 16,
        borderColor: 'gray',
        borderWidth: 2,
        width: '90%',
    }
}


export default GoodsItem