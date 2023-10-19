import React, {useContext} from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import SearchSvgB from '../img/icons/Search.svg'
import GoHome from "./goHome/GoHome";
import ThemeSwitcher from "./themeSwitcher/Themeswitcher";
import CartFoot from "../Cart/CartFoot/CartFoot";
import { ThemeContext } from "../Theme/ThemeSwitcher";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import SearchSvgW from '../Footer/Search.svg'


const Footer = () => {

    const navigation = useNavigation()
    const {theme} = useContext(ThemeContext)

    const styles = {
        container: {
            minHeight: 100,
            display: "flex",
            width: Dimensions.get('window').width
        },
        AreaView: {
            // flex: 1,
            minHeight: 100,
        },
        ScrollView: {
            // backgroundColor: theme == 'light' ? 'white' : 'black',
            minHeight: 30,
            // flex: 1
        },
        icons: {
            display: 'flex', 
            flexDirection: 'row', 
            columnGap: 8, 
            marginLeft: 16,
            position: 'absolute', left: 0, right: 0, bottom: 0,
        }
    }

    const Search = () => {
        if (theme == 'dark') {
            return (
                <View>
                    <SearchSvgB />
                </View>
                ) 
        } else {
            return (
                <View style={{
                    width: 48,
                    height: 48,
                    borderColor: 'GrayLight',
                    borderRadius: 2
                }}>
                    <View>
                        <SearchSvgW />
                    </View>
                </View>
            )
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
                                <Search />
                            </View>
                            <View>
                                <ThemeSwitcher />
                            </View>
                            <TouchableOpacity onPress={() => { navigation.navigate('Cart')}}>
                                <View style={{
                                    paddingLeft: 110
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