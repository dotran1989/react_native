import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard } from 'react-native';

export default class textInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeText: 'please type your text',
            typePassword: '',
            typeDescription: 'your description'
        };
    }
    
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {typeText: 'keyboard is shown'}
            })
        });
        this.keyboardHideShowListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {typeText: 'keyboard is hide'}
            })
        });
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardHideShowListener.remove();
    }

    render() {
        return (
            <View>
                <TextInput style={{
                    height: 50,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                keyboardType='email-address'
                placeholder='Enter your email'
                placeholderTextColor='red'
                onChangeText={
                    (text) => {
                        // this.state: not allow
                        this.setState(
                            (previousState) => {
                                return {
                                    typeText: text
                                };
                            }
                        );
                    }
                }>
                </TextInput>
                <Text style={{marginLeft: 20}}>{this.state.typeText}</Text>
                <TextInput style={{
                    height: 50,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                keyboardType='default'
                placeholder='Enter your password'
                secureTextEntry={true}
                onChangeText={
                    (text) => {
                        this.setState(
                            (previousState) => {
                                return {
                                    typePassword: text
                                };
                            }
                        )
                    }
                }
                >
                </TextInput>
                <Text style={{marginLeft: 20}}>{this.state.typePassword}</Text>
                <TextInput style={{
                    height: 100,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                multiline={true}
                borderBottomColor='green'
                borderBottomWidth={3}
                borderLeftColor='green'
                borderLeftWidth={3}
                editable={true}
                returnKeyLabel='Go'
                returnKeyType='previous'
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={
                    (text) => {
                        this.setState((previousState) => {
                            return {
                                typeDescription: text
                            };
                        })
                    }
                }
                >
                </TextInput>
                <Text style={{marginLeft: 20}}>{this.state.typeDescription}</Text>
            </View>
        );
    }
}