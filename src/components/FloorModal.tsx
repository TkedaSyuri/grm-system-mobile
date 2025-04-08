import { useAtom, useSetAtom } from "jotai";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { StyleSheet } from "react-native";
import { floorNuberAtom, isFloorModalAtom } from "../store";

const RoomNumbers = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function FloorModal() {
  const setFloorNumber = useSetAtom(floorNuberAtom);
  const [showFloorModal, setShowFloorModal] = useAtom(isFloorModalAtom);

  const handleFloor = (floorNumber: string) => {
    setFloorNumber(floorNumber);
  };

  const handleCloseBtn = ()=>{
    setShowFloorModal(!showFloorModal)
  }

  return (
    <Modal animationType="slide" transparent={true} visible={showFloorModal}>
      <TouchableWithoutFeedback onPress={handleCloseBtn}>
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <View style={styles.container}>
              {RoomNumbers.map((roomNumber,index) => (
                <Text
                key={index}
                  onPress={() => handleFloor(`${roomNumber}`)}
                  style={styles.text}
                >
                  {roomNumber}F
                </Text>
              ))}
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowFloorModal(false)}
            >
              <Text style={styles.closeText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  container: {
    flexDirection: "column",
  },
  text: {
    fontSize: 25,
    color: "black",
    paddingVertical: 5,
  },

  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
  roomNumberText: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: 3,
  },
  floorNumberBtn: {
    paddingLeft: 10,
    flexDirection: "row",
  },
});

export default FloorModal;
