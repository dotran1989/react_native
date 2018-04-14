/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style= { styles.textStyle }>Hello!</Text>
        <Text style= { styles.secondStyle }>Hello!</Text>
        <Text style= { [styles.textStyle, styles.secondStyle] }>Hello!</Text>
        <Text style= { [styles.secondStyle, styles.textStyle] }>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#28B463',
    borderWidth: 2,
    borderColor: '#1F618D'
  },
  textStyle: {
    margin: 5,
    color: 'white'
  },
  secondStyle: {
    margin: 5,
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 20
  }
});

