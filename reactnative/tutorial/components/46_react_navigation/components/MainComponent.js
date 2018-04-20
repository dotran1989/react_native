import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from './screenNames';
import { Text, View } from 'react-native';
import Button from 'react-native-button';

export default class MainComponent extends Component {
    constructor(...props) {
        super(...props)
    }

    render() {
        const { containerStyle, textStyle, buttonContainerStyle, buttonTextStyle } = styles;
        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 1977
        };

        return (
            <View style={containerStyle}>
                <Text style={textStyle}>This is Main Screen</Text>
                <Button
                    containerStyle={buttonContainerStyle}
                    style={buttonTextStyle}
                    onPress={() => {
                        this.props.navigation.navigate(DetailScreen, dataSendToDetail);
                    }}
                >
                Navigate to Detail
                </Button>
                <Button
                    containerStyle={buttonContainerStyle}
                    style={buttonTextStyle}
                    onPress={() => {
                        this.props.navigation.navigate(ThirdScreen);
                    }}
                >
                Navigate to Third
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