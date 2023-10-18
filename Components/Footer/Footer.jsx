import React, {useContext} from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import SearchSvg from '../img/icons/Search.svg'
import GoHome from "./goHome/GoHome";
import ThemeSwitcher from "./themeSwitcher/Themeswitcher";

const Footer = () => {

    const styles = {
        container: {
            minHeight: 100,
            display: "flex",
            flex: 1,
            width: '100%',
            height: '100%',
            paddingBottom: 100,
        },
        AreaView: {
            flex: 1,
            paddingTop: -100,
            minHeight: 100,
        },
        ScrollView: {
            minHeight: 30
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
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
            
    )


    
}



export default Footer