import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import { ThirdScreen } from './screenNames';

export default class DetailComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let headerTitle = 'Detail';
        let headerStyle = { backgroundColor: 'rgb(226,81,65)', borderBottomColor: 'white' };
        let headerTitleStyle = { color: 'yellow'};
        let headerTintColor = 'white';
        return { headerTitle, headerStyle, headerTitleStyle, headerTintColor };
    };

    render() {
        const { containerStyle, textStyle, buttonContainerStyle, buttonTextStyle } = styles;

        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`)
        let paramsFromMainScreen = this.props.navigation.state.params;

        return (
            <View style={containerStyle}>
                <Text style={styles.textStyle}>This is Detail Screen</Text>
                <Text>Params for Main Screen: </Text>
                <Text>Movies's name: {paramsFromMainScreen.name}</Text>
                <Text>Release year: {paramsFromMainScreen.releaseYear}</Text>
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
        backgroundColor: 'mediumseagreen',
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