import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FlexDimension extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 60, backgroundColor:'blue'}}></View>
                <View style={{flex: 20, backgroundColor:'green'}}></View>
                <View style={{flex: 20, backgroundColor:'yellow'}}></View>
            </View>
        );
    }
}