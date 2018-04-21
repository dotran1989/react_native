import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeComponent from './HomeComponent';
import DropboxComponent from './DropboxComponent';
import InfoComponent from './InfoComponent';
import { Home, Dropbox, Info } from './screenNames';
import { Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');

let routerConfig = {
    Home: {
        path: '/',
        screen: HomeComponent
    },
    Info: {
        path: '/info',
        screen: InfoComponent
    }, Dropbox: {
        screen: DropboxComponent
    }
}

let drawerNavigatorConfig = {
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'right',
    drawerBackgroundColor: 'orange',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor: 'red'
    },
    order: [Info, Dropbox, Home]
}

const DrawerBar = DrawerNavigator(routerConfig, drawerNavigatorConfig);

export default class App extends Component {
    render () {
        return <DrawerBar />
    }
}