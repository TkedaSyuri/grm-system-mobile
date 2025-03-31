import { Text,StyleSheet, View,} from "react-native";
import { router } from "expo-router";

export default function RoomScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>タスク画面</Text>
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
