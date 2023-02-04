import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <ChatsScreen /> */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
export default App;
