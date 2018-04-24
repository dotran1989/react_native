import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

export default class Screen1 extends Component {
    static navigationOptions = {
        title: "Screen 1"
    };

    _navigate = () => {
        // action to navigate screen 2
        const navigateToScreen2 = NavigationActions.navigate({
            routeName: "screen2",
            params: { name: "CuongDNQ" }
        });
        // dispatch action
        this.props.navigation.dispatch(navigateToScreen2);
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={this._navigate}
                >
                    <Text>Screen 2</Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}

const styles = {
    btnStyle: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: "indigo"
    }
}

// navigateToscreen2 will look like this:
      /*
       {
        "type": "Navigation/NAVIGATE",
        "routeName": "screen2",
        "params":{
            "name":"CuongDNQ"
        }
       }
      */