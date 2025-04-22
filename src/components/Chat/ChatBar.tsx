import { Button } from "@rneui/base";
import { useState } from "react";
import { View, StyleSheet,TextInput } from "react-native";


const ChatBar = () => {
    const [message, setMessage] = useState("");

const handleSubmitMessage = async (newMessage:string)=>{
  try{
    await fetch(`${process.env.EXPO_PUBLIC_APP_VERSION}/api/chat/create`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newMessage: `${newMessage}` }),
    })
    setMessage("")
  }catch(e){
    console.log(e)
  }
}
  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="メッセージを入力…"
          value={message}
          onChangeText={setMessage}
        />
        <Button title="送信" onPress={() => handleSubmitMessage(message)} />
      </View>

  )
}

const styles = StyleSheet.create({
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
    
})

export default ChatBar