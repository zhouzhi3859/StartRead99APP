/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default class SearchPage extends Component {
  render() {
    return (
	  <View style={styles.container}>
	    <Text style={styles.welcome}>
		  发现
	    </Text>
	    <Text style={styles.instructions}>
		  这是发现
	    </Text>
	  </View>
    );
  }
}
