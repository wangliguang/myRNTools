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
const Navs = StackNavigator({
  HomePage: { screen: HomePage, navigationOptions: ({navigation}) => StackOptions({navigation}) },
  GGTimer: { screen: GGTimerScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
  GGLimitDoubleClickBtn: { screen: GGLimitDoubleClickBtnScene, navigationOptions: ({navigation}) => StackOptions({navigation}) },
  Storage: { screen: StorageScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
  keyBoard: { screen: KeyBoardScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
  
  TypeTab: { screen: TypeTabScene, navigationOptions: ({navigation}) => StackOptions({navigation})},
}, {
  initialRouteName: 'HomePage', // 默认显示界面
  navigationOptions: { header: null },
  mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
});
StackOptions = (navigator) => {
  registerNavigator(navigator.navigation);
}

export default Navs;