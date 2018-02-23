import React, { Component } from 'react';
import HomePage from './HomePage';
import GGTimerScene from './Scene/TimerScene';
import GGLimitDoubleClickBtnScene from './Scene/LimitDoubleClickBtnScene';
import KeyBoardScene from './Scene/KeyBoardScene';
import StorageScene from './Scene/StorageScene'
import TypeTabScene from './Scene/TypeTabScene';
import { StackNavigator } from 'react-navigation';
import { useAPIWeaver } from './tools/API/API.js';
import {
  initNetEventListener,
} from './tools/API/NetManager.js';

import {
  registerNavigator,
  unRegisterNavigator,
  InitailRoute,
} from './Route';

initNetEventListener();

// 注册导航
const AppNavigator = StackNavigator({
  HomePage: { screen: HomePage },
  GGTimer: { screen: GGTimerScene },
  GGLimitDoubleClickBtn: { screen: GGLimitDoubleClickBtnScene },
  Storage: { screen: StorageScene },
  keyBoard: { screen: KeyBoardScene },
  TypeTab: { screen: TypeTabScene },
}, {
  initialRouteName: 'HomePage', // 默认显示界面
  navigationOptions: { header: null },
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  onTransitionEnd: (() => {
    const test = AppRouter.getComponentForRouteName('TypeTab');
}),
});

const AppRouter = AppNavigator.router;

class App extends React.Component {
  
  componentDidMount(){
    registerNavigator(this.navigator._navigation);
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