import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'stretch',
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
  },
  row: {
    flexDirection: 'row',

    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
