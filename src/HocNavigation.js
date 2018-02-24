import React from 'react';
import {NavigationEventSubscription} from "react-navigation";

const HocNavigation = (WrappedComponent: React.DOM) => class extends React.Component{

  constructor(props) {
    super(props);
  }

  _s0: NavigationEventSubscription;
  _s1: NavigationEventSubscription;
  _s2: NavigationEventSubscription;
  _s3: NavigationEventSubscription;
  screen: React.Component;

  componentDidMount = () => {
    this._s0 = this.props.navigation.addListener('willFocus', this._onWF);
    this._s1 = this.props.navigation.addListener('didFocus', this._onDF);
    this._s2 = this.props.navigation.addListener('willBlur', this._onWB);
    this._s3 = this.props.navigation.addListener('didBlur', this._onDB);
    console.log(this.refs);
  }

  componentWillUnmount = () => {
    this._s0.remove();
    this._s1.remove();
    this._s2.remove();
    this._s3.remove();
  }

  _onWF = a => {
    console.log('_willFocus HomeScreen', a);
  };
  _onDF = a => {
    console.log('_didFocus HomeScreen', a);
    if (this.screen && this.screen.componentWillAppear) {
      this.screen.componentWillAppear();
    }
  };
  _onWB = a => {
    console.log('_willBlur HomeScreen', a);
  };
  _onDB = a => {
    console.log('_didBlur HomeScreen', a);
  };

  render () {
    return (
      <WrappedComponent {...this.props} ref={ref => {
        this.screen = ref
      }}/>
    )
  }
}

export default HocNavigation;