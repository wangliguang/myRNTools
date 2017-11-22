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
import GGLimitDoubleClickButton from '../tools/LimitDoubleClickButton';

import * as NavigationBar from '../tools/NavigationBar';

import {
  goBack,
} from '../Route';

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
        <GGLimitDoubleClickButton
          limitTime={3000}  
          style={{width: 100,height: 45, alignItems: 'center',justifyContent: 'center',backgroundColor: 'orange', borderRadius: 30}}
          underlayColor={'pink'}
          touchableType={'TouchableOpacity'}
          onPress={()=>{
            this.setState({
              count:this.state.count+1
            })
          }}
        >
           <Text style={{backgroundColor:'transparent'}}>提交</Text>
        </GGLimitDoubleClickButton>

        <Text>{this.state.count}</Text>
    </View>
    )
  }

}

