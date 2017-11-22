/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import GGTimer from '../tools/Timer';

import {
  goBack,
} from '../Route';

import * as NavigationBar from '../tools/NavigationBar';

export default class GGTimerScene extends Component {

  state = {
    count : 0,
  }

  countChange = (count) => {
    this.setState({count:count})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'定时器'}
        />
        <Button title={"开启定时器"} onPress={()=>{
          this.ggTimer.beginTimer();
        }}/>
        <Button title={"清除定时器"} onPress={()=>{
          this.ggTimer.clearTimer();
        }}/>
        <Text>{this.state.count}</Text>
        <GGTimer
          ref={e=>this.ggTimer=e}
          interval={1000}
          onCountChange={this.countChange}
        />
    </View>
    )
  }

}

