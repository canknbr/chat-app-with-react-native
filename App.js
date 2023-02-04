import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <ChatsScreen /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
