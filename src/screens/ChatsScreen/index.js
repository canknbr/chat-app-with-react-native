import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import ChatListItem from '../../components/ChatListItem';
import chats from '../../../assets/data/chats.json';
export default function ChatsScreen() {
  return (
    <View
      style={{
        paddingTop: 50,
      }}
    >
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
