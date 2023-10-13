import React from "react";
import { View, Text, Image, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import VidSvg from '../chooseZal/Vid.svg'
import ChinaTownSvg from '../chooseZal/ChinaTown.svg'
import Header from '../img/Header.png'
import { SafeAreaView } from "react-native-safe-area-context";
import { styleZal } from "./styleZal";


const ChooseZal = ({navigation}) => {

return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <StatusBar backgroundColor='black' animated={true} />
            <View style={{
                flex: 1,
                paddingTop: StatusBar.currentHeight,
                minHeight: 100,
                backgroundColor: 'black'
            }}>
                <Image style={styleZal.header} source={Header} />
                <Text style={styleZal.chooseText}>
                    Выберите зал
                </Text>
                <View style = {styleZal.pictures}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                        <View style={{marginBottom: 16}}>
                            <VidSvg/>
                        </View>    
                    </TouchableOpacity>
                    <ChinaTownSvg />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      minHeight: 100
    },
    scrollView: {
      backgroundColor: "black",
      minHeight: 100,
    }
  })

export default ChooseZal