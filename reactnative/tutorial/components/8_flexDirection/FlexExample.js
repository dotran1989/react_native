import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FlexExample extends Component {
    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
                <Text style={{width: 50, height: 50, backgroundColor:'red', marginBottom: 5}}></Text>
                <Text style={{width: 50, height: 50, backgroundColor:'blue', marginBottom: 5}}></Text>
                <Text style={{width: 50, height: 50, backgroundColor:'green'}}></Text>
            </View>
        );
    }
}