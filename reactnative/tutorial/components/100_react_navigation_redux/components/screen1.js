import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { incrementAction, decrementAction } from '../actions/actionCreator';

class Screen1 extends Component {
    static navigationOptions = {
        title: "Screen 1"
    };

    _navigate = () => {
        // action to navigate screen 2
        const navigateToScreen2 = NavigationActions.navigate({
            routeName: "screen2",
            params: { name: "CuongDNQ" }
        });
        // dispatch action
        this.props.navigation.dispatch(navigateToScreen2);
    }

    render() {

        const { containerStyle, btnNavigateStyle, touchStyle, textStyle } = styles;

        const { counterCount, incrementAction, decrementAction } = this.props;

        return (
            <View style={containerStyle}>
                <Text>{counterCount}</Text>
                <View style={{ height: 100, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={touchStyle}
                        onPress={() => incrementAction()}>
                        <Text style={textStyle}>
                            INCREMENT
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={touchStyle}
                        onPress={() => decrementAction()}
                    >
                        <Text style={textStyle}>
                            DECREMENT
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={btnNavigateStyle}
                    onPress={this._navigate}
                >
                    <Text>Screen 2</Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'yellowgreen',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4286f4'
    },
    textStyle: {
        textDecorationLine: 'underline',
        fontWeight: '600'
    },
    btnNavigateStyle: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: "indigo"
    }
};

const mapStateToProps = state => {
    console.log(`screen 1 - state: + ${JSON.stringify(state)}`);
    return {
        counterCount: state.CounterReducer.counter
    };
};

const mapDispatchToProps = {
    incrementAction,
    decrementAction
};

const Screen1View = connect(mapStateToProps, mapDispatchToProps)(Screen1);

export default Screen1View;

// navigateToscreen2 will look like this:
      /*
       {
        "type": "Navigation/NAVIGATE",
        "routeName": "screen2",
        "params":{
            "name":"CuongDNQ"
        }
       }
      */

// State of counter
/* {  
    "CounterReducer":{  
       "counter":0
    },
    "NavigationReducer":{  
       "key":"StackRouterRoot",
       "isTransitioning":false,
       "index":0,
       "routes":[  
          {  
             "key":"id-1524712410961-0",
             "routeName":"screen1"
          }
       ]
    }
 } */