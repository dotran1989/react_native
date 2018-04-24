import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert, Platform, TouchableOpacity } from 'react-native';

import { horizontalStatus } from '../23_horizontal_flatlist/data/horizontalFlatListData';
import { horizontalFlatListData } from '../23_horizontal_flatlist/data/horizontalFlatListData';

import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View style={styles.flatListItemStyle}>
                <TouchableOpacity
                    onPress={() => {
                        alert(`You pressed: ${this.props.item.hour}`)
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}
                >
                </TouchableOpacity>
                <Text style={styles.hourStyle}>
                    {this.props.item.hour}
                </Text>
                <Icon name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={30}
                    color='white' />
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
                <View style={styles.backgroudImageStyle}>
                    <Image
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                        source={require('./images/weather.jpg')}
                    >
                    </Image>
                </View>
                <Text style={styles.textWeatherStyle}>
                    Weather Forecast
                </Text>
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
                        keyExtractor={( item, index ) => item.hour}
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
    },
    textWeatherStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'transparent',
        margin: 10
    },
    backgroudImageStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
}