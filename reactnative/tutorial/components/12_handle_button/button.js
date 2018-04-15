import React, { Component } from 'react';
import { Alert, View, Keyboard } from 'react-native';
import Button from 'react-native-button';

export default class button extends Component {
    _onPressButton = () => {
        Alert.alert("You pressed the button!");
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Button onPress={this._onPressButton}
                    title='This is a button'
                    color='green'
                >
                </Button> */}
                <Button style={styles.buttonStyle}
                    onPress={this._onPressButton}>
                    This is a button
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
    },
    buttonStyle: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 20
    }
};