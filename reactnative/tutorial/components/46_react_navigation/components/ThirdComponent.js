import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

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
    },
    buttonContainerStyle: {
        padding: 10,
        margin: 20,
        width: 200,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'darkviolet'
    }
}