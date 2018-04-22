import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import flatListData from './data/flatListData';

class FlastListItem extends Component {
    render() {
        return (
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
        );
    }
}

export default class BasicFlatList extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        // console.log(`item: ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlastListItem item={item} index={index}>

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
