import { View, Text, StyleSheet } from "react-native";
import ChatList from "../../src/components/Chat/ChatList";
import MenuBar from "../../src/components/MenuBar";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatList />
      <View style={styles.menuBarContainer}>
        <MenuBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },
  menuBarContainer: {
    flex: 0.1,
    backgroundColor: "yellowgreen",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
