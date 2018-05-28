/**
 * Copyright(C), 2018-2019, zhouzhi073859@outlook.com, chengdu, sichuang, China.
 * @Module APP
 * @Author zhouzhi
 * @CreateTime 2018/5/1
 * @Description entry file && main js
 * @Version 0.0.2
 * @ClassList [ App ]
 * @FunctionList
 *   [ componentDidMount.App, _renderTab.App ]
 * @History
 *     <author>      <time>      <version >      <desc>
 *     zhouzhi       2018/5/1    0.0.1           init this component and add function [ componentDidMount.App ]
 *     zhouzhi       2018/5/20   0.0.2           add function [ _renderTab.App ]
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './page/home';
import SearchPage from './page/search';
import MessagePage from './page/message';
import MinePage from './page/mine';

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
  image: {
  	height: 26,
	  width: 26
  }
});

/**
 * @class App
 * @constructor
 *   state: <object>
 *     selectedTab: <string> which tab is selected
 * @desc entry component
 */
export default class App extends Component {
  constructor(props) {
  	super(props);
  	const selectedTab = this.props.selectedTab ? this.props.selectedTab : 'tb_home';
  	this.state = {
  	  selectedTab: selectedTab
    };
  }
  
  /**
   * @method componentDidMount
   * @for App
   * @params
   * @returns void
   * @desc hide splash screen while app component did mount
   * @throws
   * @example
   */
  componentDidMount() {
  	// do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  
  /**
   * @method _renderTab
   * @for App
   * @params
   *   Page: <ReactComponent>
   *   selectedTab: <string> which tab is taped
   *   title: <string> what info show on tab
   *   renderIcon: <string> icon of tab
   * @returns void
   * @desc render a tab navigator
   * @throws
   * @example _renderTab(MinePage, 'tb_mine', '我的', require('../assert/icon/ic_my.png'))
   */
  _renderTab(Page, selectedTab, title, renderIcon) {
  	return (
  		<TabNavigator.Item
			  selected={this.state.selectedTab === selectedTab}
			  title={title}
			  renderIcon={() => {
			  	return <Image style={styles.image} source={renderIcon}/>;
			  }}
			  renderSelectedIcon={() => {
			  	return <Image style={[ styles.image ]} source={renderIcon}/>;
			  }}
			  onPress={() => {
			  	this.setState({selectedTab: selectedTab});
			  }}>
			  <Page {...this.props}/>
		  </TabNavigator.Item>
	  );
  }
  render() {
    return (
      <TabNavigator>
        {this._renderTab(HomePage, 'tb_home', '首页', require('../assert/icon/ic_my.png'))}
        {this._renderTab(SearchPage, 'tb_search', '发现', require('../assert/icon/ic_my.png'))}
        {this._renderTab(MessagePage, 'tb_message', '消息', require('../assert/icon/ic_my.png'))}
        {this._renderTab(MinePage, 'tb_mine', '我的', require('../assert/icon/ic_my.png'))}
      </TabNavigator>
    );
  }
}
