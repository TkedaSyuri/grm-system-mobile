import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

interface ChatProps {
  id: number;
  message: string;
  sender: string;
  createdAt: string;
}

const ChatListItem: React.FC<ChatProps> = (props) => {
  const { id, message, sender, createdAt } = props;
  return (
    <View>
      <View>
        {sender === "housekeeper" ? (
          <Text style={styles.senderHousekeeper}>ハウスキーパー</Text>
        ) : (
          <Text style={styles.senderFront}>フロントスタッフ</Text>
        )}
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  senderHousekeeper: {
    padding: 5,
    margin: 5,
    fontSize: 15,
    width: 140,
    color: "white",
    backgroundColor: "green",
    borderRadius: 13,
    textAlign: "center",
    display: "flex",
    alignSelf: "flex-end",
  },
  senderFront: {
    padding: 5,
    margin: 5,
    fontSize: 15,
    width: 140,
    color: "white",
    backgroundColor: "blue",
    borderRadius: 13,
    textAlign: "center",
    display: "flex",
  },

  messageText: {
    padding: 10,
    borderBottomWidth: 1,
    fontSize: 20,
  },
});

export default ChatListItem;
