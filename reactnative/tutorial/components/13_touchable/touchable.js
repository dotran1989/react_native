import React, { Component } from 'react';
import { Alert, View, Text, Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback } from 'react-native';

export default class touchable extends Component {
    _onPressButton() {
        alert("You press button!")
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor='red'
                    onShowUnderlay={() => {
                        alert("onShowUnderlay button");
                    }}>
                    <View style={styles.textContainer}>
                        {/* <Image
                            style={styles.imageStyle}
                            source={require('../images/touchableHightlightButton.png')}
                            >
                        </Image> */}
                        <Text style={styles.textStyle}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        backgroundColor: 'green'
    },
    textStyle: {
        color: 'white',
        padding: 20,
        fontSize: 18
    },
    imageStyle: {
        width: 100,
        height: 40
    }
}