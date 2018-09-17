import React from 'react';
import {Text} from "react-native";
import {whiteText} from "../utils/styles";

export const WhiteText = (props) => (
    <Text style={[whiteText, props.style]}>{props.children}</Text>
);