import React, { Component } from 'react';
import { AppRegistry, FlatList,
    Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput } from 'react-native';
import TaskItemComponent from '../components/TaskItemComponent';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';

class TaskListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            itemIdClicked: null
        });
    }

    refreshFlatList(itemId) {
        console.log(`refreshFlatList:  ${itemId}`);
        this.setState((prevState) => {
            itemIdClicked: itemId
        });
    }

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
        console.log(`tasks: ${JSON.stringify(this.props.tasks)}`);
        return (
            <FlatList
                data={this.props.tasks}
                renderItem={({ item, index }) => {
                    return (
                        <TaskItemComponent
                            id={item.taskId}
                            taskName={item.taskName}
                            parentFlatList={this}
                            completed={item.completed}
                        >
                        </TaskItemComponent>
                    );
                }}
                keyExtractor={(item, index) => item.taskId.toString()}
                >
            </FlatList>
            // <List>
            //     <FlatList
            //         data={this.props.tasks}
            //         renderItem={this.renderItem}
            //         keyExtractor={this.keyExtractor}
            //     />
            // </List>
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

/* tasks:[  
    {  
       "taskId":0,
       "taskName":"aaa",
       "completed":false
    },
    {  
       "taskId":1,
       "taskName":"bbb",
       "completed":false
    }
 ] */