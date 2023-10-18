import React, { useContext } from "react";
import { View, Text, Image, StatusBar, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import VidSvg from '../chooseZal/Vid.svg'
import ChinaTownSvg from '../chooseZal/ChinaTown.svg'
import { SafeAreaView } from "react-native-safe-area-context";
import { styleZal } from "./styleZal";
import HeaderBlack from "../../Header/HeaderBlack.svg";
import { ThemeContext } from "../../Theme/ThemeSwitcher";


const ChooseZal = ({navigation}) => {

const {theme} = useContext(ThemeContext)

const styles = {
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      minHeight: 100,
      backgroundColor: theme == 'light' ? 'white' : 'black'
    },
    scrollView: {
      backgroundColor: 'black' ,
      minHeight: 100,
    }
  }

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
                    <View style = {{
                        alignItems: 'center',
                        marginTop: -48
                        }}>
                        <HeaderBlack />
                    </View>
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


export default ChooseZal