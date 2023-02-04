import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 3,
  },
  name: {
    color: '#343a40',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  time: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
});
