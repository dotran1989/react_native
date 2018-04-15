import React, { Component } from 'react';
import { Alert, View, Button, Keyboard } from 'react-native';

export default class button extends Component {
    _onPressButton = () => {
        Alert.alert("You pressed the button!");
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this._onPressButton}
                    title='This is a button'
                    color='green'
                >
                </Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};