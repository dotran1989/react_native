import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput } from 'react-native';

import { addNewTask } from '../actions';

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }

    render() {
        return (
            <View style={containerStyle}>
                <TextInput
                    style={textInputStyle}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text })
                        }
                    }
                />
                <TouchableHighlight
                    style={{ marginRight: 10 }}
                    underlayColor='blue'
                    onPress={(event) => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                    }}
                >
                    <Image
                        style={{ width: 35, height: 35}}
                        source={require('../icons/icon-add.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 64
    },
    textInputStyle: {
        height: 40,
        width: 200,
        margin: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white'
    }
}