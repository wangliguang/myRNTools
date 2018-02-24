import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { useAPIWeaver } from './tools/API/API.js';
import {
  initNetEventListener,
} from './tools/API/NetManager.js';

import {
  registerNavigator,
  unRegisterNavigator,
  InitailRoute,
  getRouteMap,
} from './Route';

initNetEventListener();

//   HomePage: { screen: HomePage, navigationOptions: ({navigation}) => StackOptions({navigation}) },
//   GGTimer: { screen: GGTimerScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
//   GGLimitDoubleClickBtn: { screen: GGLimitDoubleClickBtnScene, navigationOptions: ({navigation}) => StackOptions({navigation}) },
//   Storage: { screen: StorageScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
//   keyBoard: { screen: KeyBoardScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
//   TypeTab: { screen: TypeTabScene, navigationOptions: ({navigation}) => StackOptions({navigation})},

//   FirstScene: { screen: FirstScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
//   ScendScene: { screen: ScendScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
//   ThirdScene: { screen: ThirdScene, navigationOptions: ({navigation}) => StackOptions({navigation})},

// StackOptions = (navigator) => {
//   registerNavigator(navigator);
// }

// 注册导航
const AppNavigator = StackNavigator(
  getRouteMap(),
  {
  initialRouteName: InitailRoute.routeName, // 默认显示界面
  navigationOptions: { header: null },
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  onTransitionEnd: (() => {
    if (global.scenes) {
      const currentScene = global.scenes[global.scenes.length - 1];
      if (currentScene.componentWillAppear) {
        currentScene.componentWillAppear();
      }
    }
  }), 
});

class App extends React.Component {
  
  componentDidMount(){
    registerNavigator(this.navigator);
  }

  componentWillUnmount() {
    unRegisterNavigator();
  }

  render() {
    return (
      <AppNavigator
        ref={nav => { this.navigator = nav; }}
      />
    );
  }
}
export default App;