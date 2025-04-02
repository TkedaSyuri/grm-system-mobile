import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useGetFloor } from "../../src/hooks/useGetFloor";
import { getData } from "../../api/getRoom";



export default function HomeScreen() {
  const ButtonData = async (Num:string) => {
    try {
      const data = await getData(Num);  // 非同期処理を待つ
      console.log("データ取得後:", data);  // 取得したデータを表示
    } catch (error) {
      console.error("エラー:", error);
    }
  };
    


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roomBox} onPress={()=>ButtonData("2")}>
        <Text style={styles.buttonText}>{}号室</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roomBox}>
        <Text style={styles.buttonText}>202号室</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roomBox}>
        <Text style={styles.buttonText}>203号室</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellowgreen",
    alignItems: "center",
    color: "black",
  },
  roomBox: {
    width: "100%",
    padding:1
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
    borderWidth: 2,
    backgroundColor: "white",
  },
});
