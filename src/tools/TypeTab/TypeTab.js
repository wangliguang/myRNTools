import React from 'react';

import {
  View,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import style from './TypeTab.style';

const ScreenW = Dimensions.get('window').width;
const ScreenH = Dimensions.get('window').height;

type TypeTabProps = {
  titleArray: Array<String>,
  dataArray: Array,
  itemArray: Array,
  selctedColor: string,
  unselectColor: string,
  textStyle:? object, 
}

export default class TypeTab extends React.Component {

  props: TypeTabProps;

  state = {
    selectedType: 0,
  }

  renderTypeBtn = () => {
    const tempArray = [];
    const titleArray = this.props.titleArray;
    for (let i = 0; i < titleArray.length; i += 1) {
      tempArray.push(
        <TouchableOpacity
          key={i}
          activeOpacity={1}
          style={style.typeBtn}
          onPress={ () => this.selectType(i)}
        >
          <Text style={[
            {
              color: i === this.state.selectedType ? this.props.selctedColor : this.props.unselectColor,
            },
            this.props.textStyle,
          ]}>{titleArray[i]}</Text>
          <View style={[
            {
              backgroundColor: i === this.state.selectedType ? this.props.selctedColor : 'transparent',
            },
            style.underline,
          ]}/>
        </TouchableOpacity>
      )
    }
    return tempArray;
  }

  selectType = (index) => {
    this.setState({ selectedType: index });
    this.scrollView.scrollResponderScrollTo({x:index*Dimensions.get('window').width, y:0, animated:true});
  }

  renderFlatList = () => {
    var renderArray = [];
    for (let i = 0; i < this.props.dataArray.length; i += 1 ) {
      renderArray.push(
        <FlatList
          data={this.props.dataArray[i]}
          style={[style.flatlist, { backgroundColor: 'transparent' }]}
          renderItem={ item => { 
            const func = this.props.itemArray[i];
            return func(item);
          }}
        />
      )
    }
    return renderArray;
  }

  render() {
    return (
      <View style={{ height: 250, width: ScreenW, backgroundColor: 'white'}}>
        <View style={style.bottom}>
          {this.renderTypeBtn()}
        </View>
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={e => this.scrollView = e}
            style={{ width: ScreenW, height: 200 }}
          >
            {this.renderFlatList()}
          </ScrollView>
        </View>
      </View>
    )
  }
}