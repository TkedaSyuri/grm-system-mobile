import { Text,StyleSheet, View, Button } from "react-native";
import { router } from "expo-router";

export default function RoomScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>客室画面</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellowgreen",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
});
