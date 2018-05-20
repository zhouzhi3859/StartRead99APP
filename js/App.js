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
  View,
  Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './page/home';
import MinePage from './page/mine';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu'
});

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
  },
	image: {
		height: 26,
		width: 26,
	}
});

export default class App extends Component {
	constructor(props) {
		super(props);
		let selectedTab = this.props.selectedTab ? this.props.selectedTab : 'tb_home';
		this.state = {
			selectedTab: selectedTab,
		}
	}
	componentDidMount() {
		// do stuff while splash screen is shown
		// After having done stuff (such as async tasks) hide the splash screen
		SplashScreen.hide();
	}
	_renderTab(Page, selectedTab, title, renderIcon) {
		return (
			<TabNavigator.Item
				selected={this.state.selectedTab === selectedTab}
				title={title}
				renderIcon={() => <Image style={styles.image}
				                         source={renderIcon}/>}
				renderSelectedIcon={() =><Image style={[styles.image]}
				                                source={renderIcon}/>}
				onPress={() => this.setState({selectedTab: selectedTab})}>
				<Page {...this.props}/>
			</TabNavigator.Item>
		)
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello! Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
	      <TabNavigator>
		      {this._renderTab(HomePage, 'tb_home', '首页', require('../assert/icon/ic_my.png'))}
		      {this._renderTab(MinePage, 'tb_mine', '我的', require('../assert/icon/ic_my.png'))}
	      </TabNavigator>
      </View>
    );
  }
}
