import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

export default class Screen2 extends Component {
    static navigationOptions = {
        title: "Screen 2"
    }

    render() {
        return (
            <View>
            <Text>{this.props.navigation.state.params.name}</Text>
        </View>
        );
    }
}