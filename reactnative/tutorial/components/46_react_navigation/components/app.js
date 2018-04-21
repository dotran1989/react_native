import React, { Component } from 'react';
import MainComponent from './MainComponent';
import DetailComponent from './DetailComponent';
import ThirdComponent from './ThirdComponent';
import { MainScreen, DetailScreen, ThirdScreen } from './screenNames';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator({
    MainScreen: {
        screen: MainComponent,
    },
    DetailScreen: {
        screen: DetailComponent,
    },
    ThirdScreen: {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: 'Third'
        },
    }
    },
    {
        initialRouteName: 'MainScreen'
 });

 export default class App extends Component {
     render() {
        return <RootStack />
     }
 }