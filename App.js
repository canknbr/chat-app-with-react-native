import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
const App = () => {
  return (
    <>
      <ChatsScreen />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
