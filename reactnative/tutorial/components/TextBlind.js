import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = { // key - value
            showText: true
        };
        var taskToDo = () => {
            //this.state = "blabla" // Do not allow, only in constructor
            this.setState(previousState => {
                return { // new state
                    showText: !previousState.showText
                };
            })
        };
        const timeToBlink = 1000;
        setInterval(taskToDo, timeToBlink);
    }

    render() { // after 1s, 'state' changes => render is called
        let textToDisplay = this.state.showText ? this.props.inputText : ' ';
        return (
            <Text>{textToDisplay}</Text>            
        );
    }
}

export default class TextBlink extends Component {
    render() {
        return ( // 'inputText' is a props
            <View>
                <Blink inputText="React Native is good!"></Blink>
                <Blink inputText="Thank you. I'm fine!"></Blink>
            </View>
        );
    }
}