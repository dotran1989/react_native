import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class MainComponent extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>This is Third Screen</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
}