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

export default class SceneScene extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'SceneScene'}
        />

        <Button
          onPress={() => {
            jump('ThirdScene');
          }}
          title={'goNextScene'}
        />

      </View>
    )
  }
}

