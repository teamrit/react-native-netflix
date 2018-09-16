import {Button, ScrollView, StatusBar, Image} from "react-native";
import {SafeAreaView} from "react-navigation";
import React from "react";
import {WhiteText as SampleText} from "./white.text";

export const NavScreen = ({ navigation, banner }) => (
    <ScrollView style={{flex: 1, backgroundColor: "#bada55"}}>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
            {console.log()}
            <SampleText>{banner}</SampleText>
        </SafeAreaView>
        <StatusBar barStyle="default" />
    </ScrollView>
);