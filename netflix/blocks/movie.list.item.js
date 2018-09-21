import React from 'react';
import {Image, View} from "react-native";
import PropTypes from 'prop-types';

export const MovieListItem = (props) => {
    const {large} = props;
    return (<View style={{width: large ? 200 : 120, height: large ? 333: 200, borderWidth: 2, borderColor: "#2a2a2a", marginRight: 5}}>
        <Image source={require("../images/13rw.jpg")} style={{width: 150, height: 350}}/>
    </View>)
};

MovieListItem.propTypes = {
    item: PropTypes.shape({
        key: PropTypes.string.isRequired
    }).isRequired
};
