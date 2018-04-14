import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FixedDimension extends Component {
    render() {
        return (
            <View>
                <View style={ {width: 100, height: 100, backgroundColor:'blue'} }></View>
                <View style={ {width: 200, height: 100, backgroundColor:'red'} }></View>
                <View style={ {width: 100, height: 200, backgroundColor:'cyan'} }></View>
            </View>
        );
    }
}