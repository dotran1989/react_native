import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput } from 'react-native';

export default class TaskListComponent extends Component {
    render() {
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={({ item, index }) => {
                    return (
                        alert('abc')
                    );
                }}
                >
            </FlatList>
        )
    }
};