import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import ChatList from "../../src/components/Chat/ChatList";
import MenuBar from "../../src/components/MenuBar";
import ChatBar from "../../src/components/Chat/ChatBar";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      {/* メッセージリスト コンポーネント*/}
      <ChatList />

      {/* メッセージ入力バー コンポーネント*/}
      <ChatBar />

      {/* メニューバー コンポーネント*/}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },

  textInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginRight: 10,
  },
});

export default ChatScreen;
