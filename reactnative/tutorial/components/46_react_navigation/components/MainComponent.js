import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from './screenNames';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

export default class MainComponent extends Component {
    render() {
        const { containerStyle, textStyle, buttonContainerStyle, buttonTextStyle } = styles;

        return (
            <View style={containerStyle}>
                <Text style={textStyle}>This is Main Screen</Text>
                <Button
                    containerStyle={buttonContainerStyle}
                    style={buttonTextStyle}
                    onPress={() => {
                        this.props.navigate(DetailScreen);
                    }}
                >
                Navigate to Detail
                </Button>
            </View>
        );
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    buttonContainerStyle: {
        padding: 10,
        margin: 20,
        width: 200,
        height: 45,
        borderRadius: 10,
        backgroundColor: 'darkviolet'
    },
    buttonTextStyle: {
        fontSize: 18,
        color: 'white'
    }
}