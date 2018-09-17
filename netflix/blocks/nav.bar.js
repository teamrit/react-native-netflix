import React from 'react';
import {Image, StyleSheet, TouchableOpacity,TouchableNativeFeedback, View} from 'react-native';
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
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Image source={require('../images/netflix-logo.png')} style={{width: 50, height: 40}} />
            </TouchableOpacity>
            {routes.map((route, indexOfRoute) => {
                if ((index === 0 || indexOfRoute === index) && route.routeName !== 'Home')
                return (<TouchableOpacity
                    onPress={() => {
                        this.navigate(route, index, indexOfRoute);
                    }}
                    style={styles.tab}
                    key={route.routeName}
                >
                    <Text>{getRouteName(route.routeName)}</Text>
                </TouchableOpacity>)
            })}
        </SafeAreaView>
        );
    }
}