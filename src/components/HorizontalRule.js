import React from 'react';
import {View} from 'react-native';

export const DarkRule = () => {
    return(
        <View style = {{height: 3, width: '100%', backgroundColor: 'black'}}></View>
    )
}

export const LightRule = () => {
    return(
        <View style = {{height: 1, width: '100%', backgroundColor: '#DCDCDC'}}></View>
    )
}