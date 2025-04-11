import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

function MenuBar() {
  const router = useRouter();
  const handleMoniterPress = () => {
    router.push("/home");
  };
  const handleTaskPress = () => {
    router.push("/task");
  };
  const handleChatPress = () => {
    router.push("/chat");
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text} onPress={handleMoniterPress}>
          客室状況
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} onPress={handleTaskPress}>
          タスク
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} onPress={handleChatPress}>チャット</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 10,
    backgroundColor: "yellowgreen",
    alignContent:"center",
    alignItems:"center"
  },
  textContainer: {
    margin: 15,
  },
  text: {
    fontSize: 23,
    color: "black",
    fontWeight: "700",
  },
});

export default MenuBar;
