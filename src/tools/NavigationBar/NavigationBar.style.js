// @flow
import {
  StyleSheet,
  Platform,
} from 'react-native';


export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingTop: Platform.OS === 'android' ? 24 : 0,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  leftButton: {
    width: 44,
    height: 44,
    resizeMode: 'center',
  },
  rightButton: {
    width: 44,
    height: 44,
    resizeMode: 'center',
  },
  rightTextButton: {
    fontSize: 14,
    color: '#fff',
    marginRight: 4,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  homeTitle: {
    color: '#fff',
    fontSize: 24,
    paddingTop: 4,
  },
  whiteTitle: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  back: {
    width: 9,
    height: 15,
  },
});
