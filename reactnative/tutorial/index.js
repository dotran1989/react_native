import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import HelloWorld from './components/HelloWorld';
// import App from './App';
// import Robot from './components/Robot'
// import MultipleGreeting from './components/MultipleGreeting';
// import TextBlind from './components/TextBlind'
// import FixedDimension from './components/7_dimensions/FixedDimension';
// import FlexDimension from './components/7_dimensions/FlexDimension';
// import FlexExample from './components/8_9_flexDirection_justifyContent/FlexExample';
// import JustifyContent from './components/8_9_flexDirection_justifyContent/JustifyContent';
// import textInput from './components/10_11_textInput/textInput';
// import button from './components/12_handle_button/button';
// import touchable from './components/13_touchable/touchable'
// import VerticalScrollView from './components/14_scrollview/VerticalScrollView'

// ----36 - Redux---
// import TaskManagerComponent from './components/36_redux/components/TaskManagerComponent';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import allReducers from './components/36_redux/reducers';

// let store = createStore(allReducers);

// const App = () => {
//     return (
//         <Provider store={store}>
//             <TaskManagerComponent />
//         </Provider>
//     );
    
// };

// -------

// ---- React Navigation -------
import App from './components/46_react_navigation/components/app';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('tutorial', () => App);
