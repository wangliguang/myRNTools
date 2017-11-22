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

export default class StorageScene extends Component {

  state = {
    count : 0,
  }


  saveData = () => {
    Storage.save('key',this.content);
  }

  getDataData = async () => {
    alert(await Storage.get('key'));
  }

  render() {
    return (
      <View style={{flex: 1,alignItems:'center'}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'Storage'}
        />
        <Button title={"保存数据"} onPress={()=>{
          this.saveData();
        }}/>
        <Button title={"获取数据"} onPress={()=>{
          this.getDataData();
        }}/>
        
        <TextInput 
          style={{width:150,height:55,backgroundColor:'orange'}}
          onChangeText={(text)=>{this.content=text}}
        />
    </View>
    )
  }

}

