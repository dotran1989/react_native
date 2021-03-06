import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput } from 'react-native';

import * as actions from '../actions';
import { connect } from 'react-redux';

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TextInput
                    ref={ input => {this.textInput = input}}
                    style={styles.textInputStyle}
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
                        // Call click event => use "Container"
                        this.props.addNewTask(this.state.newTaskName);
                        this.textInput.clear();
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

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(mapStateToProps, actions)(AddComponent);