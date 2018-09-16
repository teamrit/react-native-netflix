import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from "react-navigation";
import {dark} from "../utils/styles";
import {WhiteText as Text} from "./white.text";
import {getRouteName} from "../index";

export const styles = StyleSheet.create({
    dark : dark,
    tabContainer: {
        flexDirection: 'row',
        height: 48,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderRadius: 4,
    },
});

export class CustomTabBar extends React.Component {

    navigate = (route, index, indexOfRoute) => {
        const {navigation} = this.props;
        navigation.navigate(route.routeName);
    };

    render() {
    const {navigation} = this.props;
    const { routes, index } = navigation.state;
    return (
        <SafeAreaView style={[styles.tabContainer, dark]}>
            <View style={{position: "absolute", margin: 0 , left: 0, right: 0, top: 0, bottom: 0, zIndex: 100, backgroundColor: "rgba(0,0,0,0.5)"
                , width: 500, height: 250
            }}>
                <Text>BGHIUASHDsuh</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Image source={require('../images/netflix-logo.png')} style={{width: 50, height: 40}} />
            </TouchableOpacity>
            {routes.map((route, indexOfRoute) => {
                console.log(indexOfRoute, index, route.routeName);
                if ((index === 0 || indexOfRoute === index) && route.routeName !== 'Home')
                return (<TouchableOpacity
                    onPress={() => {
                        this.navigate(route, index, indexOfRoute);
                    }}
                    style={styles.tab}
                    key={route.routeName}
                >
                    <Text style={{fontSize: 30}}>{getRouteName(route.routeName)}</Text>
                </TouchableOpacity>)
            })}
        </SafeAreaView>
        );
    }
}