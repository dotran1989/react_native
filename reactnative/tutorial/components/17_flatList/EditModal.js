import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../17_flatList/data/flatListData';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: ''
        }
    }

    showEditModal = (editingFood, flastListItem) => {
        console.log(`editingFood = ${JSON.stringify(editingFood)}`);
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flastListItem
        });
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
                value={this.state.foodName}
                onChangeText={(text) => this.setState({ foodName: text })}
            />
            <TextInput style={styles.textInputModalStyle}
                placeholder="Enter new food's description"
                value={this.state.foodDescription}
                onChangeText={(text) => this.setState({ foodDescription: text })}
            />
            <Button
                style={styles.buttonStyle}
                containerStyle={styles.containerBtnStyle}
                onPress={() => {
                    if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                        alert("You must enter food's name and description")
                        return;
                    }
                    // update existing food
                    var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        // console.log('this.state.key: ' + this.state.key);
                        
                    if (foundIndex < 0)
                        return;
                    console.log('foundIndex: ' + foundIndex);
                    flatListData[foundIndex].name = this.state.foodName;
                    flatListData[foundIndex].foodDescription = this.state.foodDescription;
                    // refresh
                    this.state.flastListItem.refreshFlatListItem();

                    this.refs.myModal.close();
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