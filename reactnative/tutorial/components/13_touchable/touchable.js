import React, { Component } from 'react';
import { Alert, View, Text, Image,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback, 
    TextInput} from 'react-native';

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
                    // onShowUnderlay={() => {
                    //     alert("onShowUnderlay button");
                    // }}
                    >
                    <View style={styles.textContainer}>
                        {/* <Image
                            style={styles.imageStyle}
                            source={require('../images/touchableHightlightButton.png')}
                            >
                        </Image> */}
                        <Text style={styles.textStyle}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    useForeground={true}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity
                    onPress={this._onPressButton}
                    activeOpacity={0.7}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    // onPress={this._onPressButton}
                    // onPressIn={() => {
                    //     alert("onPressIn");
                    // }}
                    // onPressOut={() => {
                    //     alert("onPressOut");
                    // }}
                    disabled={false}
                    onLongPress={() => {
                        alert("onLongPress")
                    }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: 'green',
        margin: 20
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