import React, { Component } from 'react';
import { View, Text, Image,
    ScrollView,
    Dimensions, 
    TextInput
} from 'react-native';

export default class VerticalScrollView extends Component {

    render() {
        const {textStyle, textInputStyle} = styles;

        let width = Dimensions.get('window').width;

        const imageSource = {
            uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/200px-HONDA_ASIMO.jpg" 
        }

        return(
            <ScrollView
                keyboardDismissMode='on-drag'
                maximumZoomScale={2}
                minimumZoomScale={0.2}
                contentContainerStyle={{paddingLeft: 20}}
            >
                <Image
                    source={imageSource}
                    style={{width, height: 300 }}>
                </Image>
                <Text
                    style={textStyle}>
                    This is a text
                </Text>
                <TextInput
                    style={textInputStyle}
                    placeholder='Enter your text'>

                </TextInput>
                <Image
                    source={imageSource}
                    style={{width: width, height: 300, marginTop: 20}}>
                </Image>
                <Image
                    source={imageSource}
                    style={{width: width, height: 300, marginTop: 20}}>
                </Image>
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green',
        height: 60
    },
    textInputStyle: {
        padding: 10,
        margin: 10,
        borderWidth: 1
    }
}