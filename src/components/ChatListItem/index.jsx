import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import styles from './styles';
const ChatListItem = ({ chat } = {}) => {
  const {
    user: { name, image },
    lastMessage,
    createdAt,
  } = chat;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.text}>{dayjs(createdAt).from()}</Text>
        </View>
        <Text style={styles.text} numberOfLines={2}>
          {lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;
