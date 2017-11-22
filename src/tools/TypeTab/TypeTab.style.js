import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const ScreenW = Dimensions.get('window').width;
const ScreenH = Dimensions.get('window').height;

export default StyleSheet.create({
  flatlist: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  typeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 50,
  },
  underline: {
    height: 4,
    width: '70%',
    position: 'absolute',
    bottom: 0,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomColor: 'rgb(235,235,235)',
    borderBottomWidth: 1,
  }
})