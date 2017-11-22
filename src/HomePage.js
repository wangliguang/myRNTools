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

      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});