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
  Text
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { Button } from 'antd-mobile';

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
      <ScrollableTabView
        style={{marginTop: 20 }}
        initialPage={0}
        renderTabBar={() => {
          return <ScrollableTabBar />;
        }}><Button type="primary" disabled>primary disabled</Button>
        <Text tabLabel='Tab #1'></Text>
        <Text tabLabel='Tab #2 word word'>favorite</Text>
        <Text tabLabel='Tab #3 word word word'>project</Text>
        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
        <Text tabLabel='Tab #5'>project</Text>
      </ScrollableTabView>
    );
  }
}
