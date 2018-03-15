import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import {
  jump,
  resetRouteStack,
} from './Route.js';

import * as NavigationBar from './tools/NavigationBar';
import {API} from './tools/API/API';


const onKeyboardShow = (event) => {
  alert(event.endCoordinates.height);
}

export default class Root extends Component {

  goGGTimer = () => {
    jump("GGTimer");
  }

  fetchInfo() {
    API.fetchInfo({
      
    }).then((result)=>{
       alert(JSON.stringify(result));
    })
  }

  componentWillAppear = () => {
    alert('-');
  }

  goStorage() {
    jump('Storage');
  };

  goKeyBoard() {
    jump('keyBoard');
  }
      
  gotLimitDoubleClickBtn = () => {
    jump('GGLimitDoubleClickBtn');
  }

  goTypeTab = () => {
    jump('TypeTab');
  }

  goRouteScene = () => {
    jump('FirstScene');
  }

  goAndroidflow = () => {
    jump('AndroidOverflow');
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavigationBar.HomeStyle/>
        <Button
          onPress={this.goGGTimer}
          title={'GGTimer'}
        />
        
        <Button
          onPress={this.gotLimitDoubleClickBtn}
          title={'LimitDoubleClickBtn'}
        />

        <Button
          onPress={this.fetchInfo}
          title={'fetchInfo'}
        />

        <Button
          onPress={this.goStorage}
          title={'Storage搭配async/awit使用同步方式获取异步数据'}
        />

        <Button
          onPress={this.goKeyBoard}
          title={'键盘遮挡问题'}
        />

        <Button
          onPress={this.goTypeTab}
          title={'TypeTab'}
        /> 

        <Button
          onPress={this.goRouteScene}
          title={'RouteScene'}
        /> 

        <Button
         onPress={this.goAndroidflow}
         title={'android下overflow的hidden失效'}
        />

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});