import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Button from 'react-native-button';

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.headerStyle}>
                <TouchableHighlight style={{ marginLeft: 20 }}
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('DrawerOpen');
                    }}
                >
                    <Image
                        style={{ width: 32, height: 32 }}
                        source={require('./image/menu-icon.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    headerStyle: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
}