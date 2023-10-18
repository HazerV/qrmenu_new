import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import { ThemeContext } from '../../Theme/ThemeSwitcher';
import GoodsItem from '../GoodsItem/GoodsItem';


const Cart = () => {

    const {theme} = useContext(ThemeContext)


    const styles = {
        container: {
            backgroundColor: theme == 'light' ? 'white' : 'black'
        }
    }

        return (
            <View style={styles.container}>
                <Text>edsawe</Text>
            </View>
        );
}

export default Cart;
