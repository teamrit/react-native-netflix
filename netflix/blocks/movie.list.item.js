import React from 'react';
import {Image, View} from "react-native";
import {WhiteText} from "./white.text";
import PropTypes from 'prop-types';

export const MovieListItem = ({item}) => (
    <View style={{width: 100, height: 120}}>
        <Image source="https://via.placeholder.com/150x350.png" style={{width: 150, height: 350}}/>
        <WhiteText>{item.key}</WhiteText>
    </View>
);

MovieListItem.propTypes = {
    item: PropTypes.shape({
        key: PropTypes.string.isRequired
    }).isRequired
};
