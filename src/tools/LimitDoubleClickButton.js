import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

type GGLimitDoubleClickButtonProps = {
  onPress: Function,
  style: Object,
  children: Object,
  touchableType: string,
  limitTime?: number,
};

export default class GGLimitDoubleClickButton extends React.Component {

  props: GGLimitDoubleClickButtonProps;

  constructor(props){
    super(props);
    this.lastClickTime = 0;
  }

  onItemPress = () => {
    let tmpTime = 300;//延迟时间
    if (this.props.limitTime) {
      tmpTime = this.props.limitTime;
    }
    const currentTime = new Date().getTime();
    if (currentTime - this.lastClickTime > tmpTime) {
      this.lastClickTime = currentTime;
      this.props.onPress();
      return;
    }
  }

  render() {
    const touchableType = this.props.touchableType;

    if (touchableType === 'TouchableOpacity') {
      return (
        <TouchableOpacity
          {...this.props}
          onPress={() => this.onItemPress()}
          style={this.props.style}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    } else if (touchableType === 'TouchableWithoutFeedback') {
      return (
        <TouchableWithoutFeedback
          {...this.props}
          onPress={() => this.onItemPress()}
          style={this.props.style}
        >
          {this.props.children}
        </TouchableWithoutFeedback>
      );
    } else if (!touchableType || touchableType === 'TouchableHighlight') {
      return (
        <TouchableHighlight
          {...this.props}
          onPress={() => this.onItemPress()}
          style={this.props.style}
        >
          {this.props.children}
        </TouchableHighlight>
      );
    }
    return null;
  }
}