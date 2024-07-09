import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput1: {
    backgroundColor: 'gray',
    width: width - 80,
    padding: 10,
  },
  textinput2: {
    backgroundColor: 'gray',
    width: width - 70,
    padding: 10,
    marginTop: 40,
  },
  storeData: {
    marginTop: 40,
  },
});

export default styles;
