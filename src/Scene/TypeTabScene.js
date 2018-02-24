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

import TypeTab from '../tools/TypeTab';
import {
  goBack,
} from '../Route';

import style from './TypeTabScene.style';

import * as NavigationBar from '../tools/NavigationBar';

export default class TypeTabScene extends Component {

  componentWillAppear = () => {
    alert('TypeTabScene')
  }

  renderItem1(item) {
    const time = item.item.date;
    const markContent = item.item.markContent;
    const useName = item.item.useName;
    return (
      <View key={item.index} style={style.repairItem}>
        <Text style={style.repairDate}>{time}</Text>
        <Text style={style.repairType}>{markContent}</Text>
        <Text style={style.userNoteContent}>{useName}</Text>
      </View>
    );
  }

  renderItem2(item) {
    const time = item.item.date;
    const brokenPart = item.item.repairType;
    const notes = item.item.notes;
    return (
      <View key={item.index} style={style.repairItem}>
        <Text style={style.repairDate}>{time}</Text>
        <Text style={style.repairType}>{brokenPart}</Text>
        {notes !== undefined ? (
          <Text style={style.userNote}>
            {'user_note'}
            <Text style={style.userNoteContent}>{notes}</Text>
          </Text>
        ) : (null)}
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar.BackStyle
          onBack={()=>{goBack()}}
          title={'TypeTab'}
        />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TypeTab
            titleArray={['标题1', '标题2']}
            dataArray={[ 
              [{date: '2017-11-21 15:58:35', markContent: '饿了么', useName: 'GG'}], 
              [{date: '2017-11-11 15:58:35', brokenPart: '天气', notes: '天气不错'}], 
            ]}
            itemArray={[this.renderItem1, this.renderItem2]}
            selctedColor={'rgb(27,175,139)'}
            unselectColor={'rgb(192,192,192)'}
            textStyle={{fontSize: 17}}
          />
        </View>
      </View>
    )
  }
}

