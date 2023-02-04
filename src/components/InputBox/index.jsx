import { View, Text, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import styles from './styles';
const InputBox = () => {
  const [message, setMessage] = useState('');
  const handlePress = () => {
    console.warn(`Sending: ${message}`);
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={styles.textInput}
        placeholder="type your message"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
      />
      <View style={styles.send}>
        <MaterialIcons
          name="send"
          size={24}
          color="white"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default InputBox;
