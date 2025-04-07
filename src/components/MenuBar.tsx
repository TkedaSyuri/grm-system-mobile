import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";


function MenuBar() {
const router =useRouter()
const handleMoniterPress = ()=>{
  router.push("/home")
}
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text} onPress={handleMoniterPress} >客室状況</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>タスク</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>チャット</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent:"center",
    alignItems:"center",
    paddingBottom:10
  },
  textContainer: {
    padding:15,
    
  },
  text: {
    fontSize: 23,
    color: "black" ,
    fontWeight: "700",
  },

});

export default MenuBar;
