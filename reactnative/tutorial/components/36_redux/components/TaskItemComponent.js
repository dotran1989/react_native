import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableOpacity,
    RefreshControl, TextInput } from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';
class TaskItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            numberOfRefresh: 0
        };
    };

    refreshListItem() {
        this.setState(prevState => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            }
        });
    }

    render() {
        console.log(`render - item: + ${this.props.taskName} + ' ' + ${this.props.completed}`);
        return (
            <View style={{ flex: 1, backgroundColor: this.props.completed == true ? 'green' : 'red' }}>
                <TouchableOpacity
                    onPress={() => {
                        // alert(`item: ` + this.props.taskName);
                        this.props.toggleTask(this.props.id)
                        // this.props.parentFlatList.refreshFlatList(this.props.id)
                        // this.refreshListItem()
                    }}
                >
                    <Text style={{ margin: 20, color: this.props.completed == true ? 'white' : 'black' }}>
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

export default connect(null, actions)(TaskItemComponent);