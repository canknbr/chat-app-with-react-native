import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,

    marginVertical: 5,
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
