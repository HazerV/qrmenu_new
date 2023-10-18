import React, {useContext} from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import SearchSvg from '../img/icons/Search.svg'
import GoHome from "./goHome/GoHome";
import ThemeSwitcher from "./themeSwitcher/Themeswitcher";
import CartFoot from "../Cart/CartFoot/CartFoot";
import { ThemeContext } from "../Theme/ThemeSwitcher";
import { useNavigation } from "@react-navigation/native";


const Footer = () => {

    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            minHeight: 100,
            display: "flex",
            flex: 1,
            width: '100%',
            height: '100%',
        },
        AreaView: {
            flex: 1,
            minHeight: 100,
        },
        ScrollView: {
            backgroundColor: theme == 'light' ? 'white' : 'black',
            minHeight: 30,
            
        },
        icons: {
            display: 'flex', 
            flexDirection: 'row', 
            columnGap: 8, 
            marginLeft: 16,
            position: 'absolute', left: 0, right: 0, bottom: 0,
        }
    }

    return (
        <ScrollView style={styles.ScrollView}>
            <SafeAreaView style = {styles.AreaView}>
                <View>
                    <View style = {styles.container}>
                        <View style={[styles.icons, {marginTop: 16}]}>
                            <View>
                                <GoHome />
                            </View>
                            <View>
                                <SearchSvg/>
                            </View>
                            <View>
                                <ThemeSwitcher />
                            </View>
                            <TouchableOpacity onPress={() => { navigation.navigate('Cart')}}>
                                <View style={{
                                    paddingLeft: 130
                                }}>
                                    <CartFoot />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
            
    )


    
}



export default Footer