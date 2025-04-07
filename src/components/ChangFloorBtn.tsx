import { useAtom } from "jotai";
import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { isFloorModalAtom } from "../store";

function ChangFloorBtn() {
  const [showFloorModal, setShowFloorModal] = useAtom(isFloorModalAtom);

  const handleShowFloorModal = () => {
    setShowFloorModal(!showFloorModal);
  };

  return (
    <View style={styles.floorChangeBtnView}>
      <TouchableOpacity style={styles.floorChangeBtn}>
        <Text style={styles.floorChangeText} onPress={handleShowFloorModal}>
          フロア変更
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

export default ChangFloorBtn;
