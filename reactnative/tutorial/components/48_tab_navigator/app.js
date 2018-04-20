import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import HomeComponent from './HomeComponent';
import CloudComponent from './CloudComponent';
import InfoComponent from './InfoComponent';
import { Home, Cloud, Info } from './screenNames';

let routeConfigs = {
    Home: {
        screen: HomeComponent
    },
    Info: {
        screen: InfoComponent
    },
    Cloud: {
        screen: CloudComponent
    }
};

let tabNavigatorConfig = {
    tabBarPosition: 'bottom',
    showIcon: true,
    animationEnabled: true,
    swipeEnable: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10
        },
        showLabel: true
    },
    order: [Cloud, Info, Home]
};

const RootTab = TabNavigator(routeConfigs, tabNavigatorConfig);

export default class App extends Component {
    render() {
        return (
            <RootTab />
        );
    };
};
