import { View, Text } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './styles';
const Message = ({ message }) => {
  dayjs.extend(relativeTime);
  const { user, createdAt } = message;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: user.id === 'u1' ? '#DCF8C5' : 'white',
          alignSelf: user.id === 'u1' ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text style={styles.name}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;
