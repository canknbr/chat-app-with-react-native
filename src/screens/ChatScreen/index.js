import {
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from 'react-native';
import bgImage from '../../../assets/images/BG.png';
import messages from '../../../assets/data/messages.json';
import Message from '../../components/Message';
import InputBox from '../../components/InputBox';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const ChatScreen = () => {
  const route = useRoute();
  const { name } = route.params;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerTitleAlign: 'left',
    });
  }, [navigation, route]);
  return (
    <View style={styles.bg}>
      <KeyboardAvoidingView
        style={styles.bg}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <ImageBackground source={bgImage} style={styles.bg}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            inverted
            style={styles.list}
            decelerationRate="fast"
            snapToAlignment="start"
          />
          <InputBox />
        </ImageBackground>
      </KeyboardAvoidingView>
    </View>
  );
};
export const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
export default ChatScreen;
