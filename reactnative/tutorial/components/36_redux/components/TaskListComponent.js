import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput } from 'react-native';
import TaskItemComponent from '../components/TaskItemComponent';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';

class TaskListComponent extends Component {

    keyExtractor = (item) => item.taskName;

    renderItem = ({item}) => {
        return (
            <ListItem
                title={item.taskName}                
            />
        )
    }

    render() {
        // alert("tasks: " + (this.props.tasks instanceof Array) ? 'true' : 'false');
        alert(`tasks: ${JSON.stringify(this.props.tasks)}`);
        return (
            // <FlatList
            //     data={this.props.tasks}
            //     renderItem={({ item, index }) => {
            //         <TaskItemComponent
            //             id={item.taskId}
            //             taskName={item.taskName}
            //         />
            //     }}
            //     keyExtractor={(item, index) => item.taskName}
            //     >
            // </FlatList>
            <List>
                <FlatList
                    data={this.props.tasks}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </List>
        );
    }
};

const mapStateToProps = (state) => {
    // alert(`state send to task list = ${JSON.stringify(state.taskReducer)}`);
    return {
        tasks: state.taskReducer
    };
}

export default connect(mapStateToProps)(TaskListComponent);