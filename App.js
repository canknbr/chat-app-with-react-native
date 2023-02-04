import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View ,SafeAreaView} from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import chats from './assets/data/chats.json';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
