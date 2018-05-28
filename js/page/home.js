/**
 * Copyright(C), 2018-2019, zhouzhi073859@outlook.com, chengdu, sichuang, China.
 * @Module home
 * @Author zhouzhi
 * @CreateTime 2018/5/20
 * @Description entry file && main js
 * @Version 0.0.2
 * @ClassList [ HomePage ]
 * @FunctionList
 * @History
 *     <author>      <time>      <version >      <desc>
 *     zhouzhi       2018/5/20   0.0.1           init this component
 *     zhouzhi       2018/5/28   0.0.2           add tab view
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    backgroundColor: 'red'
   
    // fontSize: 18,
    // padding: 10
  },
  welcome: {

  	// fontSize: 20,
    // textAlign: 'center',
    // margin: 10
  },
  instructions: {

  	// textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5
  }
});

/**
 * @class HomePage
 * @constructor
 * @desc home page component
 */
export default class HomePage extends Component {
  render() {
  	return (
  	  <View style={styles.container}>
	    <Text style={styles.header}>
	      <Text>
	        关注
	      </Text>
	    </Text>
	    <Text style={styles.welcome}>
	      首页
	    </Text>
	    <Text style={styles.instructions}>
	      这是首页
	    </Text>
      </View>
    );
  }
}
