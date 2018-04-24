import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import NavigationStack from './navigationStack';

class AppNavigation extends Component {
    render() {

        const middleware = createReactNavigationReduxMiddleware(
            "root",
            state => state.NavigationReducer
        );
        const addListener = createReduxBoundAddListener("root");

        const { navigationState, dispatch } = this.props;
        return (
            // All the routes defined in AppNavigator will receive these state and dispatch.
            <NavigationStack 
                navigation={addNavigationHelpers({
                    dispatch,
                    state: navigationState,
                    addListener
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.NavigationReducer
    };
};

export default connect(mapStateToProps)(AppNavigation);

