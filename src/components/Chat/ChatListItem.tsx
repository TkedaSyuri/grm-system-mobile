import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

interface ChatProps {
  id: number;
  message: string;
  createdAt: string;
}

const ChatListItem: React.FC<ChatProps> = (props) => {
  const { id, message, createdAt } = props;
  return (
    <View>
      <View>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  messageText: {
    padding: 10,
    borderBottomWidth: 1,
    fontSize: 20,
  },
});

export default ChatListItem;
