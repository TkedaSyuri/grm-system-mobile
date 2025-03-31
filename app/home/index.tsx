import { StyleSheet, View, Button } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {



  return (
    <View style={styles.container}>
      <Button   title="客室状況" onPress={() => router.push({ pathname: "/room" })}/>
      <Button  title="タスク" onPress={() => router.push({ pathname: "/task" })}/>
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
    ,fontSize: 50
  }
});
