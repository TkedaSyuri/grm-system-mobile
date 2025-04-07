import { View, Text} from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import {  useAtom} from "jotai";
import { isFloorModalAtom } from "../store";

function MenuBar() {
  const [showFloorModal,setShowFloorModal] = useAtom(isFloorModalAtom)

  const handleShowFloorModal = ()=>{
    setShowFloorModal(!showFloorModal)
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text  style={styles.text} onPress={handleShowFloorModal}>フロア</Text>
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
    alignItems:"center"
  },
  textContainer: {
    padding:15,
    
  },
  text: {
    fontSize: 25,
    color: "black" ,
    fontWeight: "500",
  },
});

export default MenuBar;
