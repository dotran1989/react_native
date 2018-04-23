import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListDate from '../17_flatList/data/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                style={styles.modalStyle}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert("Modal closed");
                }}
            >
            <Text>New food information</Text>
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
    }
}