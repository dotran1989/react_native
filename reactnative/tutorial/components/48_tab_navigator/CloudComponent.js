import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image
} from 'react-native';

const backgroundColor = '#0067a7';

export default class CloudComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Cloud';
        let tabBarIcon = () => {
            <Image
                source={require('./image/cloud-icon.png')}
                style={styles.imageStyle}
            />
        };

        return { tabBarLabel, tabBarIcon };
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>This is Cloud screen</Text>
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'green',
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
    }
}