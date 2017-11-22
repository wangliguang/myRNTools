/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  AppState
} from 'react-native';

type GGTImerProps = {
  interval: number,
  onCountChange: Function,
}

export default class GGTimer extends Component {

    constructor(props) {
      super(props);
      //进入后台的时间
      this.recodTime = 0;
      //计数用的
      this.count = 0;

      //是否清除定时器
      this.isClearTimer = false;
    }
      
    beginTimer = () => {
      this.isClearTimer = false;
      this.timer = setInterval(()=>{
        this.count++;
        this.props.onCountChange(this.count);
      },this.props.interval);
    }

    clearTimer(){
      this.count = 0;
      this.recodTime = 0;
      this.isClearTimer = true;
      this.props.onCountChange(0);
      this.timer && clearInterval(this.timer);
    }

    handleAppState = (nextAppState) => {
      if (nextAppState === 'inactive') {
        this.recodTime = new Date();
        if(this.isClearTimer !== true){
          this.timer && clearInterval(this.timer);
        }else{
          this.clearTimer();
        }
      } else if (nextAppState === 'active') {      
        if (this.isClearTimer !== true) {
          this.turnsOnTimer();
        }
      }
    };

    turnsOnTimer(){
      const now = new Date();
      const diff = Math.round((now - this.recodTime) / 1000);  
      this.count = this.count+diff;
      this.beginTimer();
    };

    render() {
      return <View />
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppState);
    }

    componentWillUnmount() {
        this.clearTimer();
        AppState.removeEventListener('change', this.handleAppState);
    }
}