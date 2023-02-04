import {
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import bgImage from '../../../assets/images/BG.png';
import messages from '../../../assets/data/messages.json';
import Message from '../../components/Message';
import InputBox from '../../components/InputBox';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <KeyboardAvoidingView
        style={styles.bg}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
    </SafeAreaView>
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
