import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './reducers';

import AppNavigation from './navigation';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(AppReducer)}>
                <AppNavigation />
            </Provider>
        );
    }
};