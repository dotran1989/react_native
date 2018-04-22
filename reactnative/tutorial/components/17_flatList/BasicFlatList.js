import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import flatListData from './data/flatListData';

class FlastListItem extends Component {
    render() {
        return (
            <View style={{
                    flex: 1,
                    backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
            }}>
                <Text style={styles.flexItemStyle}>{this.props.item.name}</Text>
                <Text style={styles.flexItemStyle}>{this.props.item.foodDescription}</Text>
            </View>
        );
    }
}

export default class BasicFlatList extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 20}}>
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
