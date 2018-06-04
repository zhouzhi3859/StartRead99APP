/**
 * Copyright(C), 2018-2019, zhouzhi073859@outlook.com, chengdu, sichuang, China.
 * @Module home
 * @Author zhouzhi
 * @CreateTime 2018/5/20
 * @Description entry file && main js
 * @Version 0.0.3
 * @ClassList [ HomePage ]
 * @FunctionList
 * @History
 *     <author>      <time>      <version >      <desc>
 *     zhouzhi       2018/5/20   0.0.1           init this module
 *     zhouzhi       2018/5/28   0.0.2           add tab view
 *     zhouzhi       2018/6/4    0.0.3           add component [ recmd, serial, special ]
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import  Recmd from './recmd';
import  Serial from './serial';
import  Special from './special';
import { Button } from 'antd-mobile';

const styles = StyleSheet.create({
	tabBarUnderline: {
    height: 0
  },
  tabBar: {
	  width: 20,
    backgroundColor: 'black',
    textAlignVertical: 'center'
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
 * @desc home page
 */
export default class HomePage extends Component {
  render() {
  	return (
      <ScrollableTabView
        initialPage={ 0 }
        locked={ true }
        tabBarUnderlineStyle={ styles.tabBarUnderline }
        tabBarActiveTextColor='#20a0ff'
        renderTabBar={() => {
          return <ScrollableTabBar tabStyle={{ backgroundColor: 'red', width: 70 }} style={{ flex: 0 }} />;
        }}>
        <Recmd tabLabel='推荐' />
        <Serial tabLabel='连载' />
        <Special tabLabel='专题' />
      </ScrollableTabView>
    );
  }
}
