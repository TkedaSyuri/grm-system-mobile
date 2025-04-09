import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

function CheckTaskBtn() {
  const router = useRouter();

  const handleCompletedTask = () => {
    router.push("/task/completed");
  };

  return (
    <View style={styles.floorChangeBtnView}>
      <TouchableOpacity style={styles.floorChangeBtn}>
        <Text style={styles.floorChangeText} onPress={handleCompletedTask}>
          完了したタスク
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floorChangeBtnView: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  floorChangeBtn: {
    backgroundColor: "yellowgreen",
    padding: 5,
    borderRadius: 5,
    borderWidth: 2,
  },
  floorChangeText: {
    fontSize: 22,
    color: "black",
    fontWeight: "700",
  },
});

export default CheckTaskBtn;
