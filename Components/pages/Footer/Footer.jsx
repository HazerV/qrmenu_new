import React, {useContext} from "react";
import { View, SafeAreaView, ScrollView, Text, StatusBar, TouchableOpacity } from "react-native";
import HomeSvg from '../../pages/img/icons/Home.svg'
import SearchSvg from '../../pages/img/icons/Search.svg'
import SunSvg from '../../pages/img/icons/Sun.svg'
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../../Theme/ThemeSwitcher";

const Footer = () => {

    const navigation = useNavigation()
    
    const {theme, setTheme} = useContext(ThemeContext)

    const styles = {
        container: {
            minHeight: 100,
            display: "flex",
            flex: 1,
            width: '100%',
            height: '100%',
            paddingBottom: 100,
            backgroundColor: theme == "light" ? 'white' : 'black',
        },
        AreaView: {
            flex: 1,
            paddingTop: -50,
            minHeight: 100
        },
        ScrollView: {
            minHeight: 30,
        },
        icons: {
            display: 'flex', 
            flexDirection: 'row', 
            columnGap: 8, 
            marginLeft: 16,
            position: 'absolute', left: 0, right: 0, bottom: 0
        }
    }

    return (
        <ScrollView style={styles.ScrollView}>
            <SafeAreaView style = {styles.AreaView}>
                <View>
                    <View style = {styles.container}>
                        <View style={styles.icons}>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate('chooseZal')}}>
                                    <HomeSvg/> 
                                </TouchableOpacity>
                            </View>
                            <View>
                                <SearchSvg/>
                            </View>
                            <TouchableOpacity onPress={() => theme == 'light' ? setTheme('dark') : setTheme('light')}> 
                                <View>
                                    <SunSvg/>
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