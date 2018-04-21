import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import HeaderComponent from './HeaderComponent';
import { Info } from './screenNames';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Home';
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
                        This is Home screen
                    </Text>
                    <TouchableHighlight style={touchStyle}
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate(Info);
                        }}
                    >
                        <Text style={textTouchStyle}>Navigate to Info</Text>
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