import React from "react";
import { View, SafeAreaView, ScrollView, Text, StatusBar, TouchableOpacity } from "react-native";
import HomeSvg from '../../pages/img/icons/Home.svg'
import SearchSvg from '../../pages/img/icons/Home.svg'
import SunSvg from '../../pages/img/icons/Home.svg'

const Footer = () => {
    return (
            <SafeAreaView style = {styles.AreaView}>
                <View style={{
                    flex: 1
                }}>
                    <ScrollView style={styles.ScrollView}>
                        <View style = {styles.container}>
                            <View style={[styles.icons, ]}>
                                <View>
                                    <TouchableOpacity style={{ }} onPress={() => { navigation.navigate('chooseZal')}}>
                                        <HomeSvg/>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <SearchSvg/>
                                </View>
                                <View>
                                    <SunSvg/>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>    
    )
}

const styles = {
    container: {
        // backgroundColor: "black",
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
        // backgroundColor: "black",
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