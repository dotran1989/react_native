import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#964f8e';
export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Info';
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
                    <Text style={textStyle}>
                        This is Info screen
                    </Text>
                    <TouchableHighlight style={touchStyle}
                        onPress={() => 
                            this.props.navigation.goBack()
                        }
                    >
                        <Text style={textTouchStyle}>Back to Home</Text>
                    </TouchableHighlight>
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