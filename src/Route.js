import { NavigationActions } from 'react-navigation'
/* *****************Container****************** */

import HomePage from './HomePage';
import GGTimerScene from './Scene/TimerScene';
import GGLimitDoubleClickBtnScene from './Scene/LimitDoubleClickBtnScene';
import KeyBoardScene from './Scene/KeyBoardScene';
import StorageScene from './Scene/StorageScene'
import TypeTabScene from './Scene/TypeTabScene';
import AndroidOverflow from './Scene/AndroidOverflow';

import FirstScene from './Scene/RouteScene/FirstScene';
import ScendScene from './Scene/RouteScene/ScendScene';
import ThirdScene from './Scene/RouteScene/ThirdScene';

import HocNavigation from './HocNavigation';

const routeMap = {};

routeMap.HomePage = { 
  screen: HocNavigation(HomePage),
};

routeMap.GGTimer = { 
  screen: GGTimerScene,
};

routeMap.GGLimitDoubleClickBtn = { 
  screen: GGLimitDoubleClickBtnScene,
};

routeMap.Storage = { 
  screen: StorageScene,
};

routeMap.keyBoard = { 
  screen: KeyBoardScene,
};

routeMap.TypeTab = { 
  screen: TypeTabScene,
};

routeMap.FirstScene = {
  screen: FirstScene,
};

routeMap.ScendScene = {
  screen: ScendScene,
};

routeMap.ThirdScene = {
  screen: ThirdScene,
};

routeMap.AndroidOverflow = {
  screen: AndroidOverflow,
}

/* *****************导航器配置****************** */
//全局唯一的导航栏
let navigator = null;

//注册导航器
export function registerNavigator(tempNavigator) {
  if (navigator) {
    return;
  }   
  navigator = tempNavigator;
}

//移除导航器
export function unRegisterNavigator() {
  if (!navigator) {
    return;
  }
  navigator = null;
}

// 获取全局路由表
export function getRouteMap() {
  return routeMap;
}

export const InitailRoute = {
  routeName: 'HomePage',
};

/* *****************路由跳转****************** */
export const jump = (name, params) => {
  navigator._navigation.push(name, params );
};

export const goBack = () => {
  navigator._navigation.pop();
};

export const popN = (n: number) => {  
  const routes = navigator.state.nav.routes;
  console.log(navigator);
  navigator._navigation.goBack(routes[n+1].key);
};

export const popToRoot = () => {
  navigator._navigation.popToTop();
};

export const resetRouteStack = (name) => {
  resetTo(name);
};

export const resetTo = (name, params?) => {
  const { dispatch } = navigator;
  dispatch(NavigationActions.reset({
    index: 0,
    actions: [ NavigationActions.navigate({ routeName: name, params }), ],
  }))
};

