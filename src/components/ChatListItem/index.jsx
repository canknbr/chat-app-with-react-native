import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './styles';
const ChatListItem = ({ user } = {}) => {
  //   const { name, imageUri, message, time } = user;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
        }}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            name
          </Text>
          <Text style={styles.text}>time</Text>
        </View>
        <Text style={styles.text} numberOfLines={2}>
          message
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;
