import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';
import { Info } from './screenNames';

const backgroundColor = '#0067a7';

export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => {
            <Image
                source={require('./image/house-icon.png')}
                style={styles.imageStyle}
            />
        };

        return { tabBarLabel, tabBarIcon };
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>This is House screen</Text>
                <Button 
                    containerStyle={styles.buttonContainerStyle}
                    style={styles.buttonTextStyle}
                    onPress={() => {
                        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
                        const { navigate } = this.props.navigation;
                        this.props.navigation.navigate(Info);
                    }}
                >
                    Info
                </Button>
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 26,
        height: 26,
        tintColor: backgroundColor
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
    },
}