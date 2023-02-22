import { StyleSheet, FlatList, View, SafeAreaView } from 'react-native';
import ContactListItem from '../../components/ContactListItem';
import chats from '../../../assets/data/chats.json';
const Contacts = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem chat={item} />}
      keyExtractor={item => item.id}
      style={{
        backgroundColor: 'white',
      }}
    />
  );
};

export default Contacts;
