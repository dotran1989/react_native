import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DetailComponent extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>This is Detail Screen</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'mediumseagreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
}