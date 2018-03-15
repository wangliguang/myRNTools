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

  renderItem = () => {
    const tempArray = [1,2,3,5,6,7,9,];
    return tempArray.map((item) => {
      return (
        <Text style={{ borderRadius: 8}}>{`item${item}`}</Text>
      )
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'AndroidOverflow,hidden值不生效'}
        />

      <View style={{ width: 150, height: 150, backgroundColor: 'orange', padding: 20}}>
       <View style={{backgroundColor:'white' ,flexWrap:'nowrap',overflow:'hidden',flexDirection: 'row'}}>
         {this.renderItem()}
       </View>
     </View>
    </View>
    )
  }

}

