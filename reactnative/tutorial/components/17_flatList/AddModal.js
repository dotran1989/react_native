import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../17_flatList/data/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={styles.modalStyle}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");rrr
                }}
            >
            <Text style={styles.textModalStyle}>New food information</Text>
            <TextInput style={styles.textInputModalStyle}
                placeholder="Enter new food's name"
                value={this.state.newFoodName}
                onChangeText={(text) => this.setState({ newFoodName: text })}
            />
            <TextInput style={styles.textInputModalStyle}
                placeholder="Enter new food's description"
                value={this.state.newFoodDescription}
                onChangeText={(text) => this.setState({ newFoodDescription: text })}
            />
            <Button
                style={styles.buttonStyle}
                containerStyle={styles.containerBtnStyle}
                onPress={() => {
                    if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                        alert("You must enter food's name and description")
                        return;
                    }
                    const newKey = this.generateKey(24);
                    const newFood = {
                        key: newKey,
                        name: this.state.newFoodName,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                        foodDescription: this.state.newFoodDescription
                    };
                    flatListData.push(newFood);
                    // refresh
                    this.props.parentFlatList.refreshFlatList(newKey);
                    this.refs.myModal.close();
                    this.setState({ newFoodName: '', newFoodDescription: '' })
                }}
            >
                Save
            </Button>
            </Modal>
        );
    }
};

const styles = {
    modalStyle: {
        justifyContent: 'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 280
    },
    textModalStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    },
    textInputModalStyle: {
        height: 40,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
    },
    containerBtnStyle: {
        padding: 8,
        marginLeft: 70,
        marginRight: 70,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen'
    },
    buttonStyle: {
        fontSize: 18,
        color: 'white'
    }
}