// @flow
import { NetInfo } from 'react-native';

let isNetStateConnected = true;

const isNetConnected = () => (isNetStateConnected);
const setNetConnected = (isConnected: boolean) => {
  isNetStateConnected = isConnected;
};

/**
 * 检查网络链接状态
 */
const checkNetworkState = () => {
  NetInfo.isConnected.fetch().done(setNetConnected);
};

/**
 * 移除网络状态变化监听
 */
const removeNetEventListener = () => {
  NetInfo.isConnected.removeEventListener('change', setNetConnected);
};

/**
 * 添加网络状态变化监听
 */
const addNetEventListener = () => {
  NetInfo.isConnected.addEventListener('change', setNetConnected);
};

const initNetEventListener = () => {
  checkNetworkState();
  addNetEventListener();
};

export {
  isNetConnected,
  initNetEventListener,
  removeNetEventListener,
};
