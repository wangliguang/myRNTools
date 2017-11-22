// -@flow
import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import * as img from './img';
import styles from './NavigationBar.style';

type LeftButtonProps = {
  image: ImageSource,
  onPress: Function,
};

const LeftButton = (props: LeftButtonProps) => (
  <TouchableOpacity
    onPress={props.onPress}
  >
    <Image style={styles.leftButton} source={props.image} />
  </TouchableOpacity>
);

type RightButtonProps = {
  image: ImageSource,
  onPress: Function,
};

const RightButton = (props: RightButtonProps) => (
  <TouchableOpacity
    onPress={props.onPress}
  >
    <Image style={styles.rightButton} source={props.image} />
  </TouchableOpacity>
);

type RightTextButtonProps = {
  title: string,
  onPress: Function,
};

const RightTextButton = (props: RightTextButtonProps) => (
  <TouchableOpacity
    style={{ alignItems: 'center', justifyContent: 'center' }}
    onPress={props.onPress}
  >
    <Text style={styles.rightTextButton} > {props.title} </Text>
  </TouchableOpacity>
);

// -----------------------------------------------------------------------------
// BackStyle
// -----------------------------------------------------------------------------
type BackStyleProps = {
  title?: string,
  onBack: Function,
  rightText: string,
  onRight: Function,
  titleColor?: string,
};
const BackStyle = ({
  title = '',
  onBack,
  rightText = '',
  onRight = () => {},
  titleColor = '#000',
}: BackStyleProps) => (
  <NavigationBar
    title={{ title, style: styles.title }}
    leftButton={<LeftButton onPress={onBack} image={img.Back} />}
    rightButton={<RightTextButton onPress={onRight} title={rightText} />}
    tintColor={titleColor}
    containerStyle={styles.container}
    statusBar={{ style: 'light-content' }}
  />
);

// -----------------------------------------------------------------------------
// HomeStyle
// -----------------------------------------------------------------------------
const homeTitle = 'MyRNTools';
type HomeStyleProps = {
  onOpenMenu: Function,
  onOpenInbox: Function,
};
const HomeStyle = ({ onOpenMenu, onOpenInbox }: HomeStyleProps) => (
  <NavigationBar
    title={{ title: homeTitle, style: styles.homeTitle }}
    leftButton={<LeftButton onPress={onOpenMenu} image={img.Home} />}
    rightButton={<RightButton onPress={onOpenInbox} image={img.Inbox} />}
    tintColor="#000"
    containerStyle={styles.container}
    statusBar={{ style: 'light-content' }}
  />
);

// -----------------------------------------------------------------------------
// TextStyle
// -----------------------------------------------------------------------------
const TextStyle = ({
  title = '',
  leftText = '',
  onLeft = () => {},
  rightText = '',
  onRight = () => {},
}: {
  title: string,
  leftText: string,
  onLeft: Function,
  rightText: string,
  onRight: Function,
}) => (
  <NavigationBar
    title={{ title, style: styles.title }}
    leftButton={{ title: leftText, handler: onLeft, tintColor: '#fff' }}
    rightButton={<RightTextButton onPress={onRight} title={rightText} />}
    tintColor="#000"
    containerStyle={styles.container}
    statusBar={{ style: 'light-content' }}
  />
);

// -----------------------------------------------------------------------------
// WhiteStyle
// -----------------------------------------------------------------------------
type WhiteStyleProps = {
  title?: string,
  onBack: Function,
  rightText: string,
  onRight: Function,
  tintColor?: string,
};
const WhiteStyle = ({
  title = '',
  onBack,
  rightText = '',
  onRight = () => {},
  tintColor = '#000',
}: WhiteStyleProps) => (
  <NavigationBar
    title={{ title, style: styles.whiteTitle }}
    leftButton={<LeftButton onPress={onBack} image={img.BackWhite} />}
    rightButton={<RightTextButton onPress={onRight} title={rightText} />}
    tintColor={tintColor}
    containerStyle={styles.container}
    statusBar={{ style: 'default' }}
  />
);

export { BackStyle, HomeStyle, TextStyle, WhiteStyle };
