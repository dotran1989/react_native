import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableOpacity,
    RefreshControl, TextInput } from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        //alert("item:" + this.props.taskName);
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <TouchableOpacity style={styles.touchableStyle}
                    onPress={() => {
                        
                    }}>
                    <Text style={{ margin: 20, color: this.props.completed == true ? 'darkgreen' : 'black' }}>
                        {this.props.taskName}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = {
    touchableStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
}