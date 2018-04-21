import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Info } from './screenNames';

const backgroundColor = '#e97600';
export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Dropbox';
        let drawerIcon = () => {
            <Image
                source={require('./image/house-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        };
        return {drawerLabel, drawerIcon};
    }

    render() {
        const {containerStyle, contentContainerStyle, textStyle, touchStyle, textTouchStyle} = styles;

        return (
            <View style={containerStyle}>
                <HeaderComponent {...this.props} />
                <View style={contentContainerStyle}>
                    <Text style={styles.textStyle}>This is Dropbox screen</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    contentContainerStyle: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    touchStyle: {
        margin: 20,
        width: 200,
        height: 45,
        backgroundColor: 'darkviolet',
        padding: 10,
        alignItems: 'center'
    },
    textTouchStyle: {
        color: 'white',
        fontSize: 18
    }
}