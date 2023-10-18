import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import HomeSvg from '../../img/icons/Home.svg'
import { useNavigation } from '@react-navigation/native';

const GoHome = () => {

    const navigation = useNavigation()

    return (
            <TouchableOpacity onPress={() => { navigation.navigate('chooseZal')}}>
                <View>
                    <HomeSvg/>
                </View>
            </TouchableOpacity>
        );
    }

export default GoHome;
