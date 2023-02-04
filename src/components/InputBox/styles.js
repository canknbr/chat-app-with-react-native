import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  send: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
