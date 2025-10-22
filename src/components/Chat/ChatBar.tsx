import { Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon } from "@rneui/base";
import Constants from "expo-constants";
import { useAtomValue } from "jotai";
import { floorNumberAtom } from "../../store";

const API_BASEURL =
  Constants.expoConfig?.extra?.apiBaseUrl ??
  process.env.EXPO_PUBLIC_API_BASEURL;

const ChatBar = () => {
  const floorNumber =useAtomValue(floorNumberAtom)

  const [message, setMessage] = useState("");
  const sender = "housekeeper";

  const handleSubmitMessage = async (
    newMessage: string,
    sender: string,
    floorNumber: string
  ) => {

    try {
      if (message !== "") {
        await fetch(`${API_BASEURL}/api/chats`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            newMessage: `${newMessage}`,
            sender: sender,
            floorNumber: floorNumber,
          }),
        });
      }
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="メッセージを入力…"
        value={message}
        onChangeText={setMessage}
      />
      <Icon
        name="send"
        color={"blue"}
        size={30}
        onPress={() => handleSubmitMessage(message, sender, floorNumber)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "yellowgreen",
  },
  textInput: {
    marginRight: 10,
    margin: 9,
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
  },
});

export default ChatBar;
