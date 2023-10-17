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

    return (
            <SafeAreaView style = {styles.AreaView}>
                <View style={{ flex: 1 }}>
                        <ScrollView style={styles.ScrollView}>
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
                        </ScrollView>
                </View>
            </SafeAreaView>
            
    )
}

const styles = {
    container: {
        minHeight: 100,
        display: "flex",
        flex: 1,
        width: '100%',
        height: '100%',
        paddingBottom: 100
    },
    AreaView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        minHeight: 100
    },
    ScrollView: {
        minHeight: 100,
    },
    icons: {
        display: 'flex', 
        flexDirection: 'row', 
        columnGap: 8, 
        marginLeft: 16,
        position: 'absolute', left: 0, right: 0, bottom: 0
    }
}

export default Footer