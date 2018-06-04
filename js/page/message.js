/**
 * Copyright(C), 2018-2019, zhouzhi073859@outlook.com, chengdu, sichuang, China.
 * @Module home
 * @Author zhouzhi
 * @CreateTime 2018/5/20
 * @Description entry file && main js
 * @Version 0.0.1
 * @ClassList [ MessagePage ]
 * @FunctionList
 * @History
 *     <author>      <time>      <version >      <desc>
 *     zhouzhi       2018/5/20   0.0.1           init this component
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

/**
 * @class MessagePage
 * @constructor
 * @desc message page
 */
export default class MessagePage extends Component {
  render() {
    return (
	  <View style={styles.container}>
	    <Text style={styles.welcome}>
		  消息
	    </Text>
	    <Text style={styles.instructions}>
		  这是消息
	    </Text>
	  </View>
    );
  }
}
