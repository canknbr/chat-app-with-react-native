import { StyleSheet, Text, ImageBackground, FlatList } from 'react-native';
import bgImage from '../../../assets/images/BG.png';
import messages from '../../../assets/data/messages.json';
import Message from '../../components/Message';

const ChatScreen = () => {
  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
        style={styles.list}
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </ImageBackground>
  );
};
export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
  },
  list: {
    padding: 10,
  },
});
export default ChatScreen;
