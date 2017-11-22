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
  Button,
  TextInput,
} from 'react-native';

import {
  goBack,
} from '../Route';
import Storage from '../tools/Storage'
import * as NavigationBar from '../tools/NavigationBar';

export default class KeyBoardScene extends Component {

  render() {
    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'keyBoard遮挡问题'}
        />

        <Text>
          iOS:直接使用cocopods在iOS工程中导入IQKeyboardManager即可，更多功能看一下该库的readme
          https://github.com/hackiftekhar/IQKeyboardManager
        </Text>

        <Text style={{marginTop:20}}>
          android:将androidManifest文件的activity中的 android:windowSoftInputMode="">修改为adjustPan，如果没有改配置，自己添加即可 
        </Text>
        
        <TextInput 
          style={{width:150,marginTop:300,height:55,backgroundColor:'orange'}}
          onChangeText={(text)=>{this.content=text}}
        />

        <TextInput 
          style={{width:150,marginTop:50,height:55,backgroundColor:'orange'}}
          onChangeText={(text)=>{this.content=text}}
        />

    </View>
    )
  }

}

