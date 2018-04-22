import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert } from 'react-native';
import flatListData from './data/flatListData';
import Swipeout from 'react-native-swipeout';

class FlastListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null // save your key of deleting object
        };
    }

    render() {
        // confing swipe settings
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {

            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        // show alert
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    // delete item in array
                                    flatListData.splice(this.props.index, 1);
                                    // Refresh Flatlist
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true }
                        );
                    },
                    Text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };

        return (
            // swipe settings
            <Swipeout {...swipeSettings}>
                <View styles={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                            backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{ width: 100, height: 100, margin: 5}}
                        >

                        </Image>
                        <View>
                            <Text style={styles.flexItemStyle}>{this.props.item.name}</Text>
                            <Text style={styles.flexItemStyle}>{this.props.item.foodDescription}</Text>
                        </View>
                    </View>
                    <View style={{
                            height: 1,
                            backgroundColor: 'white'
                    }}>
                    </View>
                </View>
            </Swipeout>
        );
    }
}

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null
        });
    }

    // refresh by changing a state. When state change, automatically re-render Component FLastList.
    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deleteKey
            };
        });
    };
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        // console.log(`item: ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlastListItem item={item} index={index} parentFlatList={this}>

                            </FlastListItem>
                        );
                    }}>
                </FlatList>
            </View>
        );
    }
}

const styles = {
    flexItemStyle: {
        color: 'white',
        fontSize: 18,
        padding: 10
    }
}
