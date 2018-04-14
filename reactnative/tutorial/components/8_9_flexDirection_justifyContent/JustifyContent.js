import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FlexExample extends Component {
    render(){
        return (
            <View style={{
                    backgroundColor:'aquamarine',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                <Text style={{width: 50, height: 50, backgroundColor:'red'}}></Text>
                <Text style={{width: 50, height: 50, backgroundColor:'blue'}}></Text>
                <Text style={{width: 50, height: 50, backgroundColor:'green'}}></Text>
            </View>
        );
    }
}