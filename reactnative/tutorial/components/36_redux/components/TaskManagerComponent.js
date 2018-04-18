import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput } from 'react-native';

// import AddContainer from '../containers/AddContainer';
import TaskListComponent from '../components/TaskListComponent';
import AddComponent from './AddComponent';

export default class TaskManagerComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, margin: Platform.OS === 'ios' ? 34 : 0}}>
                <AddComponent />
                <TaskListComponent />
            </View>
        );
    }
};