import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component { // private component
    render() {
        let hello = `Hello ${this.props.name}`;
        return (
            <Text>{hello}</Text>
        );
    }
}

export default class MultipleGreeting extends Component { // public component
    render() {
        return (
            <View>
                <Greeting name="CuongDNQ"></Greeting>
                <Greeting name="AnhDNQ"></Greeting>
            </View>
        );
    }
}