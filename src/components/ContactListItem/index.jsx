import { View, Text, Image, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
const ContactListItem = ({ chat } = {}) => {
  const navigation = useNavigation();
  dayjs.extend(relativeTime);
  const {
    user: { name, image, status },
    lastMessage: { text },
    createdAt,
  } = chat;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Chat', { id: chat.id, name: name })}
    >
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.text} numberOfLines={2}>
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;
