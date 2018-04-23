import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';

import { horizontalStatus } from '../23_horizontal_flatlist/data/horizontalFlatListData';
import { horizontalFlatListData } from '../23_horizontal_flatlist/data/horizontalFlatListData';

import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View style={styles.flatListItemStyle}>
                <Text style={styles.hourStyle}>
                    {this.props.item.hour}
                </Text>
                <Text style={styles.degreeStyle}>
                    {this.props.item.degrees} oF
                </Text>
            </View>
        )
    }
}

export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ height: 150 }}>
                    <FlatList style={styles.flatListStyle}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                                </HorizontalFlatListItem>
                            )
                        }}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    flatListStyle: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    flatListItemStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 4,
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    hourStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    degreeStyle: {
        fontSize: 16,
        color: 'white',
        margin: 10
    }
}