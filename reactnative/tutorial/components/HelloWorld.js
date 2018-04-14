import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorld extends Component {
    render() {
        let hello = `Hello 123! My name is Quoc Cuong ^^ KKK`;
        return (
            <Text>{ hello }</Text>
        )
    }
}