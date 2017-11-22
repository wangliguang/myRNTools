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
  repairItem: {
    alignSelf: 'stretch',
    marginLeft: 12,
    marginRight: 12,
    paddingVertical: 15,
    borderBottomWidth: 2 / Dimensions.get('window').scale,
    borderBottomColor: 'rgb(225, 225, 225)',
  },
  repairDate: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'rgb(136, 136, 136)',
    fontSize: 16,
  },
  repairType: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 6,
    color: 'rgb(32, 32, 32)',
    fontSize: 19,
  },
  repairUserNote: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 6,
    color: 'rgb(32, 32, 32)',
    fontSize: 17,
  },
  repairItem: {
    alignSelf: 'stretch',
    marginLeft: 12,
    marginRight: 12,
    paddingVertical: 15,
    borderBottomWidth: 2 / Dimensions.get('window').scale,
    borderBottomColor: 'rgb(225, 225, 225)',
  },
  repairDate: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'rgb(136, 136, 136)',
    fontSize: 16,
  },
  repairType: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 6,
    color: 'rgb(32, 32, 32)',
    fontSize: 19,
  },
  repairUserNote: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 6,
    color: 'rgb(32, 32, 32)',
    fontSize: 17,
  },
})