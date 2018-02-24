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

import {
  goBack,
  jump,
} from '../../Route';

import * as NavigationBar from '../../tools/NavigationBar';

export default class FirstScene extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'FirstScene'}
        />
        
        <Button
          onPress={() => {
            jump('ScendScene');
          }}
          title={'goNextScene'}
        />

      </View>
    )
  }
}

